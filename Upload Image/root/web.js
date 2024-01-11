const express = require("express");

const router = express.Router();

const { index, creatUser, print } = require("../controller/user");

const upload = require("../midlleware/image")

router.get("/", index);
router.post("/", upload.single("image"), creatUser);
router.get("/print", print);

module.exports = router;
