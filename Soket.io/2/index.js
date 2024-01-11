const express = require("express");
const app = express();
const path = require("path");

const cors = require("cors");
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

app.get("/", (req, res) => {
    res.render("home");
});

const users = {};

io.on("connection", (socket) => {
    console.log('socket connected');
    socket.on("new-user-joined", (name) => {
        console.log('New User - ', name);
        users[socket.id] = name;
        socket.broadcast.emit("user-joined", name);
    });

    socket.on("send", (message) => {
        socket.broadcast.emit("receive", { message: message, name: users[socket.id] })
    })

    socket.on("disconnect", (message) => {
        socket.broadcast.emit("left", users[socket.id]);
        delete users[socket.id]
    })
})

const port = 2000;

server.listen(port, () => {
    console.log(`http://localhost:${port}`);
})