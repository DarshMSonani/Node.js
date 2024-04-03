const mongoose = require("mongoose")

const mongooseCon = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/lookup")
        .then(() => {
            console.log("Yes");
        })
        .catch((err) => {
            console.log("db", err);
        })
}

module.exports = mongooseCon