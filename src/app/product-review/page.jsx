"use client"

import React from 'react'
import PicProduct from '../components/moleculeDesktop/PicProduct'
import InputProduct from '../components/moleculeDesktop/InputProduct'
import Link from 'next/link'
import ProductReviewInfo from '../components/moleculeDesktop/ProductReviewInfo'
import PicProductMd from '../components/moleculeMobile/PicProductMd'
import SellerInfo from '../components/moleculeDesktop/SellerInfo'
import ProductInfo from '../components/moleculeDesktop/ProductInfo'

function productReview() {
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
        <h1 className='hidden md:block text-5xl font-bold uppercase mb-12'>Product review</h1>
        
        <div className='flex flex-col md:grid md:grid-cols-2'>

            <div className='hidden md:block'>
              <PicProduct />
            </div>
            
            <div className='md:hidden'>
              <PicProductMd />
            </div>

            <div className='md:hidden max-w-4xl mt-12 flex flex-col gap-6 md:gap-12'>
              <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                <h3 className='text-2xl font-bold'>Seller info</h3>
                <SellerInfo />
              </div>
              <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                <h3 className='text-2xl font-bold '>Product info</h3>
                <ProductInfo />
              </div>

              <Link href=".." className='w-full h-16 bg-grey400 flex justify-center items-center text-white rounded-full'>
                  Go Back
              </Link>
            </div>

            <div className='hidden md:block flex justify-center max-w-80'>
                <Link href=".." className='w-full h-16 bg-grey400 flex justify-center items-center text-white rounded-full'>
                  Go Back
                </Link>

                <ProductReviewInfo />
            </div>
            
        </div>
    </div>
  )
}

export default productReview