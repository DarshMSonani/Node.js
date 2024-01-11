const express = require("express");

const app = express();

const cors = require("cors")
const mg = require("mailgun.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
var mailcomposer = require('mailcomposer');
app.use(cors());
const api_key = "pubkey-416c777ac6397e5f3e9a62d80bbd31fc"
const domain = "sandbox76d32f2525a844deb0fc65057aab3d20.mailgun.org"
const mailgun = () =>
    mg({
        apiKey: api_key,
        domain: domain
    })

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", (req, res) => {
    const { to, subject, message } = req.body

    const data = {
        form: '"Ram 💪🖖👆" <darshsonanim@gmail.com>',
        to: `${to}`,
        subject: `${subject}`,
        message: `${message}`
    }
    console.log(data);
    mailgun().messages().send(data, (err, body) => {
        console.log(body);
        if (err) {
            res.json("Error ocuped", err)
        }
        else {
            res.send("Email sent")
        }
    })
})

const port = 3600;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});