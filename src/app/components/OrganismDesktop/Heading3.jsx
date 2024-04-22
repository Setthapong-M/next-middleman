import React from 'react'
import Heading from '../moleculeDesktop/Heading'
import Image from 'next/image'

function Heading3() {
    const title1 = "IF YOU EVER"
    const title2 ="HAD CHEATED"
    const title3 = ""
    const content = "Lorem ipsum dolor sit amet consectetur. Aliquam elit commodo egestas ornare. Scelerisque id aliquam faucibus urna velit. In semper fringilla mollis ornare leo. Blandit sit eget odio hendrerit."
  
    return (
        <div className='max-w-screen-xl mx-auto py-20 px-8'>
            <div className='flex flex-col md:flex-row md:justify-evenly md:items-center gap-12'>
                <Heading 
                    title1 = {title1}
                    title2 = {title2}
                    title3 = {title3}
                    content = {content}
                />
                <div>
                    <Image 
                        src="https://images.unsplash.com/photo-1559581958-df379578606a?q=80&w=3402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={1000}
                        height={1000}
                        alt='/'
                        className='object-cover aspect-square md:min-w-[576px] max-h-[672px] w-full h-full rounded-xl'
                    />
                </div>
            </div>
        </div>
        
    )
}

export default Heading3
