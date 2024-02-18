import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login(){

    const[name,setName]= useState()
    const[email,setEmail] = useState()
    const[password,setPassword] = useState()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {console.log(result);
                if (result.data === "success") {
                    alert("Registration successful!");
                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    }

    return(
        <div className="flex justify-center items-center h-screen bg-sky-200">

            <div className="bg-gray-300 p-6 rounded w-2/4">
                <h2 className="text-4xl text-zinc-900 font-bold mb-4">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="black text-sm text-gray-600">
                            Name
                        </label>
                        <input
                        type="text"
                        placeholder="Enter the name"
                        autoComplete="off"
                        name="name"
                        className="form-input rounded border mt-3 py-2 px-3 w-full outline-blue-200 focus:border-[#5c4bf3] ease-linear duration-300"
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email"  className="black text-sm text-gray-600">
                            Email
                        </label>
                        <input
                        type="email"
                        placeholder="Enter the email"
                        autoComplete="off"
                        name="email"
                        className="form-input rounded border mt-3 py-2 px-3 w-full outline-blue-200 focus:border-[#5c4bf3] ease-linear duration-300"
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password"  className="black text-sm text-gray-600">
                            Password
                        </label>
                        <input
                        type="password"
                        placeholder="Enter the password"
                        name="password"
                        className="form-input rounded border mt-3 py-2 px-3 w-full outline-blue-200 focus:border-[#5c4bf3] ease-linear duration-300"
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn mt-4">
                        Register
                    </button>
                </form>
                <p>If you have an account!</p>
                <div className="mt-4">
                <Link to='/' className="btn mt-3 ">Login</Link>
                </div>
            </div>
        </div>
    )
}