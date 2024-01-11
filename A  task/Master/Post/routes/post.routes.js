const express = require("express");

const router = express.Router();

const postController = require("../controller/post.controller");

router.post("/", postController.add);
router.get("/find/:id", postController.findPost);
router.get("/findallpost", postController.showAllPost);
router.get("/postid/:id", postController.findByPostId);
router.post("/update", postController.updatePost);
router.post("/delete", postController.deletePost);

module.exports = router;