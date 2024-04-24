
import React from 'react'
import Link from 'next/link'



const ModalPaySuccess = ({isVisible, onClose}) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if(e.target.id === "wrapper") onClose();
    }
    
    const title = "key";
    const ph = "Enter your key";

  return (
    <div id='wrapper' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-80 min-h-64 !mx-8 bg-white rounded-xl'>
            <div className='flex flex-col gap-6 px-8 mt-12'>
                <h1 className='text-3xl font-bold text-center'>Payment Successful</h1>
                <Link href='/buyer-info-tracking'>
                <button className='w-full h-16 bg-green200 text-black rounded-full text-xl font-bold md:text-xl border border-black uppercase'>  
                    Continue
                </button>
                </Link>
            </div>
      </div>
    </div>
  )
}

export default ModalPaySuccess



