const express = require("express");

const { getAll, creatStu, editStu, updateStuById, deleteStuById } = require("../controoler/studentController");

const router = express.Router();

router.get("/", getAll);
router.post("/", creatStu);
router.get("/edit/:id", editStu);
router.post("/update/:id", updateStuById);
router.post("/delete/:id", deleteStuById);

module.exports = router;