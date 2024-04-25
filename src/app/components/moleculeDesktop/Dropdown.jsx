'use client'
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


const Dropdown = ({options}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };


    return (
            <div id='dropDownButton'>
                {isOpen ? (
                    <button
                    type="button"
                    className="bg-white w-full md:w-80 h-16 text-xl flex items-center justify-between "
                    onClick={toggleDropdown}
                >
                    {options[0]} <FaAngleUp />
                    </button>
                ) : <button
                    type="button"
                    className="bg-white w-full md:w-80 h-16 text-xl flex items-center justify-between border-b border-black "
                    onClick={toggleDropdown}
                >
                    {options[0]} <FaAngleDown />
                    </button>}

                {isOpen && (
                    <div className="absolute w-80 rounded-xl drop-shadow-md bg-white border">
                        <ul>
                        {options.map((message, index) => {
                            return <li key={index}>
                                        <a
                                            href="#"
                                            className="block px-3 py-3 text-md hover:bg-grey100 hover:rounded-xl"
                                            onClick={closeDropdown}
                                            
                                        >
                                            {message}
                                        </a>
                                    </li>
                        })} </ul>
                        {/* <ul>
                            <li>
                                <a
                                    href="#"
                                    className="block px-3 py-3 text-md hover:bg-grey100 hover:rounded-t-xl"
                                    onClick={closeDropdown}
                                >
                                    Option 1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-3 py-3 text-md hover:bg-grey100 "
                                    onClick={closeDropdown}
                                >
                                    Option 2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-3 py-3 text-md hover:bg-grey100 hover:rounded-b-xl"
                                    onClick={closeDropdown}
                                >
                                    Option 3
                                </a>
                            </li>
                        </ul> */}
                    </div>
                )}
            </div>
    )
}

export default Dropdown;
