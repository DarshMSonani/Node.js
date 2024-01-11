const config = require("../config/config");

const db = require("../config/db.config");

const comment = require("../model/comment.model");

const jwt = require("jsonwebtoken");

const Comment = db.Comment;

const RESPONSE = require("../helpers/response");
const { post } = require("../router/comment.routes");

const addComment = async (req, res) => {
    try {

        const doc = {
            parent_id: req.body.parent_id,
            post_id: req.body.post_id,
            user_id: req.body.user_id,
            comment: req.body.comment
        };

        const data = await Comment.create(doc);
        console.log("The Data Was Add", data);
        return RESPONSE.success(res, data, 200);
    } catch (err) {
        console.log("The Err Of Creat Comment Is " + err);
        return RESPONSE.error(res, "The err in add comment.", 400)
    }
};

const parentComment = async (req, res) => {
    try {
        console.log(req.params.id);
        const comment_id = req.params.id
        const findComment = await Comment.findByPk(comment_id);
        if (findComment == null) {
            return RESPONSE.error(res, "The comment in not avialable", 404)
        };
        console.log("!!!!!!!", findComment.id);
        return RESPONSE.success(res, findComment.id, 200);
    } catch (err) {
        console.log("The Err of parent comment is ", err);
        return RESPONSE.error(res, "The err in find comment id for parent id.", 400)
    }
}

const findAllComment = async (req, res) => {
    try {
        const findComment = await Comment.findAll({})
        // const findParentComment = await Comment.findAll({
        //     attributes: ["parent_id"]
        // });
        console.log(findAllComment.data);
        return RESPONSE.success(res, findComment, 200);
    } catch (err) {
        console.log("The err of find all post is ", err);
        return RESPONSE.error(res, "The err in find all comment.", 400)
    }
}

const findAllUserComment = async (req, res) => {
    try {
        console.log(req.params.id);
        const user_id = req.params.id;
        const find = await Comment.findAll({
            where: {
                user_id: user_id
            }
        });
        if (find == null) {
            return RESPONSE.error(res, "No post was founded.", 404)
        }
        return RESPONSE.success(res, find, 200);
    } catch (err) {
        console.log("The err in find user comment", err);
        return RESPONSE.error(res, "The err in find user comment", 404)
    }
}

const updateComment = async (req, res) => {
    try {
        const { comment_id, user_id, comment } = req.body
        console.log(comment_id);

        const find = await Comment.findOne({
            where: {
                id: comment_id,
                user_id: user_id
            }
        })
        console.log(find);
        if (!find) {
            return RESPONSE.error(res, "The comment in not avialable", 404)
        };
        console.log(comment);

        const update = await Comment.update({ comment }, {
            where: {
                id: comment_id
            }
        });
        console.log(update);
        return RESPONSE.success(res, update, 201);
    } catch (err) {
        console.log("The err in update comment is ", err);
        return RESPONSE.error(res, "The err in update comment.", 400);
    }
}

const deleteComment = async (req, res) => {
    try {
        const { comment_id, user_id } = req.body

        const find = await Comment.findOne({
            where: {
                id: comment_id,
                user_id: user_id
            }
        });

        if (!find) {
            return RESPONSE.error(res, "The comment was not avialable");
        }
        const deleteComment = await Comment.destroy({
            where: {
                id: comment_id
            }
        });
        return RESPONSE.success(res, deleteComment, 200);
    } catch (err) {
        console.log("The err in delete comment is ");
        return RESPONSE.error(res, "The err in delete comment.", 400);
    }
}

module.exports = {
    addComment,
    parentComment,
    findAllComment,
    findAllUserComment,
    updateComment,
    deleteComment
}