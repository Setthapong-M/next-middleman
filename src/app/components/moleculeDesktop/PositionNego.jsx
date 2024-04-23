import React from 'react'
import { useState } from 'react'

function PositionNego() {

  return (
    <div className='max-w-3xl w-full bg-grey400 flex justify-between items-center p-6 rounded-full'>
        <h1 className='text-white text-2xl'>What is your position</h1>
        <div className='flex gap-4'>
            <button className='w-40 h-12 bg-white rounded-full text-xl'>Seller</button>
            
            <button className='w-40 h-12 bg-white rounded-full text-xl'>Buyer</button>
        </div>
    </div>
  )
}

export default PositionNego