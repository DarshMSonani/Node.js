const express = require("express");

const app = express();

const web = require("./root/web")

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", web)
const port = 3500;

app.listen(port, "127.0.0.1", () => {
    console.log(`http://localhost:${port}`);
});

