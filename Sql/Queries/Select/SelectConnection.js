//  Embedded Javascrtipt

const mysql = require("mysql");

const con = mysql.createConnection( {
    user: "localhost",
    user: "root",
    password: "",
    database: "dbdarsh"
});

con.connect(function(err) {
    if (err) throw err;
});

module.exports = con;