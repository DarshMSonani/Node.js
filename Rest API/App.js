const express = require("express");
const app = express();

const databaseConection = require("./connection/connection");

const products_root = require("./root/products")

app.get("/", function (req, res) {
    res.send("<h1>Home Page</h1>");
});

// Middleware Or To set Router
app.use("/api/products", products_root)

const port = 1300;

const start = async () => {
    try {
        await databaseConection();

        app.listen(port, "127.0.0.1", () => {
            console.log(`Server is running on http://localhost:${port}`);
        })
    } catch (error) {
        console.log(error);
    }
};
start();