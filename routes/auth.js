const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user")

router.post("/register", async (req,res)=>{

 const hash = await bcrypt.hash(req.body.password,10)

 const user = new User({
  name:req.body.name,
  email:req.body.email,
  passwordHash:hash
 })

 await user.save()

 res.send(user)
})

router.post("/login", async (req,res)=>{

 const user = await User.findOne({email:req.body.email})

 const ok = await bcrypt.compare(req.body.password,user.passwordHash)

 if(!ok) return res.send("Invalid")

 const token = jwt.sign(
  {id:user._id,role:user.role},
  "secret"
 )

 res.json({token})
})

module.exports = router