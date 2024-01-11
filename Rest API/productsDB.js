const databaseConnection = require("./connection/connection");

const product = require("./model/ProductModel");

const productJson = require("./products.json");

const start = async () => {
    try {
        await databaseConnection();
        // await product.create(productJson);
        console.log("Sucesss");
    } catch (err) {
        console.log("The Err Is In Try Catch" + err);
    }
}

start();