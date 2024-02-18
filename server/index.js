const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./model/Users')
const productModel = require('./model/Product')



const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/OwnCrud').th

//code for register/create user account
app.post("/register",(req,res)=>{
    userModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})


//code for log in


app.post("/login", (req,res) =>{
    const {email , password} = req.body;

    userModel.findOne({email:email})
    .then(user => {
        if (user) {
            if (user.password === password) {
                res.json("success");
                
            }else{
                res,json("The password is incorrect");
            }
        
        }else{
            res.json("No recode");
        }
    })
    .catch(err =>{
        console.error(err);
        res.status(500).json("Internal Server Error");
    });
});


//code for product read

app.get('/readProduct',(req,res)=>{
    productModel.find({})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})


//code for product create

app.post('/createProduct', (req,res) =>{
    productModel.create(req.body)
    .then(products => res.json(products))
    .catch(err => res.json(err))
})


//product for update
app.get('/getProduct/:id',(req,res)=>{
    const id = req.params.id;
    productModel.findById({_id:id})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.put('/updateProduct/:id',(req,res)=>{
    const id = req.params.id;
    productModel.findByIdAndUpdate({_id:id},{name:req.body.name,brand:req.body.brand,price:req.body.price})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})


//delete the product

app.delete('/deleteProduct/:id',(req,res) =>{
    const id = req.params.id
    productModel.findByIdAndDelete({_id:id})
    .then(res => json(res))
    .catch(err => console.log(err))
})

app.listen(3001, () => {
    console.log("Server is runnining")
})