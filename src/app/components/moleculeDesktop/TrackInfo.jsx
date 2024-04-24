"use client"

import React from 'react'
import { useState, useEffect } from 'react'

function TrackInfo() {
    const shipping = "BLITZEZ Express"
    const tracking = "TH114455661"

    return (
        <div className='-z-50 flex flex-col gap-y-2 max-w-screen-sm w-full drop-shadow-md border bg-white px-6 py-4 rounded-xl'>
            <div>
                <p>Company shipping : {shipping}</p>
            </div>
            <div>
                <p>Tracking number : {tracking}</p>
            </div>
        </div>
    )
}

export default TrackInfo