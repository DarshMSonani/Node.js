// const path = require("path");
// const fs = require("fs")

// const uid = require("uid")

// function uploadFile(fileObjArray, pathFolder = 'Images') {
//     //WIP  : need to identify field name from array object : https://stackoverflow.com/questions/5181493/how-to-find-a-value-in-an-array-of-objects-in-javascript
//     var image = null;
//     if (Array.isArray(fileObjArray)) {
//         image = path.extname(fileObjArray[0].originalname);
//         var uploadPath = '../Upload/Images/' + pathFolder + '/' + image;
//         var outStream = fs.createWriteStream(uploadPath, "utf-8");
//         outStream.write(fileObjArray[0].buffer);
//         outStream.end();
//     }
//     return image;
// }

// module.exports = uploadFile

const path = require("path");
const fs = require("fs");
const uid = require("uid");

function uploadFile(fileObjArray) {
    // WIP: need to identify field name from array object: https://stackoverflow.com/questions/5181493/how-to-find-a-value-in-an-array-of-objects-in-javascript
    var image = null;

    if (Array.isArray(fileObjArray)) {
        // Generate a unique filename
        image = "Image" + `${Date.now()}` + path.extname(fileObjArray[0].originalname);
        var uploadPath = './public/images/' + `${Date.now()}` + image;

        // Convert file content to a Buffer
        var fileBuffer = Buffer.from(fileObjArray[0].buffer);

        var outStream = fs.createWriteStream(uploadPath);
        outStream.write(fileBuffer);
        outStream.end();
    }

    return image;
}

module.exports = uploadFile;
