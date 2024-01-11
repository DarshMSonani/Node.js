const express = require("express");

const router = express.Router();

const { setCookie, getCookie, deleteCookie } = require("../controoler/studentControoler")

router.get("/setcookie", setCookie);
router.get("/getcookie", getCookie);
router.get("/deletecookie", deleteCookie);

module.exports = router;