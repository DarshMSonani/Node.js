import Sequelize from "sequelize";

import config from "../config/config.js";

const sequelize = new Sequelize(
    config.database.database,
    config.database.username,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
)

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established successfully");
    })
    .catch((err) => {
        console.log("The err in db connection is ", err);
    })

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import users from "./user/user.model.js";
import userSession from "./user/user.session.model.js";
import product from "./product/product.model.js";
import productImage from "./productImage/productImage.model.js";
import cart from "./cart/cart.model.js"
import whishList from "./whishLIst/whishList.mode.js";
import order from "./order/order.model.js";
import orderdetails from "./orderDetails/orderdetails.model.js";

// User Model
db.User = users(sequelize, Sequelize);
db.userSession = userSession(sequelize, Sequelize);
db.product = product(sequelize, Sequelize);
db.productImage = productImage(sequelize, Sequelize);
db.cart = cart(sequelize, Sequelize);
db.whishList = whishList(sequelize, Sequelize);
db.order = order(sequelize, Sequelize);
db.orderDetail = orderdetails(sequelize, Sequelize);

// Define Relatios
db.product.hasMany(db.productImage);
db.productImage.belongsTo(db.product);

db.product.hasMany(db.cart);
db.cart.belongsTo(db.product);

db.product.hasMany(db.whishList);
db.whishList.belongsTo(db.product);

db.product.hasMany(db.order);
db.order.belongsTo(db.product);

db.order.hasMany(db.orderDetail)
db.orderDetail.belongsTo(db.order)

db.product.hasMany(db.orderDetail)
db.orderDetail.belongsTo(db.product)


db.sequelize.sync()
    .then(() => {
        console.log("Yes");
    })
    .catch((err) => {
        console.log("The Sync Err Is" + err);
    });

export default db;
