const express = require("express");
const app = express();

const bodyparse = require("body-parser");

// Json Data
app.use(bodyparse.json());

// Url Encoded
app.use(bodyparse.urlencoded( {extended : true}));