require("dotenv").config();

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        set: (value) => {
            return bcrypt.hashSync(value, 10);
        }
    },
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;