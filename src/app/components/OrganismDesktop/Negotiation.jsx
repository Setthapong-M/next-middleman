import React from 'react'
import Link from 'next/link'

function Negotiation() {
  return (
    <div className='bg-grey400 px-8 my-6'>
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center py-20 gap-12'>
            <div className='max-w-md flex flex-col text-white gap-12'>
                <h1 className='text-4xl md:text-5xl'>Negotiation</h1>
                <p>เมื่อพบปัญหาในของที่ได้รับ ผู้ขายสามารถลดราคาสินค้าได้โดยตรงผ่านทางเรา แต่ถ้าการต่อรองกันรอบนอกไม่เป็นผล ให้เราเป็นผู้ช่วยหาทางออกของทั้งสองฝ่าย</p>
            </div>
            <Link href="/negotiation"><button className='w-full md:w-96 h-14 md:h-20 rounded-full bg-white text-2xl font-bold'>NEGOTIATE</button></Link>
        </div>
    </div>
    
  )
}

export default Negotiation