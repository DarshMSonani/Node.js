const post = require("../Model/post");
const db = require("../config/db.config");

const User = db.User;
const Post = db.Post;

const addUser = (req, res) => {

    let response = {
        data: "ok"
    };
    res.status(200).json(response)
}


const onetoone = async (req, res) => {

    let data = await User.findAll({
        attributes: ["name", "email"], // For Outer Information || users Table Information
        // include: Post, // For Include Data Base
        include: [{
            model: Post,
            as: "postdetails",
            attributes: ["name", "title"]
        }],
        where: { id: 9 }
    });

    // let response = {
    //     // data: "One To One",
    //     data1: data
    // }
    res.status(200).json(data);
}

const belongesto = async (req, res) => {

    let data = await Post.findAll({
        attributes: ["content", "title"],
        include: [{
            model: User,
            attributes: ["name", "email"]
        }],
    })

    res.status(200).json(data);
};

module.exports = {
    addUser,
    onetoone,
    belongesto
}