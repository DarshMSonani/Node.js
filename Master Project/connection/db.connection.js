const mongoose = require("mongoose");

const con = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/project")
        .then(() => {
            console.log("Connected");
        })
        .catch((err) => {
            console.log("The Connection Err Is " + err);
        });
}

module.exports = con;