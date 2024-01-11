const express = require("express");

const app = express();

const admin = require("firebase-admin");

const credentials = require("./fir-firebase-73898-firebase-adminsdk-cjp3e-55b0314578.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials),
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5600
app.get("/", (req, res) => {
    res.send("Hello")
})

app.post("/", async (req, res) => {
    const userResponse = await admin.auth().createUser({
        email: req.body.email,
        password: req.body.password,
        emailVerified: false,
        disabled: false
    });
    res.json(userResponse);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});