import React, { useEffect } from 'react'
import page from './style.module.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import supabase from '../../utils/supabase'

export default function RegisterPage({ user }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [terms, setTerms] = useState(false)

    const handleSubmit = async (e) => {
        // e.preventDefault()

        // if(password.length < 8) {
        //     alert('Password must be at least 8 characters long')
        //     return
        // }

        // if (password !== confirmPassword) {
        //     alert('Passwords do not match')
        //     return
        // }

        // if (!terms) {
        //     alert('Please accept the terms and conditions')
        //     return
        // }

        // const {data, error} = await supabase.auth.signUp({
        //     email: email,
        //     password: password
        // })

        // if (error) {
        //     alert(error.message)
        //     return
        // }

        // const userId = data.user.id;
        // console.log(userId);
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user])

    return (
        <div className="bg-purple-100 flex items-center justify-center min-h-screen" id={page.page}>
            <div className="w-full bg-white rounded-lg shadow-md flex overflow-hidden max-w-5xl mx-auto">

                <div className="bg-clifford flex-1 flex flex-col p-8 text-center">
                    <img src="register page svg.svg" alt="illustration" id={page.svg} className="mx-auto" />
                    <p className="mt-4 text-lg text-black font-regular">Unlock a world of knowledge with <span id={page.SiteName}
                        className="font-semibold text-white text-2xl">Learnify</span>. Personalized learning is just a tap away.</p>
                </div>

                <div className="bg-white flex-1 p-8 my-4 mx-8">
                    <div className="leading-none">
                        <h2 className="text-2xl font-semibold text-newBlack text-center">Get Started!</h2>
                        <p className="mb-6 text-gray-500 font-regular text-center">Create your free Learnify account today!</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex mb-4">
                            <input type="text" placeholder="First Name"
                                className="w-1/2 mr-2 p-2 text-lg font-regular border border-gray-300 rounded"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input type="text" placeholder="Last Name"
                                className="w-1/2 ml-2 p-2 text-lg font-regular border border-gray-300 rounded"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input type="email" placeholder="Your Email"
                                className="w-full p-2 text-lg font-regular  border border-gray-300 rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input type="password" placeholder="Password"
                                className="w-full p-2 text-lg font-regular  border border-gray-300 rounded"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input type="password" placeholder="Confirm Password"
                                className="w-full p-2 text-lg font-regular border border-gray-300 rounded"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" id="terms" className="mr-2"
                                value={terms}
                                onChange={(e) => setTerms(e.target.checked)}
                            />
                            <label htmlFor="terms" className="text-gray-600">I accept the <a href="#" className="text-purple-600">Terms and
                                Conditions</a></label>
                        </div>
                        <button type="submit" className="w-full bg-purple-700 text-white p-2 rounded">Create Account</button>
                    </form>
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="mx-2 text-gray-500">or</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>
                    <button
                        className="w-full bg-white text-gray-700 p-2 rounded border border-gray-300 flex items-center justify-center">
                        <img src="google-logo.png" alt="Google" className="mr-2 w-6 h-6" /> Sign in with Google
                    </button>
                    <p className="mt-4 text-center text-gray-600">Already Registered? <Link to="/login" className="text-purple-600 underline">Login
                        Here</Link></p>
                </div>
            </div>
        </div>
    )
}
