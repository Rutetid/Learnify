import React, { useEffect, useState } from 'react'
import page from './style.module.css'
import supabase from '../../utils/supabase.js'

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        if (error) {
            alert(error.message);
        } else {
            alert('Logged in successfully!');
        }
    }

    return (
        <div className="bg-purple-100 flex items-center justify-center min-h-screen" id={page.page}>
            <div className="w-full bg-white rounded-lg shadow-md flex overflow-hidden max-w-5xl mx-auto">

                <div className="bg-clifford flex-1 flex flex-col p-8 text-center">
                    <img src="login page svg.svg" alt="illustration" id={page.svg} className="mx-auto" />
                    <p className="mt-4 text-lg text-black font-regular">Navigate your learning journey with personalized roadmaps using <span id={page.siteName} className="font-semibold text-white text-2xl">Learnify</span>.</p>
                </div>

                <div className="bg-white flex-1 p-8 my-4 mx-8">
                    <div className="leading-none">
                        <h2 className="text-2xl font-semibold text-newBlack text-center">Welcome Back!</h2>
                        <p className="mb-8 text-gray-500 font-regular text-center leading-tight">Login to pick up where you left off on your learning adventure.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Your Email" className="w-full p-2 text-lg font-regular border border-gray-300 rounded" />
                        </div>
                        <div className="mb-6">
                            <input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}} className="w-full p-2 text-lg font-regular border border-gray-300 rounded" />
                        </div>
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="mr-2" />
                                <label htmlFor="remember" className="text-gray-600">Remember me</label>
                            </div>
                            <a href="#" className="text-purple-600">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full bg-purple-700 text-white p-2 rounded">Sign in</button>
                    </form>
                    <div className="flex items-center my-8">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="mx-2 text-gray-500">or</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>
                    <button className="w-full bg-white text-gray-700 p-2 rounded border border-gray-300 flex items-center justify-center">
                        <img src="google-logo.png" alt="Google" className="mr-2 w-6 h-6" /> Sign in with Google
                    </button>
                    <p className="mt-4 text-center text-gray-600">Are you new? <a href="register.html" className="text-purple-600 underline">Create an Account</a></p>
                </div>
            </div>
        </div>
    )
}
