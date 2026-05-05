const mongoose = require("mongoose")

const Order = mongoose.model("Order", {
 userId: String,
 products: [{ productId: String, quantity: Number }],
 totalAmount: Number,
 status: { type: String, default: "pending" },
 createdAt: { type: Date, default: Date.now }
})

module.exports = Order