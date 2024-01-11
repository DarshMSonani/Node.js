const express = require("express");

const app = express();

const dbConnection = require("./config/db.connection");
dbConnection();

const bodyparser = require("body-parser");

// Json Data
app.use(bodyparser.json());

// Url Encodede
app.use(bodyparser.urlencoded({ extended: true }));

// For The Routes
const web = require("./roout/web");

// View Engine
app.set("view engine", "ejs");

// Seting The Rout
app.use("/student", web)

app.get("/", function (req, res) {
    res.send("This Is Home Page")
});

app.get("/g", function (req, res) {
    res.render("index")
});

const port = 2020;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});