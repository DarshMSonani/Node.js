import db from "../../model/index.js";
import RESPONSE from "../../helper/response.js";
import Validator from "validatorjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config/config.js";
import Stripe from "stripe";

const stripe = Stripe(config.stripe_secret_key)

const User = db.User;
const UserSession = db.userSession;
const Product = db.product;
const ProductImage = db.productImage;

const createUser = async (req, res) => {
    const validation = new Validator(req.body, {
        name: "required|string",
        email: "required|email",
        phoneNumber: "required|numeric",
        address: "required|string",
        password: "required",
        role: "required|in:seller,user",
    });
    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    try {
        const { name, email, phoneNumber, address, role } = req.body;

        const checkEmail = await User.findOne(
            {
                where: { email: email }
            });

        if (checkEmail) {
            return RESPONSE.error(res, 1103)
        }

        const password = await bcrypt.hashSync(req.body.password, 10);

        const user = await User.create({
            name, email, phoneNumber, address, password, role, createdBy: "self",
        })

        return RESPONSE.success(res, 1101)
    } catch (err) {
        console.log("The err in user register is ", err);
        return RESPONSE.error(res, 1102, err)
    }
}

const login = async (req, res) => {
    const validation = new Validator(req.body, {
        email: "required|email",
        password: "required"
    });

    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    try {
        const { email, password } = req.body;
        // FInd User
        const findUser = await User.findOne(
            {
                where:
                    { email: email }
            });
        if (!findUser) {
            return RESPONSE.error(res, 1105)
        };

        // Verify password
        if (!await bcrypt.compare(password, findUser.password)) {
            return RESPONSE.error(res, 1107)
        };


        // Create token and send response

        const { id, role } = findUser
        const token = jwt.sign({ id: id }, config.jwt) // { expiresIn: "1m" }

        await UserSession.create({
            userId: id,
            token: token,
            role: role
        });

        return RESPONSE.success(res, 1104);
    } catch (err) {
        console.log("The err in user login is ", err);
        return RESPONSE.error(res, 1102, err)
    }
}

const updateUserProfile = async (req, res) => {
    const validation = new Validator(req.body, {
        name: "string",
        phoneN: "numeric",
        address: "string",
    });
    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    try {
        const { user: { id }, body: { name, phoneN, address, password } } = req

        let hashPassword = password ? await bcrypt.hashSync(password, 10) : null;
        const updateUserProfile = await User.update(
            {
                name, phoneN, address,
                ...(hashPassword) && { password: hashPassword }
            }
            , {
                where: {
                    id: id
                }
            });
        return RESPONSE.success(res, 1301)
    } catch (err) {
        console.log("The err in update profile is ", err);
        return RESPONSE.error(res, 1302, err)
    }
}

export default { createUser, login, updateUserProfile };