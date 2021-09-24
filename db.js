var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/local?authSource=kedsCord";
const dbName = 'kedsCord';
//const insertDocuments = function(db, callback) {
  
console.log('inserted successfully');

//}

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    const dB = db.db(dbName);
    console.log(dbName);
    
      db.close();
    });



