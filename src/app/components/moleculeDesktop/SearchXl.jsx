import Link from 'next/link';
import React from 'react'
import {FaSistrix } from "react-icons/fa6";


function SearchXl() {
  return (
    <div className='flex gap-x-3 items-end drop-shadow-md'>
      <div className='max-w-screen-lg w-full'>
          <label htmlFor='search-room'>Search room</label>
          <input type='text' placeholder='Search room' className='h-16 w-full pl-2 rounded-xl border border-black'></input>
      </div>
      <button className='min-w-16 h-16 border border-black bg-black rounded-full'>
          <div className='flex justify-center'>
            <Link href='/enter-key'>
              <FaSistrix className='w-10 h-10 text-white'/>
            </Link>
              
          </div>
      </button>
  </div>
  )
}

export default SearchXl