require("dotenv").config();

const jwt = require("jsonwebtoken");

const User = require("../model/user.model");

const UserSession = require("../model/user.session.model");

const auth = async (req, res, next) => {
    try {
        const getHeaderToken = req.headers.authorization;
        // console.log("11111", req.headers.authorization);
        let tokenVeryfy;
        try {
            tokenVeryfy = jwt.verify(getHeaderToken, process.env.JWT);
            console.log("2222", tokenVeryfy);
        } catch (err) {
            console.log("The err of token ", err);
            return res.status(400).json({
                success: false,
                message: "Your token is expired.."
            });
        }
        const sessionUserId = await UserSession.findOne({ user_id: tokenVeryfy });
        // console.log("3333", sessionUserId);
        if (!sessionUserId) {
            return res.status(400).json({
                success: false,
                message: "Your data was not found."
            });
        }

        const findUserId = await User.findById({ _id: sessionUserId.user_id });
        // console.log("!!!1" + findUserId._id);
        if (!findUserId) {
            return res.status(400).json({
                success: false,
                message: "You are not register user."
            });
        }
        req.user = findUserId
        next();
    } catch (err) {
        console.log("The Auth Err Is " + err);
        return res.status(400).json({
            success: false,
            message: "The err of authentication"
        })
    }
}

module.exports = auth