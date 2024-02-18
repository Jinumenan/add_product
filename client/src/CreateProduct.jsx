import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CreateProduct(){
    const[name,setName] = useState()
    const[brand,setBrand] = useState()
    const[price,setPrice] = useState()
    const navigate = useNavigate();

    const Submit =(e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/createProduct",{name,brand,price})
        .then(result=>{
            console.log(result)
            navigate('/home')
            alert("Product create successfully!")
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className="flex items-center justify-center h-screen bg-primary">
            <div className="w-1/2 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2 className="text-2xl font-bold mb-4">Add Product</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input
                        type="text"
                        placeholder="Enter the name"
                        className="w-full p-2 border rounded"
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Brand</label>
                        <input
                        type="text"
                        placeholder="Enter the brand"
                        className="w-full p-2 border rounded"
                        onChange={(e) => setBrand(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Price</label>
                        <input
                        type="text"
                        placeholder="Enter the price"
                        className="w-full p-2 border rounded"
                        onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        </div>
    )
}