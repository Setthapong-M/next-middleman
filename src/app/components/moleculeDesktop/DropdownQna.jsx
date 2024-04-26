"use client"

import React from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from 'react';

function DropdownQna(props) {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    
    return (
        <div>
            {isOpen ? (
                <div onClick={handleOpen} className='md:max-w-screen-sm w-full min-h-20 flex justify-between items-center gap-20'>
                    <p className='text-xl'> {props.title}</p>
                    <FaAngleUp />
                </div>
            ) : (
                <div onClick={handleOpen} className='md:max-w-screen-sm w-full min-h-20 flex justify-between items-center border-b border-b-black gap-20'>
                    <p className='text-xl'> {props.title}</p>
                    <FaAngleDown />
                </div>
            )}

            {isOpen && (
                <div className="md:max-w-screen-sm w-full flex py-6 border-b border-black">
                    <p className='max-w-96'>{props.content}</p>
                        {/* <ul>
                        {options.map((message, index) => {
                            return <li key={index + message}>
                                        <a
                                            href="#"
                                            className="block px-3 py-3 text-md hover:bg-grey100 hover:rounded-xl"
                                            onClick={handleClose}
                                        >
                                            {message}
                                        </a>
                                    </li>
                        })} </ul> */}
                </div>
            )}
            
        </div>
        
    )
}

export default DropdownQna