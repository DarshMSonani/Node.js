const os = require("os");

console.log(os.arch()); // Give The Information About Window Bit

console.log(os.hostname()); // Give The Information About Host Name

console.log(os.platform()); // Give The Information About Platform Name

console.log(os.tmpdir()); // Give The Information About Temprery Folder

console.log(os.type()); // Give The Information About Type Of Operating System

const freeMemory = os.freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024}`); // Give The Information About Free Memory;

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`); // Give The Information About Total Memory;