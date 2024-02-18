import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function UpdateProduct(){

    const{id} = useParams();
    const[name,setName] = useState()
    const[brand,setBrand] = useState()
    const[price,setPrice] = useState()
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get('http://localhost:3001/getProduct/' + id)
        .then(result =>{
            console.log(result);
            setName(result.data.name);
            setBrand(result.data.brand);
            setPrice(result.data.price);
        })
        .catch(err => console.log(err));
    },[id]);


    const Update = (e)=>{
        e.preventDefault();
        axios.put("http://localhost:3001/updateProduct/" + id, {name,brand,price})
        .then(result =>{
            console.log(result);
            alert("Product update successfullt!");
            navigate('/home')
        })
        .catch(err => console.log(err));
    }


    return(
        <div className=" flex items-center justify-center h-screen bg-primary">
            <div className=" w-1/2 bg-white bg rounded p-3">
                <form onSubmit={Update}>
                    <h2 className=" text-2xl font-bold mb-4">Add Product</h2>
                    <div className="mb-2"> 
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder="Enter the name"
                            className="w-full p-2 border rounded "
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Brand</label>
                        <input
                            type="text"
                            placeholder="Enter the brand"
                            className="w-full p-2 border rounded "
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Price</label>
                        <input
                            type="text"
                            placeholder="Enter the price"
                            className="w-full p-2 border rounded "
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <button className="btn">Update</button>
                </form>
            </div>
        </div>
    )
}