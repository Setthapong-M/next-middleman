import React from 'react'
import { FaHouse, FaScroll, FaBell, FaCircleUser, FaInbox  } from "react-icons/fa6";
import Image from 'next/image';
import Logo from '../../../../public/logo.svg'
import LogoEm from '../../../../public/logoEm.svg'
import Link from 'next/link';


function NavberMd() {
  return (
    <div className='max-w-screen-md bg-black grid grid-cols-5 text-white py-3'>
        <Link href="/">    
            <div className='flex flex-col items-center gap-2'>
                    <FaHouse className='w-6 h-6'/>
                    <p className='text-sm'>Home</p>
            </div>
        </Link>    
        <Link href="/">    
            <div className='flex flex-col items-center gap-2'>
                    <FaInbox  className='w-5 h-6'/>
                    <p className='text-sm'>Activity</p>
            </div>
        </Link>
        <Link href="/create-room">
            <div className='flex flex-col items-center fill-black gap-2'>
                    <Image 
                        src={Logo}
                        width={24}
                        height={24}
                        alt='/'
                    />
                    <p className='text-sm'>MIDDLEMAN</p>
            </div>
        </Link>    
        <Link href="/">    
            <div className='flex flex-col items-center gap-2'>
                
                    <FaBell className='w-6 h-6'/>
                    <p className='text-sm'>Notification</p>
                
            </div>
        </Link>

        <Link href="/account-info">
            <div className='flex flex-col items-center gap-2'>
                <FaCircleUser className='w-6 h-6'/>
                <p className='text-sm'>Account</p>
            </div>
        </Link>
    </div>
  )
}

export default NavberMd