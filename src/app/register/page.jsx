"use client"

import React, { useState, useEffect } from 'react'
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation'

function RegisterPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { data: session } = useSession();
    if (session) redirect('/welcome');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            setError("Password do not match!");
            return;
        }

        if (!name || !email || !password || !confirmPassword) {
            setError("Please complete all inputs.");
            return;
        }

        const resCheckUser = await fetch("http://localhost:4000/api/usercheck", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email })
        })

        const { user } = await resCheckUser.json();

        if (user) { 
            setError("User already exists.");
            return;
        }

        try {
            const res = await fetch("http://localhost:4000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })

            if (res.ok) {
                const form = e.target;
                setError("");
                setSuccess("User registration successfully!");
                form.reset();
            } else {
                console.log("User registration failed.")
            }

        } catch(error) {
            console.log("Error during registration: ", error)
        }
    }

  return (

    <Container >
            
        <div className='flex '>
            <div className=" w-[60%] min-h-screen flex flex-col">
                <div className=' p-5'>
                    Break even Break even
                </div>
                <div className="flex-grow flex justify-center items-center">
                    <div className='w-[400px] shadow-xl p-10 mt-5 rounded-xl'>
                        <h3 className='text-3xl'>Register Page</h3>
                        <hr className='my-3' />
                        <form onSubmit={handleSubmit}>

                            {error && (
                                <div className='bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div className='bg-green-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                                    {success}
                                </div>
                            )}

                            <input type="text" onChange={(e) => setName(e.target.value)} className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Enter your name' />
                            <input type="text" onChange={(e) => setEmail(e.target.value)} className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Enter your email' />
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Enter your password' />
                            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Confirm your password' />
                            <button type='submit' className='bg-[#59A49B] text-white border py-2 px-3 rounded text-md mt-10 w-full'>Sign up</button>
                        </form>
                        <hr className='my-3' />
                        <p>Go to <Link href="/login" className='text-blue-500 hover:underline'>Login</Link> Page</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-end w-[40%] bg-[#59A49B]'>
                <div >
                    <div>
                        Break Even
                    </div>
                
                    <div>
                        <img src='https://cdn-icons-png.flaticon.com/512/6059/6059261.png'></img>
                    </div>
                </div>
            
            </div>
        </div>

    </Container>
   
  )
}

export default RegisterPage
