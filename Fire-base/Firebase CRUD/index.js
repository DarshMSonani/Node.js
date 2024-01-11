const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const admin = require("firebase-admin");

const crediantials = require("./crud-d621e-firebase-adminsdk-8wkwq-c231b1576f.json");

admin.initializeApp({
    credential: admin.credential.cert(crediantials),
})

const db = admin.firestore();

app.post("/add", async (req, res) => {
    try {
        const { name, status } = req.body
        const add = await db.collection("crud").doc("associats").set({
            name,
            status
        });
        res.send(add)
    } catch (err) {
        console.log("The err of add is", err);
        res.send(err)
    }
})
app.get("/get", async (req, res) => {
    try {
        const get = await db.collection("crud").get();
        let arr = [];
        get.forEach((doc) => {
            arr.push(doc.data())
        })
        res.send(arr)
    } catch (err) {
        console.log("The err of get is", err);
        res.send(err)
    }
});

app.post("/update", async (req, res) => {
    try {
        const id = req.query.id;
        const name = req.body.name;
        const update = await db.collection("crud").doc("associats").update({
            name: name
        });
        res.send(update)
    } catch (err) {
        console.log("The err of update is", err);
        res.send(err)
    }
})

app.delete("/delete", async (req, res) => {
    try {
        const name = req.body.name
        const update = await db.collection("crud").doc("associats").delete({
            name: name
        });
        res.send(update)
    } catch (err) {
        console.log("The err of delete is", err);
        res.send(err)
    }
})

const port = 2300;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});