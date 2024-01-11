const config = require("./config");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, {
    host: config.database.host,
    dialect: config.database.dialect
});


sequelize.authenticate()
    .then(() => {
        console.log("Connected Sucessfully");
    })
    .catch((err) => {
        console.log("Err " + err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Comment = require("../model/comment.model")(sequelize, DataTypes);


db.sequelize.sync()
    .then(() => {
        console.log("Yes");
    })
    .catch((err) => {
        console.log("The Sync Err Is" + err);
    });

module.exports = db;