const UserModel = require("../model/userModel");

const bcrypt = require("bcrypt");

const registration = (req, res) => {
    res.sendFile(__dirname + "/Registration.html");
}

const creatUser = async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10);

        const doc = new UserModel({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        });
        // console.log(doc);
        const token = await doc.generateAuthToken();
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 10000),
            httpOnly: true
        });

        console.log(token);
        await doc.save();
        res.redirect("/login")
    } catch (err) {
        console.log("The Err Of Creat User Is " + err);
    }
}

const login = (req, res) => {
    res.sendFile(__dirname + "/Login.html");
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        let result = await UserModel.findOne({ email: email })

        if (result != null) {
            const isMatch = await bcrypt.compare(password, result.password);
            if (result.email == email && isMatch) {
                const token = await result.generateAuthToken();
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 60000),
                    httpOnly: true
                });
                console.log("yes");
                res.sendFile(__dirname + "/home.html");
            }
            else {
                res.send("Please Login")
            }
        }
    } catch (err) {
        console.log("The Err Of Login Is " + err);
    }
}

const home = (req, res) => {
    res.sendFile(__dirname + "/home.html");
}

const logout = async (req, res) => {
    res.send("Confirm")
}
const destroy = async (req, res) => {
    req.user.tokens = [];

    res.clearCookie('jwt');
    res.render("login");

    await req.user.save();
}

module.exports = {
    registration,
    creatUser,
    login,
    loginUser,
    home,
    logout,
    destroy
};