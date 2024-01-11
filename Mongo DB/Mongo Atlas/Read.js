const mongoose = require("./config/connection");

const express = require("express");
const app = express();

const User = require("./Model/UserModel");


app.get("/", function (req, res) {
    res.send("Home Page")
});

app.get("/read", async function (req, res) {
    let data = await User.find();
    res.status(200).send({ "data": data })
})
const port = 2000;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on https://localhost:${port}`);
})