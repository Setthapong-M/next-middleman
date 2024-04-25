import React from 'react'
import { useState } from 'react'

function PositionNego() {
  
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='max-w-3xl w-full bg-grey400 flex justify-between items-center py-6 px-12 rounded-full'>
        <h1 className='text-white text-2xl'>What is your position</h1>
        {isOpen ? (
          <div className='flex gap-3 bg-white rounded-full'>
            <button onClick={handleToggle} className='w-40 h-12 bg-green200 rounded-full text-xl border'>Seller</button>
            <button onClick={handleToggle} className='w-40 h-12 bg-white rounded-full text-xl'>Buyer</button>
          </div>
        ) : <div className='flex gap-3 bg-white rounded-full'>
            <button onClick={handleToggle} className='w-40 h-12 bg-white rounded-full text-xl'>Seller</button>
            <button onClick={handleToggle} className='w-40 h-12 bg-green200 rounded-full text-xl border'>Buyer</button>
          </div>
        }
        
    </div>
  )
}

export default PositionNego