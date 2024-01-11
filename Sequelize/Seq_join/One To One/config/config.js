require("dotenv").config();

module.exports = {
    database: {
        database: process.env.DB_DATABASE || "dbdarsh",
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORED || "",
        host: process.env.DB_HOST || "localhost",
        dialect: process.env.DB_DIALECT || "mysql",
    },
    protocol: process.env.PROTOCOL,
    port: process.env.PORT || 2100
};