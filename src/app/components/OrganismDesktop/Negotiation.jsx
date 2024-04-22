import React from 'react'
import Link from 'next/link'

function Negotiation() {
  return (
    <div className='bg-grey400 px-8'>
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center py-20 gap-12'>
            <div className='max-w-md flex flex-col text-white gap-12'>
                <h1 className='text-5xl'>Negotiation</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Aliquam elit commodo egestas ornare. Scelerisque id aliquam faucibus urna velit. In semper fringilla mollis ornare leo. Blandit sit eget odio hendrerit.</p>
            </div>
            <Link href="/"><button className='w-full md:w-96 h-14 md:h-20 rounded-full bg-white text-2xl font-bold'>NEGOTIATE</button></Link>
        </div>
    </div>
    
  )
}

export default Negotiation