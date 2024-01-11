console.log("Starting Up");

setTimeout( () => {
    console.log("2 Sec Log");
}, 2000);

setTimeout( () => {
    console.log("0 Sec Log");
});

console.log("Finishing Up");