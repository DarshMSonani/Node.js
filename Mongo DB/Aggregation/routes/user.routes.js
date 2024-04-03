const express = require("express");

const router = express.Router();

const userController = require("../controller/user.controller");

router.post("/creat", userController.creat);
router.get("/read", userController.read);
router.post("/update", userController.update);
router.post("/delete", userController.deleteU);

router.post("/createOrder", userController.createOrder);
router.get("/readOrder", userController.readOrder);
router.get("/agg", userController.aggregation);
router.get("/pop", userController.populate);

module.exports = router;