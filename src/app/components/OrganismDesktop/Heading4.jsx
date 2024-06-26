import React from 'react'
import Heading from '../moleculeDesktop/Heading'
import Image from 'next/image'

function Heading4() {
    const title1 = "WAITING FOR"
    const title2 ="A STUFF WILL NOT"
    const title3 = "BE WASTEFUL"
    const content = "เพียงแค่ของถึงมือผู้ซื้อ แล้วได้รับการกดยืนยันของ เราจะส่งเงินให้คุณตามเวลาที่กำหนด(ช่วงเวลา) คุณจะไม่ต้องกังวลว่าเงินที่โอนไปแล้ว จะโดนโกงหรือไม่"
  
    return (
        <div className='max-w-screen-xl mx-auto py-6 md:py-20 px-8'>
            <div className='flex flex-col-reverse md:flex-row md:justify-evenly md:items-center gap-12'>
                <div>
                    <Image 
                        src="https://images.unsplash.com/photo-1585206031650-9e9a7c87dcfe?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={1000}
                        height={1000}
                        alt='/'
                        className='object-cover aspect-square md:max-w-[672px] max-h-[672px] w-full h-full rounded-xl'
                    />
                </div>
                <Heading 
                    title1 = {title1}
                    title2 = {title2}
                    title3 = {title3}
                    content = {content}
                />
            </div>
        </div>
    )
}

export default Heading4