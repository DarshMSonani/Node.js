const con = require("./Connection");

const express = require("express");
const app = express();

let sql = `CREATE TABLE user (
    sr INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR (100),
    mno BIGINT (10)
)`;

// Forgin Key
// let sql = `CREATE TABLE orders (
//     oid INT PRIMARY KEY,
//     orderdate DATE,
//     oamount BIGINT,
//     sr INT,
//     FOREIGN KEY (sr) REFERENCES users(sr)
// )`;

con.query(sql, function(err) {
    if (err) throw err;
    console.log("Created SucessFully");
})

const port = 5200;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server started on http://localhost:${port}`);
});