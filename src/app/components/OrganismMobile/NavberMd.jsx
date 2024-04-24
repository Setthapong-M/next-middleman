import React from 'react'
import { FaHouse, FaScroll, FaBell, FaCircleUser, FaInbox  } from "react-icons/fa6";
import Image from 'next/image';
import Logo from '../../../../public/logo.svg'
import LogoEm from '../../../../public/logoEm.svg'
import Link from 'next/link';


function NavberMd() {
  return (
    <div className='max-w-screen-md bg-black flex justify-around text-white px-8 py-6'>
        <Link href="/">    
            <div className='flex flex-col items-center'>
                    <FaHouse className='w-10 h-10'/>
                    <p>Home</p>
            </div>
        </Link>    
        <Link href="/">    
            <div className='flex flex-col items-center'>
                    <FaInbox  className='w-9 h-10'/>
                    <p>Activity</p>
            </div>
        </Link>
        <Link href="/create-room">
            <div className='flex flex-col items-center fill-black'>
                    <Image 
                        src={Logo}
                        width={40}
                        height={40}
                        alt='/'
                    />
                    <p>MIDDLEMAN</p>
            </div>
        </Link>    
        <Link href="/">    
            <div className='flex flex-col items-center'>
                
                    <FaBell className='w-10 h-10'/>
                    <p>Notification</p>
                
            </div>
        </Link>

        <Link href="/account-info">
            <div className='flex flex-col items-center'>
                <FaCircleUser className='w-10 h-10'/>
                <p>Account</p>
            </div>
        </Link>
    </div>
  )
}

export default NavberMd