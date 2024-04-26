"use client"

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

function ProductReviewInfo() {
    const name = "James barnes"
    const phone = "0801234567"
    const payment = "Kbank 1212312121"

    const price = "9900"
    const descr = "Lorem ipsum dolor sit amet consectetur. Arcu est urna lobortis sagittis tincidunt. Aliquam odio eget risus aliquet ac nunc eget ullamcorper. Etiam blandit faucibus nibh faucibus etiam. Tincidunt cras urna magna aliquam fringilla facilisis."

    return (
        <div className='flex flex-col gap-3'>
            
            {/* Seller info */}
            <div>
                <div className='border-b border-black  pt-4 pb-2'>
                    <h3>Seller info</h3>
                </div>
                <div className='flex flex-col gap-y-2 w-full border-b border-black py-4'>
                    <div>
                        <p>Name : {name}</p>
                    </div>
                    <div>
                        <p>Phone number : {phone}</p>
                    </div>
                    <div>
                        <p>Payment receiving : {payment}</p>
                    </div>
                </div>
            </div>

            {/* Product info */}
            <div>
                <div className='border-b border-black pt-4 pb-2'>
                    <h3>Product info</h3>
                </div>
                <div className='flex flex-col gap-y-2 w-full border-b border-black py-4'>
                    <div>
                        <p>Phone number : {price} Baht</p>
                    </div>
                    <div className='flex gap-x-3'>
                        <p className='text-nowrap'>Description : </p>
                        <div className=''>{descr}</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProductReviewInfo