import React from 'react'
import InputBar from '../components/moleculeDesktop/InputBar'
import Link from 'next/link'

function createKey() {
    const title = "Key"
    const ph = "Create your key"
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
        <h1 className='uppcase text-5xl font-bold mb-12'>Create your key</h1>
        <div className='max-w-80 flex flex-col gap-12'>
            <InputBar title = {title} ph = {ph}/>
            <Link href='/position-side'><button className='w-full h-16 bg-grey400 text-white rounded-full text-xl font-bold md:text-xl border border-black uppercase'>Continue</button></Link>
        </div>
    </div>
    
  )
}

export default createKey