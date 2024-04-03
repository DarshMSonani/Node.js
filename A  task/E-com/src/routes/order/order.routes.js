import express from "express"

const router = express.Router();

import ordelController from "../../controller/order/ordel.controller.js";

import auth from "../../middleware/user.auth.js";

router.get("/getAllOrdersUser", auth, ordelController.getAllOrder);
router.post("/createOrder", auth, ordelController.createOrder);
router.patch("/updateOrderByCustmor", auth, ordelController.updateOrderByCustmor);

router.patch("/updateOrderBySeller", auth,ordelController.updateOrderBySeller);
router.get("/getAllSellerOrder", auth, ordelController.getAllSellerOrder);

export default router