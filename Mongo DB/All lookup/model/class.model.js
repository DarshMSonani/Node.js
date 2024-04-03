const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    className: { type: String, required: true },
    parent_id: { type: mongoose.Schema.Types.ObjectId, allownull: false }
});

const classModel = new mongoose.model("class", classSchema);

module.exports = classModel