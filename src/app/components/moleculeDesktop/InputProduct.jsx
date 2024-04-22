import React from 'react'
import InputBar from './InputBar'

function InputProduct() {
    const title = "Price";
    const ph = "Enter price";
  return (
    <div>
        <InputBar title = {title} ph = {ph}/>
        <div className='flex flex-col max-w-80 w-full mt-6'>
            <label htmlFor='description'>Description</label>
            <textarea rows="10" placeholder='Enter anything' className='border border-black rounded-xl p-2'></textarea>
        </div>
    </div>
  )
}

export default InputProduct