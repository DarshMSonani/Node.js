const mongoose = require("mongoose");

const url = "mongodb+srv://darshsonanim:hVQzZk7IOosawTvr@cluster0.qacnjf3.mongodb.net/demo?retryWrites=true&w=majority"

mongoose.connect(url)
    .then(() => {
        console.log("Connected Succesfully");
    })
    .catch((err) => {
        console.log("The Err Is" + err);
    });

module.exports = mongoose;