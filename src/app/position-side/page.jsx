import Link from 'next/link'
import React from 'react'

function positionSide() {
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
      <h1 className='text-5xl font-bold uppercase mb-12'>What is your position</h1>
      <div className='flex gap-12'>
        <Link href='/' className=' '>
          <button className='text-white text-3xl font-bold min-w-[512px] h-[512px] bg-grey400 rounded-xl'>
            Seller
          </button>
        </Link>
        <Link href='/' className=' '>
          <button className='text-white text-3xl font-bold min-w-[512px] h-[512px] bg-grey400 rounded-xl'>
            Buyer
          </button>
        </Link>
      </div>
    </div>
  )
}

export default positionSide