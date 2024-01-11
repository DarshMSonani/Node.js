const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const multer = require("multer");

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cd) {
//             cd(null, "uploads")
//         },
//         filename: function (req, file, cd) {
//             cd(null, file.fieldname + "-" + Date.now() + ".jpg")
//         }
//     })
// }).single("file");

const expressfileupload = require("express-fileupload");

app.use(expressfileupload({
    useTempFiles: true,
    tempFileDir: "uploads/"
}))

const path = require("path");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/Index.html");
})

app.post("/", function (req, res) {
    let filename = Date.now() + "-" + req.files.file.name
    let newPath = path.join(process.cwd(), "uploads", filename);
    req.files.file.mv(newPath);
    console.log(req.files);
    res.send("File Uploaded")
});

const port = 1200;

app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on http://localhost:${port}`);
});