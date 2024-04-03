import express from "express"

const router = express.Router();

import cartController from "../../controller/cart/cart.controller.js";

import auth from "../../middleware/user.auth.js";

router.post("/addToCart", auth, cartController.addCart);
router.patch("/updateCart", auth, cartController.updateCart);
router.delete("/deleteCart", auth, cartController.deleteCart);

router.get("/getCartProducts", auth, cartController.getAllProductFromCart);

export default router