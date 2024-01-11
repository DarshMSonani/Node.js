const express = require("express");

const app = express();

app.set("view engine", "pug"); // For Give Type Of view Engine

app.get("/", function (req, res) {
    res.send("Home Page");
});

app.get("/home", function (req, res) {

    let params = {
        name: "Ram",
        id: 2,
        bloges: [
            "Node", "Php", "Java", "React"
        ]
    }
    res.render("home", params);
});

app.get("/form", function (req, res) {
    res.render("add-form");
})

const port = 3000;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server running on http://localhost:${port}`);
});