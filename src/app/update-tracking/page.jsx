import React from 'react'
import Link from 'next/link'
import InputBar from '../components/moleculeDesktop/InputBar'

function updateTracking() {
    const title = "Tracking number"
    const ph = "Enter your tracking number"
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
        <h1 className='text-5xl font-bold uppercase'>Update tracking number</h1>
        <div className='mt-12'>
            <InputBar title = {title} ph = {ph}/>
        </div>
        <Link href='/seller-info-update' className='flex items-center justify-center mt-12 w-full md:w-80 h-16 bg-grey400 text-white rounded-full text-xl font-bold md:text-xl border border-black uppercase'>
          Confirm
        </Link>
    </div>
  )
}

export default updateTracking