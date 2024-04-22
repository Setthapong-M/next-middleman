"use client"

import React from 'react'
import { useState, useEffect } from 'react'

function SellerInfo() {
    const name = ""
    const phone = ""
    const payment = ""

    return (
        <div className='flex flex-col gap-y-2 max-w-screen-sm w-full drop-shadow-md border bg-white px-6 py-4 rounded-xl'>
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
    )
}

export default SellerInfo