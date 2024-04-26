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

  const contract1 = "การตัดสินของ MIDDLEMAN ถือเป็นที่สิ้นสุด"
  const contract2 = "เมื่อมีการคืนสินค้า หรือลดราคาของสินค้า มีค่าธรรมเนียมเริ่มต้นที่ 10% ของราคาของ"
  const contract3 = "ถ้าเจรจาแล้ว ข้อตกลงยังคงเหมือนเดิม จะไม่มีค่าธรรมเนียมเพิ่มเติมใดๆ ทัั้งสิ้น"

  
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
        <div className='flex flex-col gap-6'>
        <h1 className='text-5xl font-bold uppercase'>Negotiation</h1>
        <PositionNego />
        <Dropdown options = {options} />
        <InputDetailNego />
        <div className='flex flex-col gap-2'>
          <CheckContract contract = {contract1}/>
          <CheckContract contract = {contract2}/>
          <CheckContract contract = {contract3}/>
        </div>
        

        <Link href='/' className='flex items-center justify-center mt-3 md:mt-0 w-full md:w-80 h-16 bg-green200 text-black rounded-full text-xl font-bold md:text-xl border border-black uppercase'>
          Confirm
        </Link>
        </div>
        

    </div>
    
  )
}

export default Negotiation
