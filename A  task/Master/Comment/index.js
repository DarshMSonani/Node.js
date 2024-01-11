const express = require("express");

const app = express();

const commentRouter = require("./router/comment.routes");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", commentRouter)


const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});