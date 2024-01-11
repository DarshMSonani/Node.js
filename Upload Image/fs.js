const express = require("express");

const app = express();

const fs = require("fs");

// app.get("/", function (req, res) {
//     fs.copyFile("Copy.jpg", "1.jpg", (err) => {
//         if (err) throw err;
//         console.log("Heloo.txt Was Copied");
//     });
// });
// app.get("/1", function (req, res) {
//     let a = fs.createReadStream("Copy1.jpg").pipe(fs.createWriteStream("2.jpg"));
// });

app.get("/1", function (req, res) {
    var filename = "Demo.mp4";

    var binaryData = fs.readFileSync(filename);

    const base64 = new Buffer(binaryData).toString("base64");

    res.send(base64);
});


app.listen(2510)