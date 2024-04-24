import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from 'react';

function CheckInputProductMd() {

    const [toggle1 , setToggle1] = useState(false);
    const [toggle2 , setToggle2] = useState(false);

    const chosen1 = () => {
      setToggle1(!toggle1)
    }

    const chosen2 = () => {
        setToggle2(!toggle2)
    }

    const titleP = "Price"
    const contentP = "9900"
    const titleD = "Description"
    const contentD = "Lorem ipsum dolor sit amet consectetur. Arcu est urna lobortis sagittis tincidunt. Aliquam odio eget risus aliquet ac nunc eget ullamcorper. Etiam blandit faucibus nibh faucibus etiam. Tincidunt cras urna magna aliquam fringilla facilisis."

  return (
    <div className='flex flex-col gap-3'>
        <div className='relative'>
            <div className=''>
                <p className='absolute top-0 left-3 text-black'>{titleP}</p>
                <div className='flex pl-3 pt-6 h-16 w-full rounded-xl border border-black'>{contentP}</div>
            </div>
            <FaCircleCheck onClick={chosen1} className='absolute w-6 h-6 top-2 right-2 text-grey200 cursor-pointer'/>
            {toggle1 ? (
                <FaCircleCheck onClick={chosen1} className='absolute w-6 h-6 top-2 right-2 text-yellow100 cursor-pointer'/>
            ) : null}
            
        </div>

        <div className='relative'>
            <div className=''>
                <p className='absolute top-0 left-3 text-black'>{titleD}</p>
                <div className='flex pl-3 pt-6 min-h-16 w-full rounded-xl border border-black'>{contentD}</div>
            </div>
            <FaCircleCheck onClick={chosen2} className='absolute w-6 h-6 top-2 right-2 text-grey200 cursor-pointer'/>
            {toggle2 ? (
                <FaCircleCheck onClick={chosen2} className='absolute w-6 h-6 top-2 right-2 text-yellow100 cursor-pointer'/>
            ) : null}
        </div>
    </div>
  )
}

export default CheckInputProductMd
