require("./DatabaseConnection/Connection");

const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Home page");
})



const port = 2500;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});