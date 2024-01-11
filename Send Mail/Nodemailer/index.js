const express = require("express");

const app = express();

const nodemailer = require("nodemailer");

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/mail", async (req, res) => {
    try {
        const testAccount = await nodemailer.createTestAccount();

        // Connect with the smtp
        const transporter = await nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: "keegan.yundt@ethereal.email",
                pass: "21vTJ1jTshtRqNUgNX"
            },
        });

        let info = await transporter.sendMail({
            from: `"Ram 🤘🖖🤘" <latey88692@ubinert.com>`,
            to: "latey88692@ubinert.com",
            subject: "Hello",
            text: "Hello Ram",
            html: "<b> Hello Ram ✌✌ </b>"
        });
        console.log("Message was sent: %s", info.messageId);
        res.json(info)
    } catch (err) {
        console.log("The err of send mail is", err);
    }
})


const port = 2514;

app.listen(port, () => {
    console.log(`Server is runing on http://localhost:${port}`);
});