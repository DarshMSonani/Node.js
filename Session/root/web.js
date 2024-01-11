const express = require("express");

const router = express.Router();

const { get_session_info, delete_session, regn_session, session_example, get_session_data } = require("../controller/studentController")

router.get("/get", get_session_info);
router.get("/delete", delete_session);
router.get("/regn", regn_session);
router.get("/ex", session_example);
router.get("/ex1", get_session_data);

module.exports = router