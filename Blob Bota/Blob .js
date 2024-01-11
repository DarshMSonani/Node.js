const data = "Hyy! My Name Is Ram";

const blob = new Blob([data], { type: 'text/plain' })
const binaryData = Buffer.from("s");
console.log(binaryData); // This is your binary data (blob)