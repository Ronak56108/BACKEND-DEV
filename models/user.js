const mongoose = require("mongoose")

const User = mongoose.model("User", {
 name: String,
 email: String,
 passwordHash: String,
 role: { type: String, default: "user" },
 createdAt: { type: Date, default: Date.now }
})

module.exports = User