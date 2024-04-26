"use client"

import React from 'react'
import { useState, useEffect } from 'react'

function ProductInfo() {
    const price = "9900"
    const descr = "Lorem ipsum dolor sit amet consectetur. Arcu est urna lobortis sagittis tincidunt. Aliquam odio eget risus aliquet ac nunc eget ullamcorper. Etiam blandit faucibus nibh faucibus etiam. Tincidunt cras urna magna aliquam fringilla facilisis."

    return (
        <div className='-z-50 flex flex-col gap-y-2 max-w-screen-sm w-full drop-shadow-md border bg-white px-6 py-4 rounded-xl'>
            <div>
                <p>Phone number : {price}</p>
            </div>
            <div className='flex gap-x-3'>
                <p className='text-nowrap'>Description :</p>
                <div className=''>{descr}</div>
            </div>
        </div>
    )
}

export default ProductInfo