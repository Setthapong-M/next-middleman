import React from 'react'
import { FaHouse, FaScroll, FaBell, FaCircleUser } from "react-icons/fa6";
import Image from 'next/image';
import Logo from '../../../../public/logo.svg'
import LogoEm from '../../../../public/logoEm.svg'


function NavberMd() {
  return (
    <div className='max-w-screen-md bg-black flex justify-around text-white px-8 py-6'>
        <div className='flex flex-col items-center'>
            <FaHouse className='w-10 h-10'/>
            <p>Home</p>
        </div>
        <div className='flex flex-col items-center'>
            <FaScroll className='w-10 h-10'/>
            <p>Activity</p>
        </div>
        <div className='flex flex-col items-center fill-black'>
            <Image 
                src={Logo}
                width={40}
                height={40}
                alt='/'

            />
            <p>MIDDLEMAN</p>
        </div>
        <div className='flex flex-col items-center'>
            <FaBell className='w-10 h-10'/>
            <p>Notification</p>
        </div>
        <div className='flex flex-col items-center'>
            <FaCircleUser className='w-10 h-10'/>
            <p>Account</p>
        </div>

    </div>
  )
}

export default NavberMd