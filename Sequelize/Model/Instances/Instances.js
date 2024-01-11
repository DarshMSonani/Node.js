require("./Connection");
const userCtrl = require("./Controler/UserController");
console.log(userCtrl.addUser,"sssss");
const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Home Page");
});

app.get("/add", userCtrl.addUser)
const port = 3030;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});