import Link from 'next/link'
import React from 'react'
import { FaGlobe, FaGoogle, FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

function FooterMd() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-black text-white p-8'>
      <div className= 'max-w-screen-xl mx-auto h-auto flex justify-between items-end md:items-center'>
        <div className='flex flex-col md:flex-row gap-2'>
          <div>
            <p>© {currentYear}MIDDLEMAN, Inc.</p>
          </div>
          <div className='flex gap-2'>
            <Link href="/">Terms</Link>
            <Link href="/">Privacy</Link>
            <Link href="/">Accessibility</Link>
          </div>
        </div>
        
        <div className='flex items-center gap-2'>
          <Link href='/'>
            <div className='flex items-center gap-1'>
              <FaGlobe />
              <p>English(US)</p>
            </div>
          </Link>
          <Link href='/'><FaGoogle /></Link>
          <Link href='/'><FaFacebook /></Link>
          <Link href='/'><FaXTwitter /></Link>
          <Link href='/'><FaInstagram /></Link>
        </div>
        

      </div>
    </div>
    
  )
}

export default FooterMd