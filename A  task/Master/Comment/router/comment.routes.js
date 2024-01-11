const express = require("express");

const router = express.Router();

const commntController = require("../controller/comment.controller");

router.post("/", commntController.addComment);
router.get("/parent/:id", commntController.parentComment);
router.get("/findallcomment", commntController.findAllComment);
router.get("/findallusercomment/:id", commntController.findAllUserComment);
router.post("/update", commntController.updateComment);
router.post("/delete", commntController.deleteComment);

module.exports = router