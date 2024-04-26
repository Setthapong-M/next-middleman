import React, { useState } from 'react'
import { FaExpand, FaGlobe } from "react-icons/fa6";
import ModalEnterKey from './ModalEnterKey';

function SearchMd() {

  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
  }

  return (
    <div className='md:hidden max-w-screen-md flex gap-6 p-8'>
        <div className='bg-grey400 rounded-full min-w-12 max-h-12 flex items-center justify-center'>
            <FaExpand className='w-6 h-6 text-white'/>
        </div>
        
        <input type='text' placeholder='Search room' className='h-12 w-full pl-6 rounded-full border border-black '></input>
        
        <div className='bg-grey400 rounded-full min-w-12 max-h-12 flex items-center justify-center'>
            <FaGlobe className='w-6 h-6 text-white'/>
        </div>
        <ModalEnterKey isVisible={showModal} onClose={() => setShowModal(false)}/>
    </div>
  )
}

export default SearchMd