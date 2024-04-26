import React, { useState } from 'react'
import { FaSquareCheck } from "react-icons/fa6";

function CheckContract(props) {

  return (
    <div>
        <input
          type='checkbox'
          name='test'
          id={props.contract}
        ></input>
        <label htmlFor={props.contract} className='ml-3'>{props.contract}</label>

    </div>
  )
}

export default CheckContract