import fs from "fs"


export default (filename, folderName) => {
    fs.unlinkSync(`src/upload/${folderName}/` + filename)
}