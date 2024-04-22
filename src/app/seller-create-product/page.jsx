"use client"

import React from 'react'
import PicProduct from '../components/moleculeDesktop/PicProduct'
import InputProduct from '../components/moleculeDesktop/InputProduct'
import Link from 'next/link'

function createProduct() {
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
        <h1 className='text-5xl font-bold uppercase mb-12'>Create your product</h1>
        
        <div className='grid grid-cols-2'>
            <div className='max-w-80 flex flex-col gap-6'>
                <InputProduct />
                <Link href='/'><button className='w-80 h-16 bg-grey400 text-white rounded-full text-xl font-bold md:text-xl border border-black uppercase'>Confirm</button></Link>
            </div>
            <PicProduct />
        </div>
    </div>
  )
}

export default createProduct