import React from 'react'
import page from './style.module.css'

export default function RegisterPage() {
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
                    <form>
                        <div className="flex mb-4">
                            <input type="text" placeholder="First Name"
                                className="w-1/2 mr-2 p-2 text-lg font-regular border border-gray-300 rounded" />
                            <input type="text" placeholder="Last Name"
                                className="w-1/2 ml-2 p-2 text-lg font-regular border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <input type="email" placeholder="Your Email"
                                className="w-full p-2 text-lg font-regular  border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <input type="password" placeholder="Password"
                                className="w-full p-2 text-lg font-regular  border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <input type="password" placeholder="Confirm Password"
                                className="w-full p-2 text-lg font-regular border border-gray-300 rounded" />
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" id="terms" className="mr-2" />
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
                            <p className="mt-4 text-center text-gray-600">Already Registered? <a href="login.html" className="text-purple-600 underline">Login
                                Here</a></p>
                    </div>
                </div>
            </div>
            )
}
