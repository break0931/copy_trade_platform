'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Mail, Lock, User, ArrowRight, CheckCircle } from 'lucide-react'

function RegisterPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const { data: session } = useSession()
    if (session) redirect('/welcome')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setError("Passwords do not match!")
            return
        }

        if (!name || !email || !password || !confirmPassword) {
            setError("Please complete all inputs.")
            return
        }

        try {
            const resCheckUser = await fetch("http://localhost:4000/api/usercheck", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email })
            })

            const { user } = await resCheckUser.json()

            if (user) { 
                setError("User already exists.")
                return
            }

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
                const form = e.target
                setError("")
                setSuccess("User registration successful!")
                form.reset()
                setName("")
                setEmail("")
                setPassword("")
                setConfirmPassword("")
            } else {
                setError("User registration failed.")
            }
        } catch(error) {
            setError("Error during registration.")
            console.log("Error during registration: ", error)
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white flex">
            {/* Left side - Registration Form */}
            <div className="w-full lg:w-3/5 flex flex-col">
              
                <div className="flex-grow flex justify-center items-center p-4">
                    <div className="w-full max-w-md">
                        <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl p-8">
                            <h3 className="text-3xl font-bold mb-2">Create Account</h3>
                            <p className="text-gray-400 mb-6">Join our trading platform today</p>
                            
                            {error && (
                                <div className="bg-red-900/30 border border-red-700 text-red-400 px-4 py-3 rounded mb-4 flex items-center">
                                    <span className="text-sm">{error}</span>
                                </div>
                            )}
                            
                            {success && (
                                <div className="bg-green-900/30 border border-green-700 text-green-400 px-4 py-3 rounded mb-4 flex items-center">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    <span className="text-sm">{success}</span>
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <User className="h-5 w-5 text-gray-500" />
                                        </div>
                                        <input 
                                            type="text" 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)} 
                                            className="w-full bg-gray-900 border border-gray-700 py-3 pl-10 pr-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" 
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>
                                
                                <div className="mb-4">
                                    <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-500" />
                                        </div>
                                        <input 
                                            type="email" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} 
                                            className="w-full bg-gray-900 border border-gray-700 py-3 pl-10 pr-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" 
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                                
                                <div className="mb-4">
                                    <label className="block text-gray-400 text-sm mb-2">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-500" />
                                        </div>
                                        <input 
                                            type="password" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} 
                                            className="w-full bg-gray-900 border border-gray-700 py-3 pl-10 pr-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" 
                                            placeholder="Create a password"
                                        />
                                    </div>
                                </div>
                                
                                <div className="mb-6">
                                    <label className="block text-gray-400 text-sm mb-2">Confirm Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-500" />
                                        </div>
                                        <input 
                                            type="password" 
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)} 
                                            className="w-full bg-gray-900 border border-gray-700 py-3 pl-10 pr-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" 
                                            placeholder="Confirm your password"
                                        />
                                    </div>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center"
                                >
                                    Create Account <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                            </form>
                            
                            <div className="text-center mt-8">
                                <p className="text-gray-400">
                                    Already have an account? 
                                    <Link href="/login" className="ml-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Right side - Enhanced Background */}
            <div className="hidden lg:block w-2/5 relative overflow-hidden">
                {/* Base gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-blue-900"></div>
                
                {/* Trading charts/data visualization abstract elements */}
                <div className="absolute inset-0">
                    {/* Animated gradient lines */}
                    <svg width="100%" height="100%" className="">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#2196F3" stopOpacity="0.6" />
                            </linearGradient>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#E91E63" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#9C27B0" stopOpacity="0.6" />
                            </linearGradient>
                        </defs>
                        
                        {/* Uptrend line */}
                        <path d="M0,400 Q100,350 200,300 T400,250 T600,200 T800,100" stroke="url(#grad1)" strokeWidth="2" fill="none" />
                        
                        {/* Downtrend line */}
                        <path d="M0,200 Q100,250 200,280 T400,320 T600,250 T800,300" stroke="url(#grad2)" strokeWidth="2" fill="none" />
                        
                        {/* Candlestick abstractions */}
                        <g className="opacity-40">
                            {[100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700].map((x, i) => (
                                <g key={i} transform={`translate(${x}, ${150 + Math.sin(x * 0.05) * 50})`}>
                                    <line x1="0" y1="-15" x2="0" y2="15" stroke="#4CAF50" strokeWidth="2" />
                                    <rect x="-3" y="-10" width="6" height={20} fill={i % 2 === 0 ? "#4CAF50" : "#E91E63"} />
                                </g>
                            ))}
                        </g>
                    </svg>
                </div>
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{ 
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "30px 30px"
                }}></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                    <div className="relative w-64 h-64 mb-8">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-lg opacity-70 animate-pulse"></div>
                        <div className="relative bg-gray-800 bg-opacity-50 rounded-full p-4 w-full h-full flex items-center justify-center border border-blue-700">
                            <img 
                                src="https://cdn-icons-png.flaticon.com/512/6059/6059261.png" 
                                alt="Break Even" 
                                className="w-40 h-40"
                            />
                        </div>
                    </div>
                    
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CTRLC</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-4">
                            Join our trading community today
                        </p>
                        <div className="flex justify-center space-x-4">
                            {["24,500+ Users", "$4.2B+ Volume", "120+ Countries"].map((stat, i) => (
                                <div key={i} className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-lg border border-gray-700">
                                    <p className="text-sm text-cyan-400">{stat}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="max-w-sm">
                        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
                            <p className="text-gray-300 text-center">
                                "Access elite trading strategies and maximize your potential with our copy trading platform. Register now to start your journey."
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-32"></div>
            </div>
        </div>
    )
}

export default RegisterPage