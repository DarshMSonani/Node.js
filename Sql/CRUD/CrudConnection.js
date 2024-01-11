const mysql = require("mysql");

const con = mysql.createConnection( {
    host: "localhost",
    user: "root",
    password: "",
    database: "dbdarsh"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected" ,con.threadId);
});

module.exports = con;