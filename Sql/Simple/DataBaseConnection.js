var mysql = require('mysql');

const http = require("http");

const server = http.createServer( (req, res)  => {
  res.end("Hello From The Other Side")
});

var port = 3002

server.listen( port, "127.0.0.1",() => {
  console.log(`Listening on port http://localhost:${port}`)
});
    
var con = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: "",
  database: "dbdarsh"
});

const table = "phptrip"

con.connect(function(err) {
  if (err) throw err;
  con.query(`SELECT * FROM ${table}`, function (err, result, fields) {
    // if (err) throw err;
// document.write(result)
    console.log(result);
  });
// console.log(con.threadId);
});