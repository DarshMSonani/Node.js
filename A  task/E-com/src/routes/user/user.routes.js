import express from "express"
import userController from "../../controller/user/user.controller.js";
import auth from "../../middleware/user.auth.js";
const router = express.Router();

router.post("/register", userController.createUser);
router.post("/login", userController.login);
router.patch("/updateProfile", auth, userController.updateUserProfile);

export default router