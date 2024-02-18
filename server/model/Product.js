const mongoose =  require('mongoose')

const userShema = new mongoose.Schema({
    name:String,
    brand:String,
    price : String,
})

const productModel = mongoose.model("products",userShema)
module.exports =productModel