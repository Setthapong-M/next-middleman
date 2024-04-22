import React from 'react'
import {FaSistrix } from "react-icons/fa6";


function SearchXl() {
  return (
    <div className='flex gap-x-3 items-end drop-shadow-md'>
      <div className='max-w-screen-lg w-full'>
          <label htmlFor='search-room'>Search room</label>
          <input type='text' placeholder='Search room' className='h-20 w-full pl-2 rounded-xl border border-black'></input>
      </div>
      <button className='min-w-20 h-20 border border-black bg-black rounded-full'>
          <div className='flex justify-center'>
              <FaSistrix className='w-12 h-12 text-white'/>
          </div>
      </button>
  </div>
  )
}

export default SearchXl