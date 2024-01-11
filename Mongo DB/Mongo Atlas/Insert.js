const express = require("express");

const app = express();

const mongoose = require("mongoose");
const User = require("./Model/UserModel");

const url = "mongodb+srv://darshsonanim:hVQzZk7IOosawTvr@cluster0.qacnjf3.mongodb.net/demo?retryWrites=true&w=majority";

mongoose.connect(url)
    .then(() => {
        console.log("Connected Sucessfully");
    })
    .catch((err) => {
        console.log("The Err Is" + err);
    });

const port = 2000;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", function (req, res) {
    res.send("Home Page")
})

app.get("/insert", async function (req, res) {
    let data = new User();

    data.name = "Ganesh",
        data.email = "Ganesh@gmail.com"

    data.save()
    res.status(200).send({ "data": data })
})