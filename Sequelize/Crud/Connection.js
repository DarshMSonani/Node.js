const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("dbdarsh", "root", "", {
    host: "localhost",
    dialect: "mysql",
    // logging: false For Print Sql or Not
});


sequelize.authenticate()
.then( () => {
    console.log("Sucess");
})
.catch( (err) => {
    console.log("Err" + err);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./User")(sequelize, DataTypes)

db.sequelize.sync()
.then( () => {
    console.log("Sucess");
})
.catch( (err) => {
    console.log("The Err Is" + err);
});

module.exports = db;