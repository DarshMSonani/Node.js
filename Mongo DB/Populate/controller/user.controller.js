const userModel = require("../model/user.model");
const postModel = require("../model/post.model")
const commentModel = require("../model/comment.model");

const creat = async (req, res) => {
    const { name } = req.body

    const all = await userModel.create({ name })
    return res.json({ all })
}

const read = async (req, res) => {
    const all = await userModel.findOne({ name: "Ram" }).populate("userId")
    return res.json({ all })
}

const createPost = async (req, res) => {
    const { body: { userId, about } } = req

    console.log(req.body);

    const create = await postModel.create({ userId, about })
    return res.json({ create })
}
const createComment = async (req, res) => {
    const { body: { userId, postId, comment } } = req

    console.log(req.body);

    const create = await commentModel.create({ userId, postId, comment })
    return res.json({ create })
}

const readPost = async (req, res) => {
    const all = await postModel.find()
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
                from: "posts",
                localField: "_id",
                foreignField: "userId",
                as: "post"
            }
        },
        {
            $project: {
                name: 0,
                about: 0
            }
        }
    ]);

    return res.json({ findAll })
}

const populate = async (req, res) => {
    const find = await userModel.find({ _id: req.body.id }).populate([
        {
            path: "post",
            select: '_id'
        },
        {
            path: "comment",
            select: "comment -_id"
        }
    ])
    return res.json({ find })
}

module.exports = { creat, read, createPost, readPost, aggregation, populate, createComment }