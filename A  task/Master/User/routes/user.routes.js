const express = require("express");

const router = express.Router();

const userController = require("../controller/user.controller");

const auth = require("../middleware/auth");

router.post("/register", userController.creatUser);
router.post("/login", userController.login);
router.get("/home", auth, userController.home);
router.post("/logout", auth, userController.logout);

// --------------> Post Section

router.post("/post", auth, userController.addPost);
// router.post("/post", auth, upload.single("image"), userController.addPost);
router.get("/findpost", auth, userController.findUserPost);
router.get("/findallpost", auth, userController.showAllPost);
router.post("/updatepost", auth, userController.updatePost);
router.post("/deletepost", auth, userController.deletePost);
// --------------> Comment Section

router.post("/comment", auth, userController.addComment);
router.get("/findallcomment", auth, userController.showAllComment);
router.get("/findallusercomment", auth, userController.showAllUserComment);
router.post("/updatecomment", auth, userController.updateComment);
router.post("/deletecomment", auth, userController.deleteComment);

module.exports = router;