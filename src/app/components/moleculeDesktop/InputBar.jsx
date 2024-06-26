import React from 'react'

function InputBar(props) {

  return (
    <div className='max-w-80 w-full h-16 flex flex-col'>
        <label htmlFor={props.title}>{props.title}</label>
        <input type='text' placeholder={props.ph} id={props.title} className='border-b border-black h-12'></input>
    </div>
  )
}
export default InputBar