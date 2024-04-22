import React from 'react'
import {FaSistrix } from "react-icons/fa6";


function SearchSm() {
  return (
    <div className='flex gap-x-3'>
      <div className='flex flex-col relative justify-center'>
          <input type='text' placeholder='Search room' className='h-12 w-80 pl-6 rounded-full border border-black text-black'></input>
      </div>
      <button className='w-12 h-12 border border-black bg-white rounded-full'>
          <div className='flex justify-center'>
              <FaSistrix className='w-6 h-6 text-black'/>
          </div>
      </button>
  </div>
  )
}

export default SearchSm