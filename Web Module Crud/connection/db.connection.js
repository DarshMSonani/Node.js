const mongoose = require("mongoose");

const databaseConection = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/school")
        .then(() => {
            console.log("Conncted Sucessfully");
        })
        .catch((err) => {
            console.log("The Err Is" + err);
        })
}

module.exports = databaseConection;