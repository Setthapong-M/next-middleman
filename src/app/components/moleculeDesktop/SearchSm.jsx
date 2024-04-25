import Link from 'next/link';
import React from 'react'
import {FaSistrix } from "react-icons/fa6";


function SearchSm() {
  return (
    <div className='flex gap-x-3'>
      <div className='flex flex-col relative justify-center'>
          <input type='text' placeholder='Search room' className='h-10 w-80 pl-6 rounded-full border border-black text-black'></input>
      </div>
      <button className='w-10 h-10 border border-black bg-white rounded-full'>
          <div className='flex justify-center'>
              <Link href="/enter-key">
                <FaSistrix className='w-5 h-5 text-black'/>
              </Link>
              
          </div>
      </button>
  </div>
  )
}

export default SearchSm