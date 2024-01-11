const express = require("express");

const app = express();

const bodyparser = require("body-parser");

const web = require("./routes/web")

const dbConnect = require("./connection/db.connection")
dbConnect();

// Json
app.use(bodyparser.json());

// Url
app.use(bodyparser.urlencoded({ extended: true }))

app.set("view engine", "ejs");

// Load Routes
app.use("/student", web);

const port = 2000;


app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});