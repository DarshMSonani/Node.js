import path from "path";
import fs from "fs";
import crypto from "crypto"
import sharp from "sharp";


async function uploadFile(fileObjArray, folderName) {
    let filenames = [];
    if (Array.isArray(fileObjArray)) {
        for (let fileObj of fileObjArray) {
            // fileObjArray.forEach(async (fileObj) => {
            const bytes = crypto.randomBytes(12);
            const bytesName = bytes.toString('hex');
            const modifiedBuffer = await sharp(fileObj.buffer).toBuffer();
            // Generate a unique filename for each file
            const upload = `src/upload/${folderName}/`
            if (!fs.existsSync(upload)) {
                fs.mkdirSync(upload);
            }
            let filename = bytesName + path.extname(fileObj.originalname);
            let uploadPath = `src/upload/${folderName}/` + filename;
            // Convert file content to a Buffer
            // let fileBuffer = Buffer.from(modifiedBuffer);
            // let outStream = fs.createWriteStream(uploadPath);
            // outStream.write(fileBuffer);
            // outStream.end();
            fs.writeFileSync(uploadPath, modifiedBuffer)
            filenames.push(filename);
        };
    }
    return filenames;
}
export default uploadFile