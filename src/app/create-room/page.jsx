import React from 'react'
import SearchXl from '../components/moleculeDesktop/SearchXl'
import Link from 'next/link'

function createRoom() {
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
        <h1 className='text-5xl font-bold mb-12 uppercase'>Create your deal</h1>
        <div className='max-w-screen-lg flex flex-col gap-12'>
            <SearchXl />
            
            <div className='flex items-center gap-2'>
                <div className='border-[0.5px] border-black grow h-[0.5px]'></div>
                <p>or</p>
                <div className='border-[0.5px] border-black grow h-[0.5px]'></div>
            </div>
            
            <Link href='/'><button className='w-full h-16 bg-grey400 text-white rounded-full text-xl font-bold md:text-xl border border-black uppercase'>create room</button></Link>
        </div>
    </div>
  )
}

export default createRoom