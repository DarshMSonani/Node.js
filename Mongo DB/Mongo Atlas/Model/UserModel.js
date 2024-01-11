const mongoose = require("mongoose");

const userModel = mongoose.Schema(
    {
        name: String,
        email: String
    }
)

const User = mongoose.model("users", userModel)

module.exports = User