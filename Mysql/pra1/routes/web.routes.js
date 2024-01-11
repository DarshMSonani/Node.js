const express = require('express')
const webrouter = express.Router();
const db = require('../config/db.config');

const userController=require('../controller/user.controller');


webrouter.get('/homepage',userController.getdata)

webrouter.get('/form',(req,res)=>{
   res.render('./pages/form')
})

webrouter.get('/loging',(req,res)=>{
   res.render('./pages/loging',{massage:null})
})


webrouter.get('/edit',userController.editdata)

webrouter.get('/deletecon',(req,res)=>{
   res.render('./pages/delete')
})

module.exports = webrouter;