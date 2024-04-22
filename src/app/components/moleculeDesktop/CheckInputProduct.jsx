import React from 'react'
import InputBar from './InputBar'
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from 'react';

function CheckInputProduct() {
    const title = "Price";
    const ph = "Enter price";

    const [toggle , setToggle] = useState(false);

    const chosen = () => {
      setToggle(!toggle)
    }
    
  return (
    <div>
      <div className='relative'>
        <InputBar title = {title} ph = {ph}/>
        <FaCircleCheck onClick={chosen} className='absolute w-6 h-6 bottom-2 right-2'/>
        {toggle ? (
          <FaCircleCheck onClick={chosen} className='absolute w-6 h-6 bottom-2 right-2 text-yellow100'/>
        ) : null}
      </div>
      
      <div className='relative flex flex-col max-w-80 w-full mt-6'>
          <label htmlFor='description'>Description</label>
          <textarea rows="10" placeholder='Enter anything' className='border border-black rounded-xl p-2'></textarea>
          <FaCircleCheck onClick={chosen} className='absolute w-6 h-6 bottom-2 right-2'/>
        {toggle ? (
          <FaCircleCheck onClick={chosen} className='absolute w-6 h-6 bottom-2 right-2 text-yellow100'/>
        ) : null}
      </div>

      
    </div>
  )
}

export default CheckInputProduct