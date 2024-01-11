const mysql = require("mysql");

const con = mysql.createConnection( {
    host: "localhost",
    user: "root",
    password: "",
    database: "dbdarsh"
});

con.connect( function(err) {
    if(err) err;
})

module.exports = con;