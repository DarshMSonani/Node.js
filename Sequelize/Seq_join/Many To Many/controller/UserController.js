const db = require("../config/db.config");

const Post = db.Post;
const Tag = db.Tag;

const adduser = async (req, res) => {
    let data = await Post.bulkCreate([
        { name: "Mohan", title: "Car", content: "Car" },
        { name: "Ganesh", title: "Car", content: "Car" },
        { name: "Mohan", title: "Car", content: "Car" }
    ]);
    res.status(200).json(data)
};

const addtag = async (req, res) => {
    let data = await Post.bulkCreate([
        { name: "Mohan" },
        { name: "Ganesh" },
        { name: "Mohan" }
    ]);

    res.status(200).json(data);
}


const manytomany = async (req, res) => {

    // ------------ Post To Tag ---------------//
    // let data = await Post.findAll({
    //     attributes: ["content", "title"],
    //     include: [{
    //         model: Tag,
    //         attributes: ["name"]
    //     }]
    // });

    // ---------- Tag To post ----------------// 
    let data = await Tag.findAll({
        include: [{
            model: Post,
            attributes: ["name", "title", "content"]
        }]
    });

    res.status(200).json(data);
}

module.exports = {
    adduser,
    addtag,
    manytomany
};