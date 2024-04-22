import React from 'react'
import { FaSquareCheck } from "react-icons/fa6";

function CheckContract() {
    const p1 = "ipsum component variant main layer. Reesizing hand."
  return (
    <div>
        <p className='flex items-center gap-3 '><FaSquareCheck />{p1}</p>
    </div>
  )
}

export default CheckContract