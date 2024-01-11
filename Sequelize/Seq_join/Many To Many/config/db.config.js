const config = require("./config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.database.database, config.database.user, config.database.passwored, {
    host: config.database.host,
    dialect: config.database.dialect
});

sequelize.authenticate()
    .then(() => {
        console.log("Connected Sucessfully");
    })
    .catch((err) => {
        console.log("The Err Is" + err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Post = require("../Model/Post")(sequelize, Sequelize);
db.Tag = require("../Model/Tag")(sequelize, Sequelize);
db.Post_tag = require("../Model/Post_tag")(sequelize, Sequelize);

//    Relation
// --------- many to many -----------//
db.Post.belongsToMany(db.Tag, { through: "post_tags" });
db.Tag.belongsToMany(db.Post, { through: "post_tags" });

db.sequelize.sync()
    .then(() => {
        console.log("Yes");
    })
    .catch((err) => {
        console.log("Err Is" + err)
    })

module.exports = db;