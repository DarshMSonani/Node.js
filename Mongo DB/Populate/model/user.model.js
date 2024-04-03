const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }
});


userSchema.set("toObject", { virtuals: true, setter: true, getter: true });
userSchema.set("toJSON", { virtuals: true, setter: true, getter: true });

userSchema.virtual("post", {
    ref: "post",
    localField: "_id",
    foreignField: "userId"
})

userSchema.virtual("comment", {
    ref: "comment",
    localField: "_id",
    foreignField: "userId"
})

const userModel = new mongoose.model("user", userSchema);

module.exports = userModel