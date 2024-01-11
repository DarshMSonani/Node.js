// // Create, Fire, Listen

// const EventEmitter = require("events"); // Creating A Class

// const event = new EventEmitter(); // Creating Own Event

// // Definig Or Listning 

// event.on('sayMyName', () => {
//     console.log("Raja");
// });

// event.on('sayMyName', () => {
//     console.log("Ram");
// });

// event.on('sayMyName', () => {
//     console.log("1");
// });
// event.emit("sayMyName"); // Call Event Or Firing

// With CallBacks

// const EventEmitter = require("events"); // Creating A Class

// const event = new EventEmitter(); // Creating Own Event

// // Definig Or Listning 
// event.on("checkPage", (sc, msg) => {
//     console.log(`Status Code Is ${sc} And The Page Is ${msg}`);
// });

// event.emit("checkPage", 200,"ok"); // Call Event Or Firings