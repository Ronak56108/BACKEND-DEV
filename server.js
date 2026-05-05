const express = require("express")
const mongoose = require("mongoose")

const authRoutes = require("./routes/auth")
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")

const app = express()
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")

app.use("/auth", authRoutes)
app.use("/products", productRoutes)
app.use("/orders", orderRoutes)

app.listen(5000)