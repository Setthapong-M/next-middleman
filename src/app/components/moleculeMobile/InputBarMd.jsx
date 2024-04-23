import React from 'react'

function InputBarMd(props) {

  return (
    <div className='relative'>
        <label htmlFor='title' className='absolute top-0 left-6 text-black'>{props.title}</label>
        <input type='text' placeholder='Enter something' className='h-16 md:h-12 w-full pt-4 pl-6 rounded-xl border border-black'></input>
    </div>
  )
}

export default InputBarMd