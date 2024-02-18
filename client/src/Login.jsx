import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Login(){

    const[email,setEmail] = useState()
    const[password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result =>{console.log(result)
        if (result.data=== "success") {
            alert("your login to Dashboard!");
            navigate("/home")
            
        }
        })
        .catch(err=>console.log(err))
    }


    return(
        <div className="flex justify-center items-center h-screen bg-sky-200">
            <div className="bg-gray-300 p-6 rounded w-2/4">
                <h2 className="text-4xl text-zinc-900 font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="black text-sm text-gray-600">
                            Email
                        </label>
                        <input 
                            type='email'
                            placeholder='Enter the email'
                            autoComplete='off'
                            name='email'
                            className="form-input rounded border mt-3 py-2 px-3 w-full outline-blue-200 focus:border-[#5c4bf3] ease-linear duration-300"
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password" className="black text-sm text-gray-600">
                            Password
                        </label>
                        <input
                            type='password'
                            placeholder='Enter the password'
                            name='password'
                            className="form-input rounded border mt-3 py-2 px-3 w-full outline-blue-200 focus:border-[#5c4bf3] ease-linear duration-300"
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn mt-7 ">Login</button>
                </form>
                <p className="font-semibold mt-4">If you don't have an account</p>
               
               <div className="mt-5">
                    <Link to='/register' className="btn mt-7 ">Register</Link>
               </div>
            </div>
        </div>
    )
}