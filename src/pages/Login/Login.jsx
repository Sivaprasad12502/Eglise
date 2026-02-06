import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../../hooks/useUsers'
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiShield } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'
import { BsLightningChargeFill } from 'react-icons/bs'
import useFrom from '../../hooks/useForm'
import { EmailOutlined, LockOutline } from '@mui/icons-material'

const Login = ({setIsLoggedIn}) => {
    const navigate = useNavigate()
    const params = new URLSearchParams(location.search)
    const next = params.get("next") || '/';
    const {values,handleChange}=useFrom({
         username:"",
         password:"",
    })

    const loginMutation = useLogin(navigate, next)
    const [showPassword, setShowPassword] = useState(false)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // loginMutation.mutate(values)
        setIsLoggedIn(true);
        navigate(next);
    }

    return (
        <div className="min-h-screen  flex items-center justify-center p-4 relative overflow-hidden bg-primary">
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl "></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl "></div>
            
            {/* Main Container */}
            <div className="relative w-full max-w-md">
                {/* Decorative Icons */}
                <div className="absolute -top-8 -left-8 text-primary opacity-20">
                    {/* <HiSparkles className="w-16 h-16 animate-spin-slow" /> */}
                </div>
                <div className="absolute -bottom-8 -right-8 text-secondary opacity-20">
                    {/* <BsLightningChargeFill className="w-12 h-12 animate-bounce" /> */}
                </div>

                {/* Login Card */}
                <div className="relative z-10">
                    {/* Logo/Header Section */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-1/2 h-1/2  rounded-full mb-4 shadow-lg shadow-shadow/30 bg-base p-3">
                            <img src="/EgliseLogo.png" alt="" />
                        </div>
                        <h1 className="text-3xl  text-white font-bold mb-2">
                            Welcome 
                        </h1>
                        <p className="text-white text-sm">Sign in to your parish account</p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white p-8 rounded-2xl">
                        {/* Email Input */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <EmailOutlined className={`w-5 h-5 transition-colors  text-orange-500 hover:text-primary `}/>
                                </div>
                                <input
                                    type="text"
                                    name='username'
                                    value={values.username}
                                    onChange={handleChange}
                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 transition-all duration-300 outline-none focus:border-primary `}
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <LockOutline className={`w-5 h-5 transition-colors text-orange-500 hover:text-primary `} />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    className='w-full pl-12 pr-4 py-3.5 rounded-xl border-2 transition-all duration-300 outline-none focus:border-primary'
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                                >
                                    {showPassword ? <FiEyeOff className="w-5 h-5 text-orange-500 hover:text-primary" /> : <FiEye className="w-5 h-5 text-orange-500 hover:text-primary" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-end text-sm mb-5">
                            {/* <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-2 border-border text-primary focus:ring-2 focus:ring-primary/20"
                                />
                                <span className="text-gray-600 group-hover:text-primary transition-colors">Remember me</span>
                            </label> */}
                            <a href="" className="text-orange-500 hover:text-primary font-medium transition-colors">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loginMutation.isLoading}
                            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-semibold shadow-lg shadow-shadow/30 hover:shadow-xl hover:shadow-shadow/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loginMutation.isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    Sign In
                                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>

                        {/* Error Message */}
                        {loginMutation.isError && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                                {loginMutation.error?.message || 'Login failed. Please try again.'}
                            </div>
                        )}
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            {/* <div className="w-full border-t border-border"></div> */}
                        </div>
                        {/* <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white/80 text-gray-500">Or continue with</span>
                        </div> */}
                    </div>

                    {/* Social Login Buttons */}
                    {/* <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 font-medium text-gray-700 hover:text-primary">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 font-medium text-gray-700 hover:text-primary">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </button>
                    </div> */}

                    {/* Sign Up Link */}
                    {/* <p className="text-center text-sm text-gray-600 mt-8">
                        Don't have an account?{' '}
                        <a href="#" className="text-primary hover:text-secondary font-semibold transition-colors">
                            Sign up for free
                        </a>
                    </p> */}
                </div>

                {/* Footer */}
                {/* <p className="text-center text-xs text-gray-500 mt-6">
                    Protected by security and encryption
                </p> */}
            </div>
        </div>
    )
}

export default Login
