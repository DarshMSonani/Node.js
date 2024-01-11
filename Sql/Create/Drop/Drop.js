const con = require("./Connection");

const express = require("express");
const app = express();

// For Table
// let sql = "DROP TABLE user";

// For Data Base
let sql = "DROP DATABASE ds";

con.query(sql, function(err) {
    if (err) throw err;
    console.log("Droped ");
})


const port = 1000;

app.listen(port, "127.0.0.10", () => {
    console.log(`Server is running at http://localhost:${port}`);
});