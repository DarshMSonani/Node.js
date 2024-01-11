const jwt = require("jsonwebtoken");

const userModel = require("../model/userModel");

const auth = async (req, res, next) => {
    try {
        const getCookie = req.cookies.jwt;

        const verifyUser = jwt.verify(getCookie, "RamRamRamRamRamRamRamRamRamRamRam");

        const user = await userModel.findOne({ _id: verifyUser._id });

        req.token = getCookie
        req.user = user
        next();
    } catch (err) {
        console.log("The Err Of Auth Is ", err);
    }
}

module.exports = auth