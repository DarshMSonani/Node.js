const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.ObjectId, required: true, ref: "products" },
    quentity: { type: Number, required: true }
});

const orderModel = new mongoose.model("productOrder", orderSchema);

module.exports = orderModel