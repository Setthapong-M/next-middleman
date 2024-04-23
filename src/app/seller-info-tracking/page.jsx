import React from 'react'
import Status from '../components/moleculeDesktop/Status'
import SellerInfo from '../components/moleculeDesktop/SellerInfo'
import BuyerInfo from '../components/moleculeDesktop/BuyerInfo'
import Link from 'next/link'
import ProductInfo from '../components/moleculeDesktop/ProductInfo'
import TrackInfo from '../components/moleculeDesktop/TrackInfo'

function sellerInfoTracking() {
    const tag = "Padding"
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
        <Status tag = {tag}/>
        <div className='max-w-4xl mt-12 flex flex-col gap-6 md:gap-12'>
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                <h3 className='text-2xl font-bold'>Tracking number</h3>
                <TrackInfo />
            </div>
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                <h3 className='text-2xl font-bold'>Seller info</h3>
                <SellerInfo />
            </div>
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                <h3 className='text-2xl font-bold '>Buyer info</h3>
                <BuyerInfo />
            </div>

            <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                <h3 className='text-2xl font-bold '>Product info</h3>
                <ProductInfo />
            </div>
        </div>
        <div className='flex flex-col gap-6 mt-12'>
            <Link href='/'>
                <button className='w-80 h-16 bg-green200 text-black rounded-full text-xl font-bold md:text-xl border border-black uppercase'>
                    Go back
                </button>
            </Link>
            <Link href='/'>
                <button className='w-80 h-16 bg-grey400 text-white rounded-full text-xl font-bold md:text-xl border border-black uppercase'>
                    View product
                </button>
            </Link>
        </div>
    </div>
  )
}

export default sellerInfoTracking