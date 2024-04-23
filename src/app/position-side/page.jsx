import Link from 'next/link'
import React from 'react'

function positionSide() {
  return (
    <div className='max-w-screen-xl mx-auto p-8 mt-60 md:mt-0 md:p-20'>
      <h1 className='text-center text-2xl md:text-5xl md:text-start font-bold uppercase mb-6 md:mb-12'>What is your position</h1>
      
    

      <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
        <Link href='/seller-create-product' className=' '>
          <button className='text-white text-3xl md:font-bold w-full rounded-full p-3 md:min-w-[512px] md:h-[512px] bg-grey400 md:rounded-xl'>
            Seller
          </button>
        </Link>

        <div className='md:hidden flex items-center gap-2'>
            <div className='border-[0.5px] border-black grow h-[0.5px]'></div>
            <p>or</p>
            <div className='border-[0.5px] border-black grow h-[0.5px]'></div>
        </div>

        <Link href='/buyer-check' className=' '>
          <button className='text-white text-3xl md:font-bold w-full rounded-full p-3 md:min-w-[512px] md:h-[512px] bg-grey400 md:rounded-xl'>
            Buyer
          </button>
        </Link>
      </div>
    </div>
  )
}

export default positionSide