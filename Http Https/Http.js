const http = require("http");

const server = http.createServer( (req, res) => {

    // Request
//   console.log(req.url);

    // if (req.url != "/favicon.ico") {
    //     console.log(req.url);
    // }

    // console.log(req.method);

    // Response

    // res.statusCode = 202;
    // res.statusMessage = "Good";

    // res.setHeader("Content-type", "text/plain");

    // In One Line Code
    res.writeHead(203, "Good", {"Content-type": "text/plain"});
    res.end("Response From Server");
});


server.listen(8000, "127.0.0.1", () => {
    console.log(`Server running at http://localhost:8000`);
});