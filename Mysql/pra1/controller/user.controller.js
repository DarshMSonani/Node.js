const { query } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Filles
const db = require('../config/db.config');
const { checkemailExist } = require('../helpers/helper');


//APIs

//GET Data...
async function getdata(req, res) {
    try {
        db.query("SELECT * FROM `pra1`", (err, row, fileds) => {
            if (err) throw err;
            res.render('./pages/homepage', { data: row })
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }

}

//Search By name..
async function searchdata(req, res) {
    try {
        let name = req.body.name;
        var sql = "SELECT * FROM `pra1` WHERE name=?"
        db.query(sql, [name], (err, row, fileds) => {
            res.render('./pages/homepage', { data: row })
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }

}


//Logging Rout...
async function loging(req, res) {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let sql = "SELECT * FROM `pra1` WHERE email=?"

        db.query(sql, [email], (err, row, fileds) => {
            if (row != undefined && row != null && row.length > 0) {
                if (bcrypt.compareSync(password, row[0].password)) {
                    res.render('./pages/loging', { massage: "Logging Successfully." })
                } else {
                    res.render('./pages/loging', { massage: "Password Or Email Incorrect." })
                }
            } else {
                res.render('./pages/loging', { massage: "You are not Aurthorize." })
            }
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }
}

//Post  Data...
async function postdata(req, res) {

    try {
        var email = req.body.email;
        var password = req.body.password;
        var name = req.body.name;
        var profile_pic = req.file.filename;


        checkemailExist(email);

        let hashPassword = await bcrypt.hash(password, 10);
        let token = jwt.sign({ name, email }, 'secreteKey');

        let dataarr = [
            [name, email, hashPassword, profile_pic, token]
        ];
        let sql = "INSERT INTO `pra1`(name,email,password,profile_pic,token) VALUES ?"
        db.query(sql, [dataarr], (err) => {
            if (err) throw err;
        });

        db.query("SELECT * FROM `pra1`", (err, row, fileds) => {
            if (err) throw err;
            res.redirect('/homepage')
        })

    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }


}

//Delete data...
async function deletedata(req, res) {
    try {
        let sql = "delete from pra1 where id=?";
        let id = req.query.id
        db.query(sql, [id], (err) => {
            if (err) throw err;
        })
        res.redirect('/homepage')
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }

}

//edit data..
async function editdata(req, res) {
    try {
        let id = req.query.id
        let sql = "SELECT * FROM `pra1` WHERE id=?"
        db.query(sql, [id], (err, row, fileds) => {
            if (err) throw err;
            res.render('./pages/edit', { data: row ,massage:null})
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }
}

// Updata data....
async function updatedata(req, res) {
    try {
        let id = req.query.id
        let name = req.body.name
        let email = req.body.email
        let password = req.body.password
        let newpassword = req.body.newpassword||null
        let con_password = req.body.con_password||null
        let token = jwt.sign({ name, email }, 'secreteKey');
        
        if(password){
            let sql="SELECT * FROM pra1 WHERE id=?";
            db.query(sql,[id],(err,row,fileds)=>{
                if(err) throw err;
                let oldPassword=row[0].password
                if(bcrypt.compareSync(password,oldPassword)){
                    //When password entered  to update...........
                    if((newpassword&&con_password)!=null){
                        if (newpassword==con_password) {
                           var  hashPassword = bcrypt.hashSync(newpassword, 10);
                           //When Profile picture will update...........
                           if (req.file) {
                            var profile_pic = req.file.filename;
                            let sql = "UPDATE pra1 set name=?,email=?,password=?,profile_pic=?,token=?where id=?";
                            db.query(sql, [name, email,hashPassword, profile_pic, token, id], (err) => {
                                if (err) throw err;
                            })
                            res.redirect('/homepage')
                
                        } else {
                            //When Profile picture will not  update...........
                            let sql = "UPDATE pra1 set name=?,email=?,password=?,token=?where id=?";
                            db.query(sql, [name, email, hashPassword,token, id], (err) => {
                                if (err) throw err;
                            })
                            res.redirect('/homepage')
                        }
                
                        } else {
                            res.render('./pages/edit', { data: row ,massage:"New Password and Confirmed Password does not match......"})
                        }
                    }else{
                        //When password is NOt entered  to update...........
                        //When Profile picture wil  update...........
                        if (req.file) {
                            var profile_pic = req.file.filename;
                            let sql = "UPDATE pra1 set name=?,email=?,profile_pic=?,token=?where id=?";
                            db.query(sql, [name, email, profile_pic, token, id], (err) => {
                                if (err) throw err;
                            })
                            res.redirect('/homepage')
                
                        } else {
                            //When Profile picture will not  update...........
                            let sql = "UPDATE pra1 set name=?,email=?,token=?where id=?";
                            db.query(sql, [name, email,  token, id], (err) => {
                                if (err) throw err;
                            })
                            res.redirect('/homepage')
                
                        }

                    }
                
                }else{
                    res.render('./pages/edit', { data: row ,massage:" Password Is Wrong..."})
                }
            });
           
        }
        
       
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }

}


module.exports = {
    getdata,
    postdata,
    deletedata,
    updatedata,
    loging,
    editdata,
    searchdata

}