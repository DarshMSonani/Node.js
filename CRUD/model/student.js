const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 18, max: 60 },
    fees: { type: mongoose.Decimal128, required: true, validate: (value) => value >= 5000.5 }
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel