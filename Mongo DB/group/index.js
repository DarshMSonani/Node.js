const express = require("express");
const app = express();
const mongooseCon = require("./connection/db.connection");

const userRoutes = require("./routes/user.routes");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongooseCon();


app.use("/", userRoutes);

const port = 2000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});