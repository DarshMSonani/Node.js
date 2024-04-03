const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, required: true, ref: "user" },
    about: { type: String, required: true },
});



const postModel = new mongoose.model("post", postSchema);

module.exports = postModel