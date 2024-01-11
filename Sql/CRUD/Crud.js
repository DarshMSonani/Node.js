const con = require("./CrudConnection");

const express = require("express");
const app = express();

const bodyparser = require("body-parser");

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/Crud.html");
});

// Ejs
app.set("view engine", "ejs");

// Json
app.use(bodyparser.json());

// UrlEncoded
app.use(bodyparser.urlencoded({extended:true}));

app.post("/", function(req, res) {

    let name = req.body.name;
    let email = req.body.email;
    let mno = req.body.mno;
    console.log(`Name: ${name} Email:${email}`);
    
    let sql = "INSERT INTO `insert1`(name, email, mno) VALUES ('"+name+"','"+email+"','"+mno+"')"

    con.query(sql, function(err) {
        if (err) throw err;
        res.redirect("/student");
    });
});

// Rout For Student

app.get("/student", function(req, res) {
    
    let sql = "SELECT * FROM insert1";

    con.query(sql, function(err, result) {
        if (err) throw err;
        res.render(__dirname+"/CrudStudent", { student: result});
    });
});

// Rout For Delete

app.get("/delete-recored", function(req, res) {

    let sql = "DELETE FROM `insert1` WHERE sr = " + req.query.id;

    con.query(sql, function(err) {
        if (err) throw err;
        res.redirect("/student");
    });
});

// Update Query

app.get("/update-recored", function(req, res) {
    let sql = "SELECT * FROM insert1 WHERE sr =" + req.query.id;

    con.query(sql, function(err, result){
        if (err) throw err;
        res.render(__dirname+"/CrudUpdate", {student:result});
    });
});

app.post("/update-recored", function(req, res) {
    
    let name = req.body.name;
    let email = req.body.email;
    let mno = req.body.mno;
    let sr = req.body.sr;

    let sql = "UPDATE `insert1` SET name=?, email=?, mno=?  WHERE sr =" + req.query.id;

    con.query(sql,[name,email, mno,sr], function(err) {
        if (err) throw err;
        res.redirect("/student");
    });
});

const port = 6400;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});