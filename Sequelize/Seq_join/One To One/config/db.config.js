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

db.User = require("../Model/User")(sequelize, DataTypes);
db.Post = require("../Model/post")(sequelize, DataTypes);


// Relesion
// db.User.hasOne(db.Post);
// db.Post.belongsTo(db.User);

// Relesion
db.User.hasOne(db.Post, { foreignKey: 'user_id' });// it is Used For Give The Information About Forgain Key
db.Post.belongsTo(db.User, { foreignKey: 'user_id' });// it is Used For Give The Information About Forgain Key || As Is


db.sequelize.sync()
    .then(() => {
        console.log("Yes");
    })
    .catch((err) => {
        console.log("The Sync Err Is" + err);
    });

module.exports = db;