import React from 'react'
import InputBar from './InputBar'

function InputProduct() {
    const title1 = "Price";
    const ph1 = "Enter price";

  return (
    <div>
        <InputBar title = {title1} ph = {ph1}/>
        <div className='flex flex-col max-w-80 w-full mt-6'>
          <label htmlFor='description' >Description</label>
          <textarea rows="10" placeholder='Enter anything' id='description' className='border border-black rounded-xl p-2'></textarea>
        </div>
    </div>
  )
}

export default InputProduct