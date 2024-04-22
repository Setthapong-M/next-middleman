import React from 'react'
import {FaKey } from "react-icons/fa6";
import Link from 'next/link';


function HeaderRoom() {
  return (
    <div className='flex items-center'>
        <h1 className='text-4xl'>Room#</h1>
        <h1 className='text-4xl'>0001</h1>
        <Link href="/"><FaKey className='w-6 h-6 ml-3 text-yellow100'/></Link>
    </div>
  )
}

export default HeaderRoom