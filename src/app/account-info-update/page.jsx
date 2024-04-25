import React from 'react'
import InputBarMd from '../components/moleculeMobile/InputBarMd'
import Link from 'next/link'
import InputBar from '../components/moleculeDesktop/InputBar'

function AccountInfoUpdate() {
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:p-20'>
      <h1 className='text-2xl md:text-5xl font-bold uppercase mb-6'>Update  your account</h1>
      
      <div className='hidden md:flex flex-col gap-6'>
        <InputBar title={"First name"} ph={"Enter your first name"}/>
        <InputBar title={"Last name"} ph={"Enter your last name"}/>
        <InputBar title={"Phone number"} ph={"Enter your phone number"}/>
        <InputBar title={"Payment receiving"} ph={"Enter your bank account"}/>
        <InputBar title={"Address"} ph={"Enter your address"}/>
      </div>

      <div className='md:hidden flex flex-col gap-6'>
        <InputBarMd title={"First name"} ph={"Enter your first name"}/>
        <InputBarMd title={"Last name"} ph={"Enter your last name"}/>
        <InputBarMd title={"Phone number"} ph={"Enter your phone number"}/>
        <InputBarMd title={"Payment receiving"} ph={"Enter your bank account"}/>
        <InputBarMd title={"Address"} ph={"Enter your address"}/>
      </div>
      <Link href='/account-info'>
          <button className='mt-6 md:max-w-80 w-full h-16 bg-grey400 text-white rounded-full text-xl font-bold md:text-xl border border-black uppercase'>
            Confirm
          </button>
        </Link>
    </div>
    
  )
}

export default AccountInfoUpdate
