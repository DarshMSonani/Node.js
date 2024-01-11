const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const admin = require("firebase-admin");

const crediantials = require("./hello-7f13f-firebase-adminsdk-4wplq-8089a2f698.json");

admin.initializeApp({
    credential: admin.credential.cert(crediantials),
});

const db = admin.firestore();

app.post("/creat", async (req, res) => {
    try {
        const id = req.body.email;
        const UserJson = {
            email: req.body.email,
            firstName: req.body.fname,
            lastName: req.body.lname,
        };

        const refrance = await db.collection("users").doc(id).set(UserJson);
        res.send(refrance);
    } catch (err) {
        console.log("The err of creat is ", err);
        res.json(err)
    }
});

app.get("/get", async (req, res) => {
    try {
        const usersRef = db.collection("users");
        const response = await usersRef.get();
        let responseArr = [];

        response.forEach((doc) => {
            responseArr.push(doc.data());
        })
        res.send(responseArr)

    } catch (err) {
        console.log("The err in get all data ", err);
        res.json(err)
    }
});

app.post("/update", async (req, res) => {
    try {
        const id = req.body.id;
        const fname = "123";
        const userRef = await db.collection("users").doc(id).update({
            firstName: fname
        });
        res.send(userRef)
    } catch (err) {
        console.log("The err of update is", err);
        res.send(err)
    }
});

app.delete("/delete/:id", async (req, res) => {
    try {
        const response = await db.collection("users").doc(req.params.id).delete();
        res.send(response)
    } catch (err) {
        console.log("The err of delete is", err);
        res.send(err)
    }
})

const port = 5600;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});