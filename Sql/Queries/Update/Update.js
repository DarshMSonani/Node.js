const con = require("./UpdateConnection");

const express = require("express");
const app = express();

const bodyparser = require("body-parser");
// const e = require("express");

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/Update.html");
});

// app.post("/", function(req, res) {
//     res.sendFile(__dirname + "/Update.html");
// });

// Ejs
app.set("view engine", "ejs");

// Json
app.use(bodyparser.json());

// Url Encoded
app.use(bodyparser.urlencoded( {extended : true}));

app.post("/", function(req, res) {

    let name = req.body.name;
    let email = req.body.email;
    let mno = req.body.mno;

    let sql = "INSERT INTO insert1 (name, email, mno) VALUES ('"+name+"', '"+email+"', '"+mno+"')"

    con.query(sql, function(err) {
        if (err) throw err;
        res.send("insertrd sucess fully")
        res.redirect("/student")
    });
}) ;

app.get("/student" , function(req, res) {

    let sql = "SELECT * FROM insert1"
    con.query(sql, function(err, result) {
        if (err)throw err;
        res.render(__dirname + "/Update" , {student:result});
    });
});

// Delete Rout

app.get("/delete-recored", function(req, res) {
    let sql = "DELETE FROM insert1 WHERE sr = " + req.query.id;

    con.query(sql, function(err, result) {
        if (err) throw err;

        res.redirect("/student");
    });
});


// Update Rout

app.get("/update-recored", function(req, res) {
    
    let sql = "SELECT * FROM insert1 WHERE sr =" + req.query.id;

    con.query(sql, function(err, result) {
        if (err) throw err;
        res.render(__dirname+"/UpdateStudent", {student:result});
    });
});

app.post("/update-recored", function(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let mno = req.body.mno;
    let sr = req.body.sr;

    let sql = "UPDATE insert1 SET name=?, email=? ,mno=? WHERE sr = " + req.query.id;

    con.query(sql, [name, email, mno, sr], function(err, result) {
        if (err) throw err;
        res.redirect("/student");
    });
});



const port = 6500;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});