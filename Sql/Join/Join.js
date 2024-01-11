const con = require("./Connection");

// Inner Sql Join

// let sql = "SELECT * FROM users, orders WHERE users.sr = orders.sr";

// let sql = "SELECT * FROM users JOIN orders ON users.sr = orders.sr"

// let sql = "SELECT  users.sr, name, oamount FROM users JOIN orders ON users.sr = orders.sr"


// Left Sql Join
// let sql = "SELECT users.sr, name, oamount FROM users LEFT JOIN orders ON users.sr = orders.sr"

// Right Sql Join
let sql = "CREATE TABLE post ()"

con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
});