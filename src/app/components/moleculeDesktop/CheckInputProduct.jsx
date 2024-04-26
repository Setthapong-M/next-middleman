import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from 'react';

function CheckInputProduct() {
    const titleP = "Price";
    const contentP = "9900";
    const titleD = "Description";
    const contentD = "Lorem ipsum dolor sit amet consectetur. Arcu est urna lobortis sagittis tincidunt. Aliquam odio eget risus aliquet ac nunc eget ullamcorper. Etiam blandit faucibus nibh faucibus etiam. Tincidunt cras urna magna aliquam fringilla facilisis.";

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
        <div className='max-w-80 w-full h-16 flex flex-col'>
          <p>{titleP}</p>
          <div className='pt-2 border-b border-black h-12'>{contentP}</div>
        </div>
        {toggle1 ? (
          <FaCircleCheck onClick={chosen1} className='absolute w-6 h-6 bottom-2 right-2 text-yellow100 cursor-pointer'/>
        ) : <FaCircleCheck onClick={chosen1} className='absolute w-6 h-6 bottom-2 right-2 text-grey200 cursor-pointer'/>
}
      </div>
      
      <div className='relative flex flex-col max-w-80 w-full mt-6'>
          <p>{titleD}</p>
          <div className='h-80 border border-black rounded-xl p-2'>{contentD}</div>
        {toggle2 ? (
          <FaCircleCheck onClick={chosen2} className='absolute w-6 h-6 bottom-2 right-2 text-yellow100 cursor-pointer'/>
        ) : <FaCircleCheck onClick={chosen2} className='absolute w-6 h-6 bottom-2 right-2 text-grey200 cursor-pointer'/>}
      </div>

      
    </div>
  )
}

export default CheckInputProduct