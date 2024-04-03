import express from "express"

const router = express.Router();

import productController from "../../controller/product/product.controller.js";

import auth from "../../middleware/user.auth.js";

router.get("/getAllProduct", auth, productController.getallProducts);
router.get("/findProduct", auth, productController.findOwnProduct);
router.post("/addProduct", auth, productController.addProduct);
router.patch("/updateProduct", auth, productController.updateProduct);
router.delete("/deleteProduct", auth, productController.deleteProduct);

export default router