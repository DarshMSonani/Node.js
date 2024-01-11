const https = require("https");

const server = https.createServer(function (req, res) {
    res.write("Hello");
    res.end();
});

server.listen(8099);