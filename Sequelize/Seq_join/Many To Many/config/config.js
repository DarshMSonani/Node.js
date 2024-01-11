require("dotenv").config();

module.exports = {
    database: {
        database: process.env.DB_DATABASE || "dbdarsh",
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USERNAME || "root",
        passwored: process.env.DB_PASSWORED,
        dialect: process.env.DB_DIALECT
    }
};