import React from 'react'
import Link from 'next/link'
import InputBar from '../../../../components/moleculeDesktop/InputBar'
import Dropdown from '../../../../components/moleculeDesktop/Dropdown'
import InputBarMd from '../../../../components/moleculeMobile/InputBarMd'


function UpdateTracking() {
    const title = "Tracking number"
    const ph = "Enter your tracking number"

    let options = [
      "Blitz express",
      "Flash express",
      "Kerry express",
    ]

  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
        <h1 className='text-xl md:text-5xl font-bold uppercase mb-6'>Update tracking number</h1>
        <div className='flex flex-col gap-6'>
          <Dropdown options = {options}/>
          <div className='hidden md:block'>
            <InputBar title = {title} ph = {ph}/>
          </div>
          <div className='-z-50 md:hidden'>
            <InputBarMd title = {title} ph={ph}/>
          </div>
          <Link href='/seller-create-product/seller-info/seller-info-update/update-tracking/seller-info-tracking' className='flex items-center justify-center w-full md:w-80 h-16 bg-grey400 text-white rounded-full text-xl font-bold md:text-xl border border-black uppercase'>
            Confirm
          </Link>
        </div>
        
    </div>
  )
}

export default UpdateTracking