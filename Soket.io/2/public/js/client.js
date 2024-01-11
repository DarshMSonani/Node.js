const socket = io();

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');
// const typing = document.getElementById('typing');

var audio = new Audio("../audio/iphone_sms_original.mp3");

function append(message, positon) {
    const messageElement = document.createElement("div");
    messageElement.innerText = message
    messageElement.classList.add("message");
    messageElement.classList.add(positon);
    messageContainer.append(messageElement);
    if (positon == "left") {
        audio.play();
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, "right");
    socket.emit("send", message);
    messageInput.value = ""
})

socket.on('connect', () => {
    console.log('connected');
});
const name = prompt("Enter your name");

socket.emit('new-user-joined', name);


socket.on("user-joined", (name) => {
    append(`${name} joined the chat`, "left")
})

socket.on("receive", (data) => {
    append(`${data.name}: ${data.message} `, "left")
})

socket.on("left", (name) => {
    append(`${name}: Left The Chat`, "left")
})