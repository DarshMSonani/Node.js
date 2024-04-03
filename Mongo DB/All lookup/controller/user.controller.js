// const userModel = require("../model/user.model");
const ClassModel = require("../model/class.model");

// const creat = async (req, res) => {
//     const { body: { name, age, gender, favoriteFruit } } = req

//     const all = await userModel.create({ name, age, gender, favoriteFruit })
//     return res.json({ all })
// }

// const read = async (req, res) => {
//     const all = await userModel.aggregate([
//         {
//             $group: {
//                 _id: "$favoriteFruit",
//                 count: {
//                     $sum: 1
//                 }
//             }
//         },
//         {
//             $sort: {
//                 count: 1,
//             }
//         },
//         {
//             $limit: 3
//         }
//     ])
//     return res.json({ all })
// }

const addClass = async (req, res) => {
    const { body: { className, parent_id } } = req

    const createClass = await classModel.create({ className, parent_id })

    return res.json({ createClass })
}

const readClass = async (req, res) => {
    const find = await ClassModel.aggregate([
        {
            $graphLookup: {
                from: "classes",
                startWith: "$_id",
                connectFromField: "_id",
                connectToField: "parent_id",
                as: "childern",
                depthField: "level"
            }
        }
    ])

    return res.json({ find })
}

module.exports = { addClass, readClass }