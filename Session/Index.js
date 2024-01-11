const express = require("express");

const app = express();

// Require The Seesion
const session = require("express-session");

// Seesion Implement
app.use(session({
    name: "Ram",
    secret: "iamkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 2000000 }
}));

const web = require("./root/web");

// Rout Load
app.use("/session", web);

const port = 3500;
app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});