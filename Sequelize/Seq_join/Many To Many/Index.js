require("./config/db.config");

const userCtrl = require("./controller/UserController");

const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Home Page")
});

app.get("/add", userCtrl.adduser);

app.get("/addtag", userCtrl.addtag);

app.get("/manytomany", userCtrl.manytomany);

const port = 2400;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});