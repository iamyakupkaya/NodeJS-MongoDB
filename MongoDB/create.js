/*const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId; */

// yukarıdaki kullanımı aşağıdaki gibi kullanabiliriz.. 3 Satırı tek satıra indirgeme
const { MongoClient, ObjectId } = require("mongodb"); //object destruction

const databaseURL = "mongodb://localhost:27017";
const databaseName = "deneme";

MongoClient.connect(databaseURL, (error, result) => {
  if (error) {
    return console.log("WARN..! DB ERROR..");
  } else {
    console.log("DB ye bağlandı");
    const db = result.db(databaseName);
    db.collection("demirbas").insertOne(
      {
        name: "Yakup",
        surname: "KAYA",
        age: 27,
        city: "Manisa",
        military: false,
      },
      (err, res) => {
        if (err) {
          console.log("ERROR.. GELDİ");
        } else {
          console.log(res.ops);
        }
      }
    );
    //ayrıca db collection bir promise da döndürebilir aşağıdaki gibi
    db.collection("demirbas")
      .insertOne({
        name: "Ali",
        surname: "Ağa",
        age: 15,
        city: "Ankara",
      })
      .then((result) => {
        console.log("gelen değer: ", result);
      })
      .catch((err) => {
        console.log("Gelen ERROR: ", err);
      });

    /* // multi document add
    db.collection("collection_name").insertMany([
      {
        name: "as",
        surname: "bc",
      },
      {
        name: "ef",
        surname: "dk",
      },
    ]).then((result) => {
        console.log("Eklenen değer bilgisi")
    })
    .catch((err) => {
        console.log("İnsert yapılırken hata")
    }); */
  }
});
