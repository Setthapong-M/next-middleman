import Link from 'next/link'
import React from 'react'
import { FaCircleUser, FaBars, FaSistrix, FaGlobe,FaKey } from "react-icons/fa6";

function Navbar() {
  return (
    <nav>
        <div>
            <Link href="/"><div>
                <div></div>
                <div></div>
            </div></Link>
            <div>
                <div className=''>
                    <label htmlFor='Search'>Serach room</label>
                    <input type='text' placeholder='Serach room' className=''></input>
                </div>
                <button><FaSistrix /></button>
            </div>
            <div>
                <h1></h1>
                <h1></h1>
                <Link href="/"><FaKey /></Link>
            </div>
            <ul>
                <Link href="/"><li><FaGlobe /></li></Link>
                <Link href="/"><li><FaBars /></li></Link>
                <Link href="/"><li><FaCircleUser /></li></Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
