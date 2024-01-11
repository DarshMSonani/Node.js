const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize("dbdarsh", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then( () => {
    console.log("Connected");
})
.catch( (err) => {
    console.log("The Err Is"+err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

const User = require("./Users")(sequelize, DataTypes);

db.sequelize.sync() // Force For Delete The Same Name Data Base And Creat a New Data Base Same Name
.then( () => {
    console.log("Yes");
});