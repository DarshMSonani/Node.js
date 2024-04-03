const express = require("express");

const router = express.Router();

const userController = require("../controller/user.controller");

// router.post("/create", userController.creat);
// router.get("/read", userController.read);
router.post("/class", userController.addClass);
router.get("/", userController.readClass);

module.exports = router;