const reqFilter = require("./middelware");

const express = require("express");

const app = express();

const route = express.Router();

route.use(reqFilter)

app.get("", (req, res) => {
    res.send("Hello, This is Home Page");
});

// Request Filter for One Middelware rout

route.get("/about", (req, res) => {
    res.send("Hello, This is About Page");
});

route.get("/contect", (req, res) => {
    res.send("Hello, This is Contect Page");
});

app.use("/", route);

const fs = require('fs')

app.get('/users', function (req, res) {
    const user = req.body
    user.name = "Ram"
    fs.appendFile('Stream.txt', JSON.stringify({ name: user.name, age: user.age }), (err) => {
        res.send('successfully registered')
    }); any
});

app.listen(5000);