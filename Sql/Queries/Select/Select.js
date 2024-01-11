const con = require("./SelectConnection");

const express = require("express");
const app =  express();

const bodyparser = require("body-parser");

// Routing FOr Form To Print

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/Select.html");
});

//Ejs || view engine
app.set("view engine", "ejs");

// Json Data
app.use(bodyparser.json());

// Url Encoded
app.use(bodyparser.urlencoded( { extended : true}));

app.post("/",  function(req, res) {

    let name = req.body.name;
    let email = req.body.email;
    let mno = req.body.mno;

    let sql = "INSERT INTO insert1(name, email, mno) VALUES ('"+name+"', '"+email+"','"+mno+"')"

    con.query(sql, function(err) {
        if (err) throw err;
        // res.send("Inserted Sucess Fully");
        res.redirect("/student")
    });
});

app.get("/student" , function(req, res) {

    let sql = "SELECT * FROM insert1";

    con.query(sql, function(err, result) {
        if (err)throw err;
        res.render(__dirname + "/Select" , {student:result});
    });
});

let port = 2500

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on port http://localhost:${port}`);
})