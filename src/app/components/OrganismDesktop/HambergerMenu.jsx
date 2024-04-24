import React from 'react'
import { FaArrowRight, FaBell, FaInbox, FaCircleUser, FaGear, FaGift, FaCircleQuestion, FaCommentMedical, FaPersonDigging  } from "react-icons/fa6";
import Image from 'next/image';
import Logo from '../../../../public/logo.svg'

function HambergerMenu({isVisible, onClose}) {
    if(!isVisible) return null;

    const handleClose = (e) => {
        if(e.target.id === "wrapper") onClose();
    }

  return (
    <div id='wrapper' onClick={handleClose} className='fixed inset-0 mt-20'>
        <div className='max-w-screen-xl mx-auto relative '>
            <div className='overflow-y-auto absolute right-0 bg-black w-96 rounded-b-xl drop-shadow-md border border-t-black transition-all'>

                <div className='text-white flex flex-col gap-3 p-6'>
                    <h1 className='text-2xl'>Follow up</h1>
                    <span className=' flex justify-between items-center pt-3 pr-3 pb-3'>
                        <h1 className='flex items-center gap-3 text-xl'><FaBell />Notifications</h1>
                        <FaArrowRight className=''/>
                    </span>
                    <span className=' border-b flex justify-between items-center pt-3 pr-3 pb-9'>
                        <h1 className='flex items-center gap-3 text-xl'><FaInbox  />Activity</h1>
                        <FaArrowRight className=''/>
                    </span>
                </div>

                <div className='text-white flex flex-col gap-3 p-6'>
                    <h1 className='text-2xl'>General</h1>
                    <span className=' flex justify-between items-center pt-3 pr-3 pb-3'>
                        <h1 className='flex items-center gap-3 text-xl'><FaCircleUser  />Account info</h1>
                        <FaArrowRight className=''/>
                    </span>
                    <span className=' border-b flex justify-between items-center pt-3 pr-3 pb-9'>
                        <h1 className='flex items-center gap-3 text-xl'><FaGear />Settings</h1>
                        <FaArrowRight className=''/>
                    </span>
                </div>

                <div className='text-white flex flex-col gap-3 p-6'>
                    <h1 className='text-2xl'>Referrals & credits</h1>
                    <span className='border-b flex justify-between items-center pt-3 pr-3 pb-9'>
                        <h1 className='flex items-center gap-3 text-xl'><FaGift />Gift cards</h1>
                        <FaArrowRight className=''/>
                    </span>
                </div>

                <div className='text-white flex flex-col gap-3 p-6'>
                    <h1 className='text-2xl'>Support</h1>
                    <span className=' flex justify-between items-center pt-3 pr-3 pb-3'>
                        <h1 className='flex items-center gap-3 text-xl'><FaCircleQuestion  />Visit the Help Center</h1>
                        <FaArrowRight className=''/>
                    </span>
                    <span className=' flex justify-between items-center pt-3 pr-3 pb-3'>
                        <h1 className='flex items-center gap-3 text-xl'><FaCommentMedical />Report issue</h1>
                        <FaArrowRight className=''/>
                    </span>
                    <span className='border-b flex justify-between items-center pt-3 pr-3 pb-9'>
                        <h1 className='flex items-center gap-3 text-xl'>
                            {/* <Image src={Logo} width={20} height={20} alt='/'/> */}
                            <FaPersonDigging />
                            How MIDDLEMAN WORK
                        </h1>
                        <FaArrowRight className=''/>
                    </span>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default HambergerMenu
