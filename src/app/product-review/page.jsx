"use client"

import React from 'react'
import PicProduct from '../components/moleculeDesktop/PicProduct'
import InputProduct from '../components/moleculeDesktop/InputProduct'
import Link from 'next/link'
import ProductReviewInfo from '../components/moleculeDesktop/ProductReviewInfo'

function productReview() {
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
        <h1 className='text-5xl font-bold uppercase mb-12'>Product review</h1>
        
        <div className='grid grid-cols-2'>
            <PicProduct />
            <div className='flex justify-center'>
                <ProductReviewInfo />
            </div>
            
        </div>
    </div>
  )
}

export default productReview