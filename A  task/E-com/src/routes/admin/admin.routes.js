import express from "express"
const router = express.Router();

import adminController from "../../controller/admin/admin.controller.js";

import auth from "../../middleware/user.auth.js";

router.post("/addSeller", auth, adminController.addSeller)

export default router