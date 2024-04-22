"use client"

import React from 'react'
import Image from 'next/image'

function PicProduct({prop}) {
    let allPic = [
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]
  return (
    <div className='max-w-lg'>
        <div className='mb-3'>
            <Image 
                src={allPic[0]}
                width={560}
                height={1000}
                alt='/'
                className='rounded-xl'
            />
        </div>
        <div className='overflow-x-scroll'>
            <div className='flex gap-3'>
            {allPic.map((s , index) => {
                return <Image 
                    src={s}
                    width={300}
                    height={300}
                    alt='/'
                    key={index}
                    className='min-w-52 h-52 rounded-xl'
            />})}
        </div>
        </div>
        
        
    </div>
  )
}

export default PicProduct