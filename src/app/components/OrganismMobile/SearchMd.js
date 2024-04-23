import React, { useState } from 'react'
import { FaExpand, FaGlobe } from "react-icons/fa6";
import ModalEnterKey from '../moleculeMobile/ModalEnterKey';

function SearchMd() {

  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
  }

  return (
    <div className='max-w-screen-md flex gap-6'>
        <div onClick={toggle} className='bg-grey400 rounded-full min-w-16 min-h-16 flex items-center justify-center'>
            <FaExpand className='w-10 h-10 text-white'/>
        </div>
        <input type='text' placeholder='Search room' className='h-16 w-full pl-6 rounded-full border border-black '></input>
        <div className='bg-grey400 rounded-full min-w-16 min-h-16 flex items-center justify-center'>
            <FaGlobe className='w-10 h-10 text-white'/>
        </div>
        <ModalEnterKey isVisible={showModal} onClose={() => setShowModal(false)}/>
    </div>
  )
}

export default SearchMd