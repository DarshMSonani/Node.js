const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const con = require("./connection/db.connection");
con();

const web = require("./root/web");

app.use("/", web)
app.get("/", (req, res) => {
    res.redirect
})
const port = 2500;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});