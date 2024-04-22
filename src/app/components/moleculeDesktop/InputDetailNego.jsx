import React from 'react'

function InputDetailNego() {
  return (
    <div className='flex flex-col max-w-screen-md w-full mt-6'>
        <label htmlFor='description'>Detail</label>
        <textarea cols="50" rows="10" placeholder='Enter anything' className='border border-black rounded-xl p-2'></textarea>
    </div>
  )
}

export default InputDetailNego