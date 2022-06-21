const { MongoClient, ObjectId } = require("mongodb");

const databaseURL = "mongodb://localhost:27017";
const databaseName = "deneme"; //database name

MongoClient.connect(databaseURL, (error, connection) => {
  if (error) {
    return console.log("HATA DELETE PROGCESS");
  } else {
    const db = connection.db(databaseName);

    //delete with id
    db.collection("demirbas")
      .deleteOne({ _id: new ObjectId("62b194a5d402c1f680327b7a") })
      .then((result) => {
        console.log("Silinen data", result);
      })
      .catch((error) => {
        console.log("Silinirken Hata oldu.", error);
      });

    /*  db.collection("demirbas")
      .deleteOne({ age: 25 })
      .then((result) => {
        console.log("Silinen data", result);
      })
      .catch((error) => {
        console.log("Silinirken Hata oldu.", error);
      }); */
  }
});
