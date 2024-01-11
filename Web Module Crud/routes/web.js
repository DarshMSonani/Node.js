const express = require("express");

const { getAll, creatStu, editStu, updateStuById, deleteStuById } = require("../controoler/studentControoler")

const router = express.Router();

router.get("/", getAll); // This For read The Data
router.post("/", creatStu); // This For Insert Or Creat The Data
router.get("/edit/:id", editStu); // This For Go To Edit Page
router.post("/update/:id", updateStuById); // This For Update Data From Using Id
router.post("/delete/:id", deleteStuById); // This For Delete The Data From Using Id

module.exports = router