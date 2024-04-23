import React from 'react'
import InputBar from './InputBar'
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from 'react';

function CheckInputProduct() {
    const title = "Price";
    const ph = "Enter price";

    const [toggle1 , setToggle1] = useState(false);
    const [toggle2 , setToggle2] = useState(false);

    const chosen1 = () => {
      setToggle1(!toggle1)
    }

    const chosen2 = () => {
        setToggle2(!toggle2)
    }

  return (
    <div>
      <div className='relative'>
        <InputBar title = {title} ph = {ph}/>
        <FaCircleCheck onClick={chosen1} className='absolute w-6 h-6 bottom-2 right-2 text-grey200'/>
        {toggle1 ? (
          <FaCircleCheck onClick={chosen1} className='absolute w-6 h-6 bottom-2 right-2 text-yellow100'/>
        ) : null}
      </div>
      
      <div className='relative flex flex-col max-w-80 w-full mt-6'>
          <label htmlFor='description'>Description</label>
          <textarea rows="10" placeholder='Enter anything' className='border border-black rounded-xl p-2'></textarea>
          <FaCircleCheck onClick={chosen2} className='absolute w-6 h-6 bottom-2 right-2 text-grey200'/>
        {toggle2 ? (
          <FaCircleCheck onClick={chosen2} className='absolute w-6 h-6 bottom-2 right-2 text-yellow100'/>
        ) : null}
      </div>

      
    </div>
  )
}

export default CheckInputProduct