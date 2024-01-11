// Ejs Full Name Is Embedded Java script

const express = require("express");

const app = express();

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./Ram"))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/Home.html");
});

// app.get("/profile/:name", function (req, res) {
//     console.log(req.params.name);
//     dataa = { email: "test@gmail.com", address: "Noida", skill: ["NodeJs", "Php", "Java"] };
//     res.render("profile", { name: req.params.name, data: dataa });
// })

app.get("/home", function (req, res) {
    let params = {
        name: "Ram",
        id: 1,
        bloges: [
            "node", "angular", "React", "Php", "java"
        ]
    }
    res.render("home", params)
})

const port = 9000;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});