import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Home(){
    const[products,setProducts] = useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3001/readProduct')
        .then(result => setProducts(result.data))
        .catch(err => console.log(err));
    },[]);


    const hadleDelete = (id)=>{
        axios.delete('http://localhost:3001/deleteProduct/' +id)
        .then(res=>{console.log(res)
            window.location.reload()
            alert("Product delete successfully!");
            navigate('/home');
    })
    .catch(err => console.log(err))
    }

    return(
        <div className="flex justify-center items-center">
            <div className="w-3/4 bg-white rounded p-4 justify-start items-start">
                <Link to ="/create" className="btn">Add Product</Link>
                <table className="w-full border mt-5">
                    <thead>
                        <tr className="bg-gray-300">
                            <th>Home</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*get all daata from db */}
                        {
                            products.map((product)=>{
                                return <tr>
                                    <td className="border p-2">{product.name}</td>
                                    <td className="border p-2">{product.brand}</td>
                                    <td className="border p-2">{product.price}</td>
                                    <td className="border p-2 flex items-center justify-center">
                                        {/*link will be help to change update page */}
                                        <Link to ={`/update/${product._id}`} className="bg-green-400 text-white px-2 py-1 rounded inline-block mr-2
                                        hover:bg-slate-600">Update</Link>
                                    <button className="bg-red-400 text-white px-2 py-1 rounded inline-block
                                    ml-6 hover:bg-red-900" onClick={(e) => hadleDelete(product._id)}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}