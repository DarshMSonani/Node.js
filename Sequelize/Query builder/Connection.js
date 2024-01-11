const {Sequelize, DataTypes} = require("sequelize");

const sequlize =  new Sequelize("dbdarsh", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

sequlize.authenticate()
.then( () => {
    console.log("Connected");
})
.catch( (err) => {
    console.log("The Err Is " + err);
});


const db = {};

db.Sequelize = Sequelize;
db.sequlize = sequlize;

db.User = require("./User")(sequlize, DataTypes);

db.sequlize.sync()
.then( () => {
    console.log("Sucessfully Connected");
})
.catch( (err) => {
    console.log("The Err Is " + err);
});

module.exports = db;