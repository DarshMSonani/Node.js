const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    postId: { type: mongoose.Types.ObjectId, required: true, ref: "post", },
    userId: { type: mongoose.Types.ObjectId, required: true, ref: "user", },
    comment: { type: String, required: true },
});

const userModel = new mongoose.model("comment", userSchema);

module.exports = userModel