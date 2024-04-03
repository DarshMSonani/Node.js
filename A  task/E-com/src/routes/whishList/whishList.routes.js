import express from "express"

const router = express.Router();

import whishlistController from "../../controller/whishList/whishlist.controller.js";

import auth from "../../middleware/user.auth.js";

router.get("/getAllWhishlistProduct", auth, whishlistController.getAllWhistListProduct);
router.post("/addWhishlist", auth, whishlistController.addProductToWhishList);
router.post("/deleteWhishlist", auth, whishlistController.deleteWhishlistProduct);
export default router