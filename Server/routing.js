const http = require("http");

const server = http.createServer( (req, res) => {
    if(req.url == "/") {
        res.end("Hello");
    }
    else if (req.url == "/about") {
        res.end("Hello From The About Us Side");
    }
    else if(req.url == "/contect") {
        res.end("Hello From The Contect Us Side");
    }
    else {
        res.writeHead(404, {"content-type" : "text/html"});
        res.end("404 Error. Page Was Not Found");
    }

})

server.listen(2000, "127.0.0.1", () => {
    console.log("Server Was Listen On 2000");
})