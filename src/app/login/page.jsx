import React from 'react'
import InputBar from '../components/moleculeDesktop/InputBar'
import Link from 'next/link'
import { FaApple, FaScroll, FaBell, FaCircleUser, FaGoogle, FaFacebook, FaXTwitter } from "react-icons/fa6";
import InputBarMd from '../components/moleculeMobile/InputBarMd';


function Login() {
    const title = "Phone number"
    const ph = "Enter your phone number"
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20 flex flex-col gap-6'>
        <h1 className='text-2xl md:text-5xl font-bold uppercase'>Log in or sign up your account</h1>

        <div className='md:max-w-80 flex flex-col gap-6'>

            <div className='hidden md:block'>
                <InputBar title = {title} ph = {ph}/>
            </div>
            <div className='md:hidden'>
                <InputBarMd title = {title}/>
            </div>

            <p className='hidden md:block underline text-center'>Terms of service and privacy policy</p>
            
            <Link href='/'><button className='w-full h-16 bg-green200 rounded-full text-xl font-bold md:text-xl border border-black uppercase'>continue</button></Link>
            
            {/* or */}
            <div className='flex items-center gap-2'>
                <div className='border-[0.5px] border-black grow h-[0.5px]'></div>
                <p>or</p>
                <div className='border-[0.5px] border-black grow h-[0.5px]'></div>
            </div>

            {/* email */}
            <Link href='/'><button className='w-full h-16 bg-grey400 text-white rounded-full text-xl font-bold md:text-xl border border-black uppercase'>continue with email</button></Link>
            
            {/* Icon */}
            <div className='flex justify-between md:grid md:grid-cols-2 md:grid-rows-2 gap-3'>
                <Link href='/' className='min-w-16 md:w-full h-16 bg-grey400 rounded-full flex justify-center items-center'>
                    <button className='text-white text-xl uppercase flex items-center gap-2'>
                        <FaGoogle className='w-8 h-8 md:w-5 md:h-5'/><p className='hidden md:block'>google</p>
                    </button>
                </Link>
                <Link href='/' className='min-w-16 md:w-full h-16 bg-grey400 rounded-full flex justify-center items-center'>
                    <button className='text-white text-xl uppercase flex items-center gap-2'>
                        <FaFacebook className='w-8 h-8 md:w-5 md:h-5'/><p className='hidden md:block'>facebook</p>
                    </button>
                </Link>
                <Link href='/' className='min-w-16 md:w-full h-16 bg-grey400 rounded-full flex justify-center items-center'>
                    <button className='text-white text-xl uppercase flex items-center gap-2'>
                        <FaApple className='w-8 h-8 md:w-5 md:h-5'/><p className='hidden md:block'>apple</p>
                    </button>
                </Link>
                <Link href='/' className='min-w-16 md:w-full h-16 bg-grey400 rounded-full flex justify-center items-center'>
                    <button className='text-white text-xl uppercase flex items-center gap-2'>
                        <FaXTwitter className='w-8 h-8 md:w-5 md:h-5'/><p className='hidden md:block'>x</p>
                    </button>
                </Link>
            </div>
            <p className='md:hidden underline text-center'>Terms of service and privacy policy</p>
            
        </div>
    </div>
    
    
  )
}

export default Login

{/* <div className='flex justify-around md:flex-col gap-3'>
                <div className='flex gap-12 md:gap-2'>
                    <Link href='/' className='min-w-16 md:w-full h-16 bg-grey400 rounded-full flex justify-center items-center'>
                        <button className='text-white text-xl uppercase flex items-center gap-2'>
                            <FaGoogle /><p className='hidden md:block'>google</p>
                        </button>
                    </Link>
                    <Link href='/' className='min-w-16 md:w-full h-16 bg-grey400 rounded-full flex justify-center items-center'>
                        <button className='text-white text-xl uppercase flex items-center gap-2'>
                            <FaFacebook /><p className='hidden md:block'>facebook</p>
                        </button>
                    </Link>
                </div>
                <div className='flex gap-12 md:gap-2'>
                    <Link href='/' className='min-w-16 md:w-full h-16 bg-grey400 rounded-full flex justify-center items-center'>
                        <button className='text-white text-xl uppercase flex items-center gap-2'>
                            <FaApple /><p className='hidden md:block'>apple</p>
                        </button>
                    </Link>
                    <Link href='/' className='min-w-16 md:w-full h-16 bg-grey400 rounded-full flex justify-center items-center'>
                        <button className='text-white text-xl uppercase flex items-center gap-2'>
                            <FaXTwitter /><p className='hidden md:block'>x</p>
                        </button>
                    </Link>
                </div>
            </div> */}