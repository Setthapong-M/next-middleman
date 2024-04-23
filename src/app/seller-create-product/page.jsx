"use client"

import React from 'react'
import PicProduct from '../components/moleculeDesktop/PicProduct'
import InputProduct from '../components/moleculeDesktop/InputProduct'
import Link from 'next/link'
import PicProductMd from '../components/moleculeMobile/PicProductMd'
import InputBarMd from '../components/moleculeMobile/InputBarMd'

function createProduct() {

  const titleP = "Price"
  const phP = "Enter price"
  const titleD = "Description"
  const phD = "Enter anything"

  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
        <h1 className='hidden md:block text-5xl font-bold uppercase mb-12'>Create your product</h1>
        
        <div className='flex flex-col md:grid md:grid-cols-2 gap-6'>
          <div className='md:hidden'>
            <PicProductMd />
          </div>
          <div className='md:max-w-80 flex flex-col gap-3 md:gap-6'>
              <div className='hidden md:block'>
                <InputProduct />
              </div>
              <div className='md:hidden'>
                <InputBarMd title = {titleP} ph = {phP}/>
              </div>
              <div className='md:hidden'>
                <InputBarMd title = {titleD} ph = {phD}/>
              </div>
              
              <Link href='/'>
                <button className='mt-3 md:mt-0 w-full md:w-80 h-16 bg-grey400 text-white rounded-full text-xl font-bold md:text-xl border border-black uppercase'>
                  Confirm
                </button>
              </Link>
          </div>
          
          <div className='hidden md:block'>
            <PicProduct />
          </div>
            
        </div>
        
        
    </div>
  )
}

export default createProduct