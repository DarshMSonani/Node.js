import db from "../model/index.js";
import config from "../config/config.js";

const User = db.User;
const userSession = db.userSession;

import jwt from "jsonwebtoken";
import RESPONSE from "../helper/response.js";



const auth = async (req, res, next) => {
    try {
        const getHeaderToken = req.headers.authorization;
        // let tokenVeryfy;
        // try {
        //     tokenVeryfy = jwt.verify(getHeaderToken, config.jwt);
        //     // console.log("tokenVeryfy====>", tokenVeryfy);
        // } catch (err) {
        //     // console.log("The err of token ", err);
        //     return RESPONSE.error(res, 1109)
        // }
        // console.log(tokenVeryfy);
        const sessionUserId = await userSession.findOne({
            where: {
                token: getHeaderToken
            }
        });
        // console.log("sessionUserId====>", sessionUserId.userId);
        if (!sessionUserId) {
            return RESPONSE.error(res, 1109)
        }

        // const { user: { role }, body: { name, email, phoneNumber, address } } = req;

        const userId = sessionUserId.userId

        const findUserId = await User.findOne({
            where: {
                id: sessionUserId.userId
            }
        });
        // console.log("!!!1", findUserId);
        if (!findUserId) {
            return RESPONSE.error(res, 1109)
        }
        req.user = findUserId
        next();
    } catch (err) {
        console.log("The Auth Err Is " + err);
        return RESPONSE.error(res, 1109, err)
    }
}

export default auth