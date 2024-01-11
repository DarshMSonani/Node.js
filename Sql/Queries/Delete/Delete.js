const con = require("./DeletConnection");

const express = require("express");
const app =  express();

const bodyparser = require("body-parser");

// Routing FOr Form To Print

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/Delete.html");
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

    let sql = "SELECT * FROM insert1"
    con.query(sql, function(err, result) {
        if (err)throw err;
        res.render(__dirname + "/Delete" , {student:result});
    });
});

// Delet Rout

app.get("/delete-recored", function(req,res) {
    console.log(req.query);
    let sql = "DELETE FROM insert1 WHERE sr =" + req.query.id;

    // let sr =req.query.id;
    // console.log(sr);

    con.query(sql, function(err) {
        if (err) throw err;

        res.redirect("/student");
    })
})


let port = 6500

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on port http://localhost:${port}`);
});