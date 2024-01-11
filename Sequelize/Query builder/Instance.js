require("./Connection");
const userCtrl = require("./Controller/UserController")

const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Home Page");
});

app.get("/add", userCtrl.addUser);

app.get("/crud", userCtrl.crudOperation);

const port = 2000;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});