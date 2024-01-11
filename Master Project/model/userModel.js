const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, trim: true },
    join: { type: Date, default: Date.now },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
});

userSchema.methods.generateAuthToken = async function () {
    try {
        console.log(this._id);
        const token = await jwt.sign({ _id: this._id.toString() }, "RamRamRamRamRamRamRamRamRamRamRam");
        console.log(token);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log("The Err Of Token Genration Is " + err);
    }
}

const UserModel = new mongoose.model("user", userSchema);

module.exports = UserModel