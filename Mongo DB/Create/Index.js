var { MongoClient } = require('mongodb');
var url = "mongodb://127.0.0.1:27017/e-com";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});