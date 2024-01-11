// Readable - Read Operation

// Writable - Write Operation

// Duplex - Both Read And Write

// Transform - The Out put Is Computed Based On OutPut Type Of Duplex

// Events In Streams

// Data - This Event Is Fired When There Is Data Available To Read

// End - This Event Is Fired When There Is No More Data To Read

// Error - This Event Is Fired When There Is Any Error Receving Or Writing Data

// Finish - This Event Is Fired When All The Data Has Been Flushed To Under System


//  First Way For And Read A File


// const fs = require('fs');

// const http = require('http');

// const server = http.createServer();

// server.on('request', (req, res) => {
//     var fs= require('fs');
//     fs.readFile('Stream.txt', function (ree, data) {
//         // if(err) return console.log(err);
//         res.end(data.toString());
//     });
// });

// server.listen(5000, "127.0.0.1");

// Second Way To Read A File

// const fs = require("fs");

// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//     const rstream = fs.createReadStream("Stream.txt");
//     rstream.on("data", (chunkdata) =>{
//         res.write(chunkdata);
//     });
//     rstream.on("end", () => {
//         res.end();
//     });
//     rstream.on("error", (err) => {
//         console.log(err);
//         res.end("File Is Not Found");
//     })
// });

// server.listen(5000, "127.0.0.1");



// Using pipe event
// Creat In One Line

// const fs = require("fs");

// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//     const rstream = fs.createReadStream("Stream.txt");
//     rstream.pipe(res);

// });

// server.listen(5000, "127.0.0.1");

const fs = require("fs");

const http = require("http");

const server = http.createServer();

server.on("request", function (req, res) {
    const rstream = fs.createReadStream("Stream.txt");
    rstream.pipe(res);
})

server.listen(3020, "127.0.0.1");
// console.log(server);