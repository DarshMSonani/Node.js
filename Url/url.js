const url = require("url");

const myURL = new URL("https://dummyjson.com/products/1");

console.log("The Hash Is " + myURL.hash); // Return # After Statment
console.log("The Host Is " + myURL.host); // Give The Name Of Host With Port
console.log("The Host Name is " + myURL.hostname); // Give The Name Of Host
console.log("The Href Is " + myURL.href); // Give The Name Of href
console.log("The Port Is " + myURL.port); // Give The Name Of Port
console.log("The Protocol Is " + myURL.protocol); // Give The Name Of Protocol Http
console.log("The Search Is" + myURL.search); // Give The Name Of  After Question Mark # 
console.log("The Search Params Is " + myURL.searchParams); // Give The Name Of  Query Into String
console.log("The To String Is " + myURL.toString()); // Convert Into Sring
console.log("The To Json Is " + myURL.toJSON()); // Convert Into Json