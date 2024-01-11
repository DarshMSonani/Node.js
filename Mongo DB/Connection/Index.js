const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";  // For Connect With Mongodb In Local

const client = new MongoClient(url);

const database = "e-com"

async function getData() {

    const result = await client.connect();

    const db = result.db(database);

    const collection = db.collection("products");

    const response = await collection.find({}).toArray();

    console.log(response);
}
getData();