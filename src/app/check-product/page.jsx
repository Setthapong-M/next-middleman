"use client"

import React from 'react'
import PicProduct from '../components/moleculeDesktop/PicProduct'
import Link from 'next/link'
import CheckInputProductMd from '../components/moleculeMobile/CheckInputProductMd'
import PicProductMd from '../components/moleculeMobile/PicProductMd'
import { useRouter } from 'next/navigation'
import CheckInputProduct from '../components/moleculeDesktop/CheckInputProduct'

function CheckProduct() {
    const router = useRouter();
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
        <h1 className='hidden md:block text-5xl font-bold uppercase mb-12'>Create your product</h1>
        
        <div className='flex flex-col md:grid md:grid-cols-2 gap-6'>
            <div className='md:hidden'>
                <PicProductMd />
            </div>
            <div className='md:max-w-80 flex flex-col gap-3 md:gap-6'>
                
                <div className=' hidden md:block'>
                    <CheckInputProduct />
                </div>

                <div className=' md:hidden'>
                    <CheckInputProductMd />
                </div>
                
                <div className='flex flex-col gap-6 mt-3'>
                <Link href='/buyer-info' className='flex items-center justify-center mt-3 md:mt-0 w-full md:w-80 h-16 bg-green200 text-black rounded-full text-xl font-bold md:text-xl border border-black uppercase'>
                    Confirm
                </Link>

                <button onClick={router.back} className='w-full md:w-80 h-16 bg-grey400 text-white rounded-full text-xl font-bold md:text-xl border border-black uppercase'>
                    Reject
                </button>

                </div>
            </div>
            <div className='hidden md:block'>
                <PicProduct />
            </div>
            
        </div>
    </div>
  )
}

export default CheckProduct