import React from 'react'
import Image from 'next/image'
import { FaImage } from 'react-icons/fa6'

function PicProductChoose() {
  return (
    <div className='max-w-lg'>
        <a className='w-full h-96 flex justify-center items-center rounded-xl shadow-md border-2 border-grey200 cursor-pointer hover:border-yellow100'>
            <FaImage className='w-10 h-12 text-grey400'/>
        </a>
    </div>
  )
}

export default PicProductChoose