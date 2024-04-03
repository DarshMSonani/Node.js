const userModel = require("../model/user.model");
const orderModel = require("../model/order.model")

const creat = async (req, res) => {
    const { name, brand, price, category } = req.body

    const all = await userModel.create({ name, brand, price, category })
    return res.json({ all })
}

const read = async (req, res) => {
    const all = await userModel.find()
    return res.json({ all })
}

const update = async (req, res) => {
    const { name, brand, price, category } = req.body

    // const all = await userModel.updateOne({ name, brand, price, category }, {
    //     where: { name: "Hello" }
    // })
    const all = await userModel.updateOne({ name: "Hello" }, { name, brand, price, category })

    return res.json({ all })
}

const deleteU = async (req, res) => {
    const all = await userModel.deleteOne({ name: "Hello" })
    return res.json({ all })
}

const createOrder = async (req, res) => {
    const { body: { productId, quentity } } = req

    const create = await orderModel.create({ productId, quentity })

    return res.json({ create })
}

const readOrder = async (req, res) => {
    const all = await orderModel.find()
    return res.json({ all })
}

const aggregation = async (req, res) => {
    const findAll = await userModel.aggregate([
        // {
        //     $match: {
        //         _id: req.body.id
        //     }
        // }
        {
            $lookup: {
                from: "productorders",
                localField: "_id",
                foreignField: "productId",
                as: "orders"
            }
        },
    ]);

    return res.json({ findAll })
}

const populate = async (req, res) => {
    const find = await userModel.find({ _id: req.body.id }).populate("productId")
    return res.json({ find })
}

module.exports = { creat, read, update, deleteU, createOrder, readOrder, aggregation, populate }