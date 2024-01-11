const express = require('express')
const webrouter = express.Router();
const db = require('../config/db.config');

const userController=require('../controller/user.controller');




module.exports = webrouter;