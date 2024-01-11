const monggose = require("./config/connection");

const User = require("./Model/UserModel");

const express = require("express");
const app = express();


app.get("/", function (req, res) {
    res.send("Home Page")
})

app.get("/update", async function (req, res) {

    let data = await User.findByIdAndUpdate(req.query.id, { name: req.query.name });
    res.status(200).send(data);
})

const port = 2000;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on port ${port}`);
})