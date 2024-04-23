"use client"

import React from 'react'
import { useState, useEffect } from 'react'

function BuyerInfo() {
    const name = "Poly Mojo"
    const phone = "0876543210"
    const address = "250/444 Bangkok Thailand 10101"

    return (
        <div className='flex flex-col gap-y-2 max-w-screen-sm w-full drop-shadow-md border bg-white px-6 py-4 rounded-xl'>
            <div>
                <p>Name : {name}</p>
            </div>
            <div>
                <p>Phone number : {phone}</p>
            </div>
            <div className='flex gap-x-3'>
                <p className='text-nowrap'>Address : </p>
                <p className='w-full text-wrap'>{address}</p>
            </div>
        </div>
    )
}

export default BuyerInfo