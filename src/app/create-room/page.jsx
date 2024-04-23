"use client"

import React from 'react'
import SearchXl from '../components/moleculeDesktop/SearchXl'
import Link from 'next/link'
import ModalCreateKey from '../components/OrganismMobile/ModalCreateKey'
import { useState } from 'react'
import SearchMd from '../components/OrganismMobile/SearchMd'

function createRoom() {
  const [showMadal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showMadal);
  }

  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
        <h1 className='hidden md:block text-5xl font-bold mb-12 uppercase'>Create your deal</h1>
        <div className='md:hidden'>
          <SearchMd />
        </div>
        
        <div className='max-w-screen-lg flex md:flex-col gap-12'>
            <div className='hidden md:block'>
              <SearchXl />
            </div>
            
            
            <div className='hidden md:flex items-center gap-2'>
                <div className='border-[0.5px] border-black grow h-[0.5px]'></div>
                <p>or</p>
                <div className='border-[0.5px] border-black grow h-[0.5px]'></div>
            </div>
            
            <div className='w-full mt-60 md:m-0'>
              <h1 className='md:hidden text-2xl font-bold mb-3 uppercase text-center'>Create your deal</h1>
              <Link href='/create-key'>
                <button className='hidden md:block w-full h-16 bg-grey400 text-white rounded-full text-xl font-bold md:text-xl border border-black uppercase'>  
                  create room
                </button>
              </Link>
              
              <button onClick={toggle} className='md:hidden w-full h-16 bg-grey400 text-white rounded-full text-xl font-bold md:text-xl border border-black uppercase'>  
                create room
              </button>
            </div>
              
        </div>
        <ModalCreateKey isVisible={showMadal} onClose={() => setShowModal(false)}/>
    </div>
  )
}

export default createRoom