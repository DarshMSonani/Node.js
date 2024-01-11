const con = require("./Connection");

const express = require("express");
const app = express();

let sql = "CREATE DATABASE ds";

con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Created Suucess Fully");
})

const port = 8500;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});