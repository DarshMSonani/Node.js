const mysql = require("mysql");

const con = mysql.createConnection( {
    host: "localhost",
    user: "root",
    password: "",
    database: "ds"
});

con.connect(function(err) {
    if (err) throw err;
    // console.log("connectrd");
});

module.exports = con;