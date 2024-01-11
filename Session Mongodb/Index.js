const express = require("express");

const app = express();

const dbConnection = require("./connection/db.connection.js");
dbConnection();

// Require Express Session
const session = require("express-session");

// Require Connect Mongo
const MongoStore = require("connect-mongo");

// MongogDB Session
const sessionStorage = MongoStore.create({
    mongoUrl: "mongodb://127.0.0.1:27017",
    dbName: "Master",
    collectionName: "sessions", // Collection Name In Data Base
    ttl: 14 * 24 * 60 * 60, // Time Of Seesion
    autoRemove: "native" // When The Seesion Time Over When It Remove Automaticaly From DataBase
});


// Creat A Session
app.use(session({
    name: "Ram",
    secret: "iamkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 100000 },
    store: sessionStorage // Give The Variable Which Stor Our Db session Information
}));

const web = require("./root/web");

// Load Rout 
app.use("/session", web)

const port = 9600;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});