
const db = require("../config/db.config");
const post = require("../model/post.model");

const jwt = require("jsonwebtoken");

const Post = db.Post;

const RESPONSE = require("../helpers/response");

const uploadFile = require("../midleware/image");

const add = async (req, res) => {
    try {

        // const getToken = req.headers.authorization

        // const findUserId = await jwt.verify(getToken, config.jwt);
        // console.log(findUserId);
        // console.log(req.file.filename);
        // const doc = {
        //     user_id: req.body.user_id,
        //     title: req.body.title,
        //     des: req.body.des,
        //     image: req.file.filename
        // }
        const file = req.body.image
        const fileName = uploadFile(file, "Upload");
        const doc = {
            user_id: req.body.user_id,
            title: req.body.title,
            des: req.body.des,
            image: fileName
        }


        let data = await Post.create(doc);
        console.log(data);
        return RESPONSE.success(res, data, 200)

    }
    catch (err) {
        console.error("the Err Of Add Post Is", err);
        return RESPONSE.error(res, "The err in add post", 400);
    }
};

const findPost = async (req, res) => {
    try {
        console.log(req.params.id);
        const user_id = req.params.id
        console.log("!!!!!!" + user_id);
        const data = await Post.findAll({
            where: {
                user_id: user_id,
            },
        });

        if (!data) {
            return RESPONSE.error(res, "The post was not avialable.", 404)
        }
        return RESPONSE.success(res, data, 200)
    } catch (err) {
        console.log("The Err Of Find Post Is ", err);
        return RESPONSE.error(res, "The err in find post", 400)
    }
}

const findByPostId = async (req, res) => {
    try {
        const post_id = req.params.id
        console.log(post_id);
        const data = await Post.findByPk(post_id);
        console.log(data);
        if (!data) {
            return RESPONSE.error(res, "The post was not avialable.", 404);
        }
        return RESPONSE.success(res, data.id, 200);
    }
    catch (err) {
        console.log("The err of find by post id ", err);
        return RESPONSE.error(res, "The err of find post by id", 400);
    }
}
const showAllPost = async (req, res) => {
    try {
        const findAllPost = await Post.findAll({});
        return RESPONSE.success(res, findAllPost, 200);
    } catch (err) {
        console.log("The err of find post is " + err);
        return RESPONSE.error(res, "The err in find all post.", 400);
    }
}

const updatePost = async (req, res) => {
    try {
        const { post_id, user_id, title, des } = req.body
        console.log(post_id);
        // const findPost = await Post.findByPk(id);
        const findPost = await Post.findOne({
            where: {
                id: post_id,
                user_id: user_id
            }
        });
        if (!findPost) {
            return RESPONSE.error(res, "The post in not avialable", 404)
        };
        const update = await Post.update({ post_id, user_id, title, des }, {
            where: {
                id: post_id
            }
        });
        return RESPONSE.success(res, update, 201);

        // }
        // console.log("===========> post not available");
        // return RESPONSE.error(res, "The post in not avialable", 404)

    } catch (err) {
        console.log("The is update post is " + err);
        return RESPONSE.error(res, "The err in update post.", 400)
    }
}

const deletePost = async (req, res) => {
    try {
        console.log(req.body.post_id);
        const { post_id, user_id } = req.body
        const find = await Post.findOne({
            where: {
                id: post_id,
                user_id: user_id
            }
        });
        if (!find) {
            return RESPONSE.error(res, "The post in not avialable", 404)
        };

        const deletePost = await Post.destroy({
            where: {
                id: post_id
            }
        });
        return RESPONSE.success(res, deletePost, 200);

        // const deletePost = await Post.destroy({
        //     where: {
        //         id: id
        //     }
        // })

    } catch (err) {
        console.log("The is update post is " + err);
        return res.status(400).json({
            success: false,
            message: "The error in update post"
        })
    }
}

module.exports = {
    add,
    findPost,
    showAllPost,
    findByPostId,
    updatePost,
    deletePost
};

