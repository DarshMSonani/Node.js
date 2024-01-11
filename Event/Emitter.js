const eventEmiter = require("events")

const event = new eventEmiter();

event.on("hello", () => {
    console.log("Hello");
})

event.emit("hello");