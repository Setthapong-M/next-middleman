import React, { useState } from 'react'
import { FaSquareCheck } from "react-icons/fa6";

function CheckContract() {
    const p1 = "ipsum component variant main layer. Reesizing hand."

  return (
    <div>
        <input
          type='checkbox'
          name='test'
          id='test'
        ></input>
        <label htmlFor='contract' className='ml-3'>{p1}</label>

    </div>
  )
}

export default CheckContract