const fs = require("fs");


// This Is Synchronus

// fs.mkdirSync("Ram"); // Creat The Folder

// fs.writeFileSync(`Ram/Ram.txt`, "Hello! Ram"); // Creat The File And Write In The File

// fs.appendFileSync(`Ram/Ram.txt`, " Welcome To The FS System"); // Add Text In To File Without Over Write The Text

// const data = fs.readFileSync(`Ram/Ram.txt`, "utf8"); // Read The Data Without Buffer

// console.log(data);

// fs.renameSync("Ram/Ram.txt", "Ram/RAM.txt"); // Rename The File Name

// fs.unlinkSync("Ram/RAM.txt"); // Remove The File
// fs.rmdirSync("Ram"); // Remove The Above Folder


// This Is Asynchronus Call Back need

// Asychronus is All About Call Back

// fs.writeFile("Ram.txt", "Hello! Ram", () => {
//     console.log('Done');
// });

// fs.appendFile("Ram.txt", " Welcome To The FS System", () => {
//     console.log("Done");
// });

// fs.readFile("Ram.txt", "utf8", (err, data) => {
//     console.log(data);
// })

// fs.unlink("Ram.txt", () => {
//     console.log("done");
// })