"use client"

import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { useState } from 'react';

function DropdownQna() {
    const p1 = "What is MIDDLEMAN and how does it work?"
    return (
        <div className='max-w-screen-sm w-full min-h-20 flex justify-between items-center border-b border-b-black gap-20 text-wrap text-start'>
            <p className='text-xl max-w-96 '> {p1}</p>
            <FaAngleDown />
        </div>
    )
}

export default DropdownQna