import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Heading1() {
  const title1 = "MIDDLEMAN"
  const title2 ="TRUSTABLE BUT "
  const title3 = "MUST TO PROVE"
  const content = "Lorem ipsum dolor sit amet consectetur. Aliquam elit commodo egestas ornare. Scelerisque id aliquam faucibus urna velit. In semper fringilla mollis ornare leo. Blandit sit eget odio hendrerit."

  return (
    <div className='max-w-screen-xl mx-auto pt-6 pb-20 md:py-20 px-8'>
      <div className='flex flex-col gap-12 md:gap-0 md:flex-row md:justify-evenly md:items-center'>
        <div className='md:max-w-md flex flex-col gap-12 justify-start'>
          <div className='text-5xl font-bold md:text-5xl'>
              <h1>{title1}</h1>
              <h1>{title2}</h1>
              <h1>{title3}</h1>
          </div>
          <p className=''>{content}</p>
          <div className='flex flex-col md:max-w-96 gap-3'>
            <Link href='/login'><button className='w-full  h-14 md:h-20 bg-green200 rounded-full text-xl font-bold md:text-2xl border border-black'>MIDDLEMAN</button></Link>
            <Link href='/login' className='hidden md:block underline text-center'>Already have an account? Sign in</Link>
          </div>
        </div>
        
        <div className=''>
          <Image 
            src="https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?q=80&w=3143&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1000}
            height={1000}
            alt='/'
            className='object-cover  aspect-square md:min-w-[576px] max-h-[672px] w-full h-full rounded-xl'
          />
        </div>
      </div>
    </div>
    
    
  )
}

export default Heading1