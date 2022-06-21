const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const databaseURL = "mongodb://localhost:27017";
const databaseName = "deneme"; //database name

// MongoClint ile mongoDb ye bağlanırız. verilen url ile de bağ kurarız.
MongoClient.connect(databaseURL, (error, result) => {
  if (error) {
    return console.log("WARN..! DB ERROR..");
  } else {
    const db = result.db(databaseName); //kendi databasemize ulaşıyoryuz
    //collection name
    db.collection("demirbas")
      .find({
        name: "Yakup",
      })
      .toArray()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      }); // bana Yakup olanları dizi olarak getirir.

    // find how many query we have
    db.collection("demirbas").count({ name: "Yakup" }, (error, count) => {
      console.log("Gelen Adet:", count);
    });

    //find just unique one with findOne like id, mail, username
    db.collection("demirbas")
      .findOne({ age: 15 })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
