const mongoose = require("mongoose");

const databaseConnection = () => {
    mongoose.connect("mongodb+srv://darshsonanim:hVQzZk7IOosawTvr@cluster0.qacnjf3.mongodb.net/Api?retryWrites=true&w=majority")
        .then(() => {
            console.log("Connected Sucessfully");
        })
        .catch((err) => {
            console.log("The Err Is" + err);
        });
}

module.exports = databaseConnection;