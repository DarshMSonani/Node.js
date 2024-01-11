const mongoose = require("mongoose");

const userSessionSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const userSession = mongoose.model("user_sessions", userSessionSchema);

module.exports = userSession;