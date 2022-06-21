const { MongoClient } = require("mongodb");

const databaseURL = "mongodb://localhost:27017";
const databaseName = "deneme"; //database name

MongoClient.connect(databaseURL, (error, connection) => {
  if (error) {
    return console.log("We have a error with connection.!");
  } else {
    const db = connection.db(databaseName);
    db.collection("demirbas")
      .updateOne(
        { age: 15 },
        {
          $set: {
            // güncelleyeceğimiz objeyi set ile belirtmemiz lazım
            name: "Muhammed",
            surname: "KAYA",
            age: 25,
          },
          // $inc verilen değere ne kadar ekleneceğini belirtitiz.
        }
      )
      .then((result) => console.log("Güncellenen Değer:", result))
      .catch((error) => console.log("Güncellerken hata çıktı. HATA:", error));
    // modiefCount  = kaç tane veri güncellendi
    // matchCount = kaç tane veri ile eşleşti
  }
});
