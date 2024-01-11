require("dotenv").config();

const mongoose = require("mongoose");

const mongooseCon = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Connected");
        })
        .catch((err) => {
            console.log("The Err Of Mongodb Connection Is ", err);
        });
};

module.exports = mongooseCon;