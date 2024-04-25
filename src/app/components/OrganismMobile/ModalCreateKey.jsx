"use client"

import React from 'react'
import InputBarMd from '../moleculeMobile/InputBarMd'
import Link from 'next/link'



const ModalCreateKey = ({isVisible, onClose}) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if(e.target.id === "wrapper") onClose();
    }
    
    const title = "Create your key";
    const ph = "Enter your key";

  return (
    <div id='wrapper' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-full min-h-64 !mx-8 bg-white rounded-xl'>
            <div className='flex flex-col gap-6 px-8 mt-12'>
                <InputBarMd title = {title} ph = {ph}/>
                <Link href='/position-side'>
                <button className='w-full h-16 bg-grey400 text-white rounded-full text-xl font-bold md:text-xl border border-black uppercase'>  
                    Continue
                </button>
                </Link>
            </div>
      </div>
    </div>
  )
}

export default ModalCreateKey



