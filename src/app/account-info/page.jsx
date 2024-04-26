import Link from 'next/link';
import React from 'react'
import { FaPenToSquare} from "react-icons/fa6";

function AccountInfo() {
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
        <h1 className='text-xl md:text-5xl font-bold uppercase'>Account info</h1>
        <div>
            <div className='md:max-w-xl flex justify-between border-b border-black py-6'>
                <div className='flex flex-col'>
                    <h3>Name</h3>
                    <p>James Barnes</p>
                </div>
                <Link href="/account-info-update">
                    <FaPenToSquare className='text-grey200'/>
                </Link>            
            </div>

            <div className='md:max-w-xl flex justify-between border-b border-black py-6'>
                <div className='flex flex-col'>
                    <h3>Phone number</h3>
                    <p>0801234567</p>
                </div>
                <Link href="/account-info-update">
                    <FaPenToSquare className='text-grey200'/>
                </Link>            
            </div>

            <div className='md:max-w-xl flex justify-between border-b border-black py-6'>
                <div className='flex flex-col'>
                    <h3>Payment receiving</h3>
                    <p>Kbank 1212312121</p>
                </div>
                <Link href="/account-info-update">
                    <FaPenToSquare className='text-grey200'/>
                </Link>            
            </div>

            <div className='md:max-w-xl flex justify-between border-b border-black py-6'>
                <div className='flex flex-col'>
                    <h3>Address</h3>
                    <p>250/444 Bangkok Thailand 10101</p>
                </div>
                <Link href="/account-info-update">
                    <FaPenToSquare className='text-grey200'/>
                </Link>
            </div>
        </div>
        

    </div>
  )
}

export default AccountInfo
