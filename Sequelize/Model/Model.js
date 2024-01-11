require("./Connection/Connection");

const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Home Page");
})


const port = 3030;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});