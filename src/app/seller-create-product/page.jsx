"use client"

import React, { useState } from 'react'
import PicProduct from '../components/moleculeDesktop/PicProduct'
import InputProduct from '../components/moleculeDesktop/InputProduct'
import Link from 'next/link'
import PicProductMd from '../components/moleculeMobile/PicProductMd'
import InputBarMd from '../components/moleculeMobile/InputBarMd'
import PicProductChoose from '../components/moleculeDesktop/PicProductChoose'

function SellerCreateProduct() {

  const titleP = "Price"
  const phP = "Enter price"
  const titleD = "Description"
  const phD = "Enter anything"

  const [isPic, setIsPic] = useState(false);

  const clickHandler = () => {
    setIsPic(!isPic);
  }

  return (
    <div className='max-w-screen-xl mx-auto p-8 pt-12 md:p-20'>
        <h1 className='hidden md:block text-5xl font-bold uppercase mb-12'>Create your product</h1>
        
        <div className='flex flex-col md:grid md:grid-cols-2 gap-6 '>
          {/* click to change image */}
          <div className='md:hidden'> 
            { !isPic ? (
              <div onClick={clickHandler}>
                <PicProductChoose />
              </div>
              ): <PicProductMd /> }

          </div>
          <div className='flex flex-col gap-3 md:gap-6 w-full'>
              <div className='hidden md:block'>
                <InputProduct />
              </div>
              <div className='md:hidden'>
                <InputBarMd title = {titleP} ph = {phP}/>
              </div>
              <div className='md:hidden'>
                <InputBarMd title = {titleD} ph = {phD}/>
              </div>
              
              <Link href='/seller-create-product/seller-info' className='flex items-center justify-center mt-3 md:mt-0 w-full md:w-80 h-16 bg-grey400 text-white rounded-full text-xl font-bold md:text-xl border border-black uppercase'>
                Confirm
              </Link>
          </div>
          
          {/* click to change image */}
          <div className='hidden md:block'>
            { !isPic ? (
              <div onClick={clickHandler}>
                <PicProductChoose />
              </div>
            ) : <div>
                  <PicProduct />
                </div>}
          </div>
            
        </div>
        
        
    </div>
  )
}

export default SellerCreateProduct