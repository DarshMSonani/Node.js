const mongoose = require("mongoose");


const dbConnection = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/school")
        .then(() => {
            console.log("Connected Sucessfully");
        })
        .catch((err) => {
            console.log("The Err Of Connection Is " + err);
        });
};

module.exports = dbConnection;