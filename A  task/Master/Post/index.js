const express = require("express");

const app = express();

const postRoutes = require("./routes/post.routes");

const path = require("path");

app.use(express.json({ limit: 52428800 }));
app.use(express.urlencoded({ extended: true, limit: 52428800 }));

app.use("/", postRoutes)
app.use(express.static(path.join(__dirname, 'public')))
const port = 2000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});