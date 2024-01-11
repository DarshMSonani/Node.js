const express = require("express");

const router = express.Router();

const { session_example, get_session_data } = require("../controller/studentController")

router.get("/ex", session_example);
router.get("/ex1", get_session_data);

module.exports = router