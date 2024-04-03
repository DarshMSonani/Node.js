const express = require("express");

const router = express.Router();

const userController = require("../controller/user.controller");

router.post("/creat", userController.creat);
router.get("/read", userController.read);

router.post("/createPost", userController.createPost);
router.post("/createComment", userController.createComment);
router.get("/readPost", userController.readPost);
router.get("/agg", userController.aggregation);
router.get("/pop", userController.populate);

module.exports = router;