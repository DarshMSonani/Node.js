const mysql = require("mysql");

const con = mysql.createConnection( {
    host: "localhost",
    user: "root",
    password: "",
    database: "dbdarsh"
});

module.exports = con, mysql;