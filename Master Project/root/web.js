const express = require("express");

const router = express.Router();

const { registration, creatUser, login, loginUser, home, logout, destroy } = require("../controller/user");

const auth = require("../midllware/cookie");

router.get("/registration", registration);
router.post("/registration", creatUser);
router.get("/login", login);
router.post("/login", loginUser);
router.get("/home", auth, home);
router.get("/logout", auth, logout);
router.post("/logout", auth, destroy);

module.exports = router