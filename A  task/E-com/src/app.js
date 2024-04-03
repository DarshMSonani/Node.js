import express from "express";
import multer from "multer";
import path from "path";

const app = express();
const upload = multer();
app.use(upload.any())

// For pass the data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(process.cwd(), "/src/upload")))
// Routes
import routes_v1 from "./routes/index.js";

app.use("/", routes_v1)

export default app;