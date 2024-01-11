require("./config/db.config");

const userCtrl = require("./Controller/UserController");

const config = require("./config/config");

const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Home Page");
});

app.get("/add", userCtrl.addUser);

app.get("/onetoone", userCtrl.onetoone);

app.get("/belongsto", userCtrl.belongesto);

app.get("/onetomany", userCtrl.onetomany);


const port = 2200;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});