const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const userModel = mongoose.model("users",userShema)
module.exports = userModel