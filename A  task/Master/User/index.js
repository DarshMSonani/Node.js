require("dotenv").config();

const express = require("express");
const multer = require("multer");
const upload = multer();
const app = express();

const userRoutes = require("./routes/user.routes");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.any())
const mongooseCon = require("./connection/db.connection");
mongooseCon();


app.use("/", userRoutes);

const port = 1000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});