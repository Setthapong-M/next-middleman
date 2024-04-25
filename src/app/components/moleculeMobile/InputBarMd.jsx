import React from 'react'

function InputBarMd(props) {

  return (
    <div className='relative'>
        <label htmlFor={props.title} className='absolute top-0 left-6 text-black'>{props.title}</label>
        <input type='text' placeholder={props.ph} id={props.title} className='h-16 md:h-12 w-full pt-4 pl-6 rounded-xl border border-black'></input>
    </div>
  )
}

export default InputBarMd