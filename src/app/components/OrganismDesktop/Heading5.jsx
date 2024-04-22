import React from 'react'
import DropdownQna from '../moleculeDesktop/DropdownQna'

function Heading5() {
  return (
    <div className='bg-grey100 px-8'>
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between py-20 gap-12'>
            <h1 className='text-4xl mt-6'>YOUR QUESTIONS, ANSWERED</h1>
            <div>
                <DropdownQna />
                <DropdownQna />
                <DropdownQna />
                <DropdownQna />
            </div>
        </div>
    </div>
    
  )
}

export default Heading5