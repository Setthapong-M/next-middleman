import React from 'react'
import Link from 'next/link'

function Heading(props) {
  return (
    <div className='max-w-md flex flex-col gap-6 justify-start'>
        <div className='text-5xl font-bold'>
            <h1>{props.title1}</h1>
            <h1>{props.title2}</h1>
            <h1>{props.title3}</h1>
        </div>
        <p className=''>{props.content}</p>
        <div className='flex items-end gap-6'>
          <Link href='/create-room'><button className='min-w-40 w-full h-16 bg-green200 rounded-full text-xl font-bold'>MIDDLEMAN</button></Link>
          <Link href='/login' className='hidden md:block underline text-center'>Not an account yet?</Link>
        </div>
    </div>
  )
}

export default Heading