const express = require("express");

const app = express();

const cookieParser = require("cookie-parser");

const web = require("./root/web");

// Cookie Parser
app.use(cookieParser());

// Root Set
app.use("/cookie", web);

const port = 2700;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});