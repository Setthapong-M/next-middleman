"use client"

import React from 'react'
import { useState, useEffect } from 'react'

function ProductInfo() {
    const price = ""
    const descr = ""

    return (
        <div className='flex flex-col gap-y-2 max-w-screen-sm w-full drop-shadow-md border bg-white px-6 py-4 rounded-xl'>
            <div>
                <p>Phone number : {price}</p>
            </div>
            <div className='flex gap-x-3'>
                <p className='text-nowrap'>Description : </p>
                <div className=''>{descr}</div>
            </div>
        </div>
    )
}

export default ProductInfo