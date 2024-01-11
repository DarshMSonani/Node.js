const con = require("./InsertConnection");

const express = require("express");
const app = express();

const bodyparse = require("body-parser");
const bodyParser = require("body-parser");

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/Insert.html");
})

// Json Data
app.use(bodyparse.json());

// Url Encoded
app.use(bodyParser.urlencoded( { extended : true}));

app.post("/", function(req,res) {

    let name = req.body.name;
    let email = req.body.email;
    let mno = req.body.mno;

    con.connect(function(err) {
        if (err) throw err;

        let sql = "INSERT INTO `insert1`(name, email, mno) VALUES ('"+name+"', '"+email+"', '"+mno+"')";

        con.query(sql, function(err) {
            if (err) throw err;

            res.send("Inserted Successfully");
        })
    })
})

app.listen(3500, "127.0.0.1", () => {
    console.log("Server is running on https://localhost:3500");
});