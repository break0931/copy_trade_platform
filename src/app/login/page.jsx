"use client"

import React, { useState } from 'react'
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter, redirect } from 'next/navigation'
import { useSession } from 'next-auth/react';

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const { data: session } = useSession();
    if (session) router.replace('/');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await signIn("credentials", {
                email, password, redirect: false
            })

            if (res.error) {
                setError("Invalid credentials");
                return;
            }

            router.replace("welcome");

        } catch(error) {
            console.log(error);
        }
    }

  return (
    <Container >
        
            <div className='flex '>
                <div className=" w-[60%] min-h-screen flex flex-col">
                    <div className=' p-5'>
                        Break even Break even
                    </div>
                    <div className='flex-grow flex justify-center items-center'>
                        <div className='w-[400px]  shadow-xl p-10 mt-5 rounded-xl'>
                            <h3 className='text-3xl'>Welcome Back</h3>
                            <hr className='my-3' />
                            <form onSubmit={handleSubmit}>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Enter your email' />
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Enter your password' />
                                <button type='submit' className='bg-[#59A49B] text-white border py-2 px-3 rounded text-md mt-10 w-full'>Sign in</button>
                                <button type='submit' className='bg-[#59A49B] text-white border py-2 px-3 rounded text-md my-2 w-full'>Sign in with Google</button>
                            </form>
                            <hr className='my-3' />
                            <p>Go to <Link href="/register" className='text-blue-500 hover:underline'>Register</Link> Page</p>
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



export default LoginPage
