import db from "../../model/index.js";
import RESPONSE from "../../helper/response.js";
import Validator from "validatorjs";

const User = db.User;
const userSession = db.userSession;

const addSeller = async (req, res) => {
    const validation = new Validator(req.body, {
        name: "required|string",
        email: "required|email",
        phoneNumber: "required|numeric",
        address: "required|string",
        password: "required",
    });
    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    try {
        const { user: { role }, body: { name, email, phoneNumber, address } } = req;

        if (role != "admin") {
            return RESPONSE.error(res, 1110);
        }

        const checkEmail = await User.findOne(
            {
                where: { email: email }
            });

        if (checkEmail) {
            return RESPONSE.error(res, 1202)
        }

        const password = await bcrypt.hashSync(req.body.password, 10);
        const user = await User.create({ name, email, phoneNumber, address, password, role: "seller", createdBy: "admin" })
        return RESPONSE.success(res, 1201)
    } catch (err) {
        console.log("The err in add seller by admin is ", err);
        return RESPONSE.error(res, 1203, err)
    }
}


export default { addSeller }