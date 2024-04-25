import React from 'react'

function InputBar(props) {

  return (
    <div className='max-w-80 w-full h-16 flex flex-col'>
        <label htmlFor="input bar">{props.title}</label>
        <input type='text' placeholder={props.ph} id="input bar" className='border-b border-black h-12'></input>
    </div>
  )
}
export default InputBar