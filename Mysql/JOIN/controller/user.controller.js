const { query } = require('express');


// Filles
const db = require('../config/db.config');


//APIs

//Inner Join Table...
async function innerjointable(req, res) {
    try {
        let query="SELECT s.id,s.name,c.cast FROM stu s INNER JOIN cast c ON s.cast=c.c_id  ORDER BY s.id";
        db.query(query, (err, row, fileds) => {
            if (err) throw err;
            console.log(row);
        res.json({
            status: true,
            data:row,
        })
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }
}

//Multiple Inner join Table.....
async function MULtipleinnerjointable(req, res) {
    try {
        // let query="SELECT s.id,s.name,c.cast,ci.city FROM stu s ,cast c, city ci WHERE s.cast=c.c_id AND s.city=ci.s_id ORDER BY s.id DESC";

        let query="SELECT s.id,s.name,c.cast,ci.city FROM stu s INNER JOIN cast c ON s.cast=c.c_id INNER JOIN city ci ON s.city=ci.s_id ";
        db.query(query, (err, row, fileds) => {
            if (err) throw err;
            console.log(row);
        res.json({
            status: true,
            data:row,
        })
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }
}


//Left Join Table .....
async function leftjointable(req, res) {
    try {
        let query="SELECT s.id,s.name,c.cast FROM stu s LEFT JOIN cast c ON s.cast=c.c_id  ORDER BY s.id";
        db.query(query, (err, row, fileds) => {
            if (err) throw err;
            console.log(row);
        res.json({
            status: true,
            data:row,
        })
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }
}

//Multile Left Join Table............
async function mulleftjointable(req, res) {
    try {
        let query="SELECT s.id,s.name,c.cast,ci.city FROM stu s LEFT JOIN cast c ON s.cast=c.c_id LEFT JOIN city ci ON s.city=ci.s_id ORDER BY s.id";
        db.query(query, (err, row, fileds) => {
            if (err) throw err;
            console.log(row);
        res.json({
            status: true,
            data:row,
        })
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }
}


//Right Join Table ......
async function rightjointable(req, res) {
    try {
        let query="SELECT s.id,s.name,c.cast FROM stu s RIGHT JOIN cast c ON s.cast=c.c_id  ";
        db.query(query, (err, row, fileds) => {
            if (err) throw err;
            console.log(row);
        res.json({
            status: true,
            data:row,
        })
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }
}

//Multiple Right Join Table ......
async function mulrightjointable(req, res) {
    try {
        let query="SELECT s.id,s.name,c.cast,ci.city FROM stu s RIGHT JOIN cast c ON s.cast=c.c_id RIGHT JOIN city ci ON s.city=ci.s_id ORDER BY s.id DESC";
        
        db.query(query, (err, row, fileds) => {
            if (err) throw err;
            console.log(row);
        res.json({
            status: true,
            data:row,
        })
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }
}

//Full Join Table...
async function fulljointable(req, res) {
    try {
        let query="SELECT s.id,s.name,c.cast FROM stu s RIGHT JOIN cast c ON s.cast=c.c_id  UNION SELECT s.id,s.name,c.cast FROM stu s LEFT JOIN cast c ON s.cast=c.c_id ";
        db.query(query, (err, row, fileds) => {
            if (err) throw err;
            console.log(row);
        res.json({
            status: true,
            data:row,
        })
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }
}

//Self Join Table ......
async function selfjointable(req, res) {
    try {
        let query="SELECT s1.id AS S1_id,s1.name AS S1_name,s1.city AS s1_city,s2.name AS s2_name,s2.city AS s2_city FROM stu s1,stu s2 WHERE s1.id=s2.city  ";
        db.query(query, (err, row, fileds) => {
            if (err) throw err;
            console.log(row);
        res.json({
            status: true,
            data:row,
        })
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }
}

//Cross Join Table...
async function crossjointable(req, res) {
    try {
        let query="SELECT * FROM stu CROSS JOIN cast";
        db.query(query, (err, row, fileds) => {
            if (err) throw err;
            console.log(row);
        res.json({
            status: true,
            data:row,
        })
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }
}

// Exist Query..
async function Exist(req, res) {
    try {
        let query="SELECT * FROM stu WHERE EXISTS(SELECT * FROM stu WHERE name='ramesh')";
        db.query(query, (err, row, fileds) => {
            if (err) throw err;
            console.log(row);
        res.json({
            status: true,
            data:row,
        })
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }
}


// Union Query..
async function union(req, res) {
    try {
        let query="SELECT id,name FROM stu UNION SELECT s_id,City FROM city ";
        db.query(query, (err, row, fileds) => {
            if (err) throw err;
            console.log(row);
        res.json({
            status: true,
            data:row,
        })
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }
}


//Create Table...
async function createtable(req, res) {
    try {
        let query="CREATE TABLE Employee1(EmpId integer AUTO_INCREMENT,FirstName varchar(20),LastName varchar(20),Email varchar(25),PhoneNo int(25),Salary integer,PRIMARY KEY(EmpId),FOREIGN KEY(PhoneNo) REFERENCES  city (s_id)  );";
        db.query(query, (err) => {
            if (err) throw err;
            
        res.json({
            status: true,
            data:"Table Created ......",
        })
        })
    } catch (error) {
        res.json({
            status: false,
            massage: error,
        })
    }
}

module.exports = {
    innerjointable,
    MULtipleinnerjointable,

    leftjointable,
    mulleftjointable,

    rightjointable,
    mulrightjointable,
 
    fulljointable,
    selfjointable,

    crossjointable,
    Exist,
    union,
    createtable



}