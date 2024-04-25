"use client"

import React from 'react'
import PositionNego from '../components/moleculeDesktop/PositionNego'
import InputDetailNego from '../components/moleculeDesktop/InputDetailNego'
import CheckContract from '../components/moleculeDesktop/CheckContract'
import Link from 'next/link'
import Dropdown from '../components/moleculeDesktop/Dropdown'

function Negotiation() {
  let options = [
    'Categoty',
    'Discount on product',
    'Return product',
    'Negotiate by MIDDLEMAN',
  ]
  
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
        <div className='flex flex-col gap-6'>
        <h1 className='text-5xl font-bold uppercase'>Negotiation</h1>
        <PositionNego />
        <Dropdown options = {options} />
        <InputDetailNego />
        <CheckContract />
        <Link href='/' className='flex items-center justify-center mt-3 md:mt-0 w-full md:w-80 h-16 bg-green200 text-black rounded-full text-xl font-bold md:text-xl border border-black uppercase'>
          Confirm
        </Link>
        </div>
        

    </div>
    
  )
}

export default Negotiation
