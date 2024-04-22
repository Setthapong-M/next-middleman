"use client"

import Link from 'next/link'
import React from 'react'
import { FaCircleUser, FaBars, FaSistrix, FaGlobe,FaKey } from "react-icons/fa6";
import Image from 'next/image';
import SearchSm from '../moleculeDesktop/SearchSm';
import HeaderRoom from '../moleculeDesktop/HeaderRoom';
import { useState } from 'react';
import LogoEm from '../../../../public/logoEm.svg'
import LogoText from '../../../../public/logoText.svg'

function Navbar() {
  return (
    <nav className='bg-black px-8'>
        <div className='flex max-w-screen-xl h-20 items-center mx-auto justify-between text-white'>
            <Link href="/"><div className='flex'>
                <Image 
                    src={LogoEm}
                    width={48}
                    height={48}
                    alt='/'
                />
                <Image 
                    src={LogoText}
                    width={128}
                    height={32}
                    alt='/'
                    className='hidden md:block'
                />
            </div></Link>

            <div className='hidden md:block'><SearchSm /></div>
            {/* <HeaderRoom /> */}
            <ul className='flex items-center gap-x-3'>
                <Link href="/"><li><FaGlobe className='w-10 h-10'/></li></Link>
                <Link href="/"><li><FaBars className='w-10 h-12'/></li></Link>
                <Link href="/"><li><FaCircleUser className='w-10 h-10'/></li></Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar