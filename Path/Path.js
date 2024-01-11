const path = require("path");

console.log(path.dirname('D:/Node-js/Path.js')); // Give Dir Name
console.log(path.extname('D:/Node-js/Path.js')); // Give Extension Name
console.log(path.basename('D:/Node-js/Path.js'));// Give Base Name

const myPath = path.parse('D:/Node-js/Path.js'); // Give Drive Name
console.log(myPath.root); // Give Drive Name