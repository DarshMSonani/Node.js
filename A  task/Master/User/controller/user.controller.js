require("dotenv").config();

const RESPONSE = require("../helpers/response");

const User = require("../model/user.model");

const UserSession = require("../model/user.session.model");

const jwt = require("jsonwebtoken");

const Validator = require("validatorjs");

const bcrypt = require("bcrypt");

const axios = require("../helpers/axios");
const { response } = require("express");

const creatUser = async (req, res) => {
    // validator js baki joi validator

    const validation = new Validator(req.body, {
        name: "required|string",
        email: "required|email",
        password: "required"
    });

    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, validation.errors.first(firstMessage), 400)
    }

    try {
        const { name, email, password } = req.body;

        // Check email already exist or not
        const checkEmail = await User.findOne({ email });
        if (checkEmail) {
            return RESPONSE.error(res, "The email is allredy exsist.", 400)
        };

        // Create user
        const user = await User.create({ name, email, password })
        const findUser = user.toJSON();
        delete findUser.password
        // return res.status(200).json({
        //     success: true,
        //     message: "User added.",
        //     data: user
        // });
        return RESPONSE.success(res, "User add successfully.", findUser, 200);
    } catch (err) {
        console.log("The Register User Err Is ", err);
        // return res.status(500).json({
        //     success: false,
        //     message: "Something went wrong in registration!.",
        // });
        return RESPONSE.error(res, "The err in registration", 400)
    }
};



const login = async (req, res) => {
    try {
        const validation = new Validator(req.body, {
            email: "required|email",
            password: "required"
        });

        if (validation.fails()) {
            let firstMessage = Object.keys(validation.errors.all())[0];
            return RESPONSE.error(res, validation.errors.first(firstMessage), 400)
        }
        const { email, password } = req.body;
        // FInd User
        const findUser = await User.findOne({ email: email });
        if (!findUser) {
            // return res.status(429).json({
            //     success: false,
            //     message: "Your creadantial are not match our records.",
            // });
            return RESPONSE.error(res, 'Your creadantial are not match our records.', 400)
        };

        // Verify password
        if (!await bcrypt.compare(password, findUser.password)) {
            return RESPONSE.error(res, 'Your creadantial are not match our records.', 400)
        };

        const token = jwt.sign({ _id: findUser._id }, process.env.JWT) // { expiresIn: "1m" }
        console.log(token);
        const saveToken = await UserSession.create({
            user_id: findUser._id,
            token: token
        });

        const user = findUser.toJSON();
        delete user.password
        user.token = token

        return RESPONSE.success(res, "You are login successfully.", user, 200);
    } catch (err) {
        console.log("The Err Of Login Is ", err);
        return RESPONSE.error(res, "The err in login.", 400)
    }
}

const logout = async (req, res) => {
    try {
        console.log(req.headers.authorization);

        const getHeaderToken = req.headers.authorization

        const tokenVeryfy = jwt.verify(getHeaderToken, process.env.JWT);

        console.log("1111", tokenVeryfy);

        const sessionUserId = await UserSession.findOne({ user_id: tokenVeryfy });
        console.log("222", sessionUserId._id);
        if (!sessionUserId) {
            return RESPONSE.error(res, "Please provide valid token.", 400)
        }

        const deleteUserToken = await UserSession.findByIdAndDelete({ _id: sessionUserId._id });
        console.log('delete', deleteUserToken);
        if (!deleteUserToken) {
            return RESPONSE.error(res, "Please provide valid token.", 400)
        }
        return RESPONSE.success(res, "You are logout successfully.", 200);
    } catch (err) {
        console.log("The Err of Logout  is ", err);
        return RESPONSE.error(res, "Err in logout section.", 400)
    }
}

const addPost = async (req, res) => {
    try {
        const { _id: user_id } = req.user;
        console.log(req.body);
        console.log('rea.files :>> ', req.files);
        const validation = new Validator(req.body, {
            title: "required|string",
            des: "required|string"
        });

        if (validation.fails()) {
            let firstMessage = Object.keys(validation.errors.all())[0];
            return RESPONSE.error(res, validation.errors.first(firstMessage), 400)
        }
        let options = {
            user_id,
            title: req.body.title,
            des: req.body.des,
            image: req.files
        }
        console.log(options);

        const a = await axios.postRequest("http://localhost:2000", options);
        return RESPONSE.success(res, "Post added successfully.", a.data, 200);
    } catch (err) {
        console.log("The error of addPost is ", err);
        return RESPONSE.error(res, "The err in add post", 400)
    }
};

const findUserPost = async (req, res) => {
    try {
        console.log(req.user._id);
        const a = await axios.getRequest("http://localhost:2000/find/" + req.user._id);
        // console.log(a);
        return RESPONSE.success(res, 'Successfully found posts', a.data, 200);

    } catch (err) {
        console.log("The Err Of Find User post Is" + err);
        return RESPONSE.error(res, "The err in find user post", 400)
        // return res.status(400).json({
        //     success: false,
        //     message: "The err in find user post"
        // });
    }
}
const showAllPost = async (req, res) => {
    try {
        const showAllPost = await axios.getRequest("http://localhost:2000/findallpost");
        return RESPONSE.success(res, "All post was fonded", showAllPost.data, 200)
    } catch (err) {
        console.log("The err in show all post is " + err);
        return res.status(400).json({
            success: false,
            message: "The err in show all post"
        });
    }
}

const updatePost = async (req, res) => {
    try {
        const doc = {
            post_id: req.body.post_id,
            user_id: req.user._id,
            title: req.body.title,
            des: req.body.des,
            image: req.files
        }
        console.log(doc);
        const update = await axios.postRequest("http://localhost:2000/update", doc)
        console.log('update :>> ', update);
        if (update.response.success == false) {
            return RESPONSE.error(res, update.response.message, 404)
        }
        return RESPONSE.success(res, "The post was updated sucessfully.", update.data, 200);
    } catch (err) {
        console.log("The err of update post is ", err);
        return RESPONSE.error(res, "The err in update post", 400)
    }
}

const deletePost = async (req, res) => {
    try {
        const doc = {
            post_id: req.body.post_id,
            user_id: req.user._id
        }
        console.log(doc);
        const deletePost = await axios.postRequest("http://localhost:2000/delete", doc)

        if (deletePost.response.success == false) {
            return RESPONSE.error(res, deletePost.response.message, 404)
        }
        return RESPONSE.success(res, "The post was deleted successfully.", deletePost.data, 200);
    } catch (err) {
        console.log("The err of delete post is " + err);
        return RESPONSE.error(res, "The err in delete post.", 400);
    }
}

// -----------------> Comment Section

const addComment = async (req, res) => {
    try {

        const a = await axios.getRequest("http://localhost:2000/postid/" + req.body.post_id);
        console.log(a.id);
        if (a.response.success == false) {
            return RESPONSE.error(res, a.response.message, 404);
        }
        // Add comment with parent id
        // Find The Comment idd in databse if yes then add with parent id othervise not
        let id;
        // console.log(req.body.comment_id);
        if (req.body.comment_id) {
            const parentCommentId = await axios.getRequest("http://localhost:3000/parent/" + req.body.comment_id);
            // console.log(parentCommentId.response.message);
            if (parentCommentId.response.success == false) {
                return RESPONSE.error(res, parentCommentId.response.message, 404);
            }
            id = parentCommentId.data
            console.log("!!!!!!!!!!!", parentCommentId.data);
        }
        const post_id = a.data
        const parent_id = id
        const { _id: user_id } = req.user;
        let options = {
            parent_id,
            post_id,
            user_id,
            comment: req.body.comment
        }
        console.log(options);
        const addComment = await axios.postRequest("http://localhost:3000", options)
        if (addComment.response.message == false) {
            return RESPONSE.error(res, addComment.response.message, 404)
        }
        return RESPONSE.success(res, "Comment was add successfully", addComment.data, 200);

    } catch (err) {
        console.log("The err of add cooment is ", err);
        return RESPONSE.error(res, "The err in add comment", 400);
    }
}

const showAllComment = async (req, res) => {
    try {
        const findAllComment = await axios.getRequest("http://localhost:3000/findallcomment");
        console.log(findAllComment.data);
        return RESPONSE.success(res, "All comment is founded", findAllComment.data, 200);
    } catch (err) {
        console.log("The err of find all post is " + err);
        return RESPONSE.error(res, "The err in find all comment.", 400);
    }
}
const showAllUserComment = async (req, res) => {
    try {
        console.log(req.user._id);
        const findAllComment = await axios.getRequest("http://localhost:3000/findallusercomment/" + req.user._id);
        console.log(findAllComment.data);
        return RESPONSE.success(res, "All comment is founded which posted by user", findAllComment.data, 200);
    } catch (err) {
        console.log("The err of find all post is " + err);
        return RESPONSE.error(res, "The err in find all comment.", 400);
    }
}

const updateComment = async (req, res) => {
    try {
        const doc = {
            comment_id: req.body.comment_id,
            user_id: req.user._id,
            comment: req.body.comment
        }
        console.log(doc);
        const updateComment = await axios.postRequest("http://localhost:3000/update", doc)
        if (updateComment.response.success == false) {
            return RESPONSE.error(res, updateComment.response.message, 404)
        }
        return RESPONSE.success(res, "Comment was updated successfully", updateComment.data, 200);
    } catch (err) {
        console.log("The err of update comment is " + err);
        return RESPONSE.error(res, "The err in update comment.", 400);
    }
}
const deleteComment = async (req, res) => {
    try {
        const doc = {
            comment_id: req.body.comment_id,
            user_id: req.user._id
        }
        const deleteComment = await axios.postRequest("http://localhost:3000/delete", doc);

        if (deleteComment.response.success == false) {
            return RESPONSE.error(res, deleteComment.response.message, 404);
        }
        return RESPONSE.success(res, "The post was deleted successfully.", deleteComment.data, 200);
    } catch (err) {
        console.log("The err of update comment is " + err);
        return RESPONSE.error(res, "The err in delete post.", 400)
    }
}

const home = (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "You are loged in user.",
        });
    } catch (err) {
        console.log("The err of home is " + err);
        return res.status(429).json({
            success: true,
            message: "You are not loged in user please frist log in.",
        });
    }
}

module.exports = {
    creatUser,
    login,
    logout,
    addPost,
    findUserPost,
    showAllPost,
    updatePost,
    deletePost,
    addComment,
    showAllComment,
    showAllUserComment,
    updateComment,
    deleteComment,
    home,
}