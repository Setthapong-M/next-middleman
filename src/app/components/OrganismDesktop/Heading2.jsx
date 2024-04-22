import React from 'react'
import Heading from '../moleculeDesktop/Heading'
import Image from 'next/image'

function Heading2() {
    const title1 = "CLOSE A DEAL WITH"
    const title2 ="MIDDLEMAN"
    const title3 = ""
    const content = "Lorem ipsum dolor sit amet consectetur. Aliquam elit commodo egestas ornare. Scelerisque id aliquam faucibus urna velit. In semper fringilla mollis ornare leo. Blandit sit eget odio hendrerit."
  
    return (
        <div className='max-w-screen-xl mx-auto py-20 px-8'>
            <div className='flex flex-col-reverse md:flex-row md:justify-evenly md:items-center gap-12'>
                <div>
                    <Image 
                        src="https://images.unsplash.com/photo-1573335553610-a871dfd95bf5?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={1000}
                        height={1000}
                        alt='/'
                        className='object-cover aspect-square md:min-w-[576px] max-h-[672px] w-full h-full rounded-xl'
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

export default Heading2