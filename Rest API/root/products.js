const express = require("express");
const { getAllProducts, getAllProductsTesting } = require("../controller/products");

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;

// Routes Means Which Path You Want To Go