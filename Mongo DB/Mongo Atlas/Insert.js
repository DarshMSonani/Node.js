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

app.get("/update", async function (req, res) {

    let data = await User.findByIdAndUpdate(req.query.id, { name: req.query.name });
    res.status(200).send(data);
})

app.get("/read", async function (req, res) {
    let data = await User.find();
    res.status(200).send({ "data": data })
})

app.get("/delete", async function (req, res) {
    let data = await User.findByIdAndDelete(req.query.id);
    res.status(200).send(data)
})
