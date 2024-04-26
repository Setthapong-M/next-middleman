import React from 'react'
import DropdownQna from '../moleculeDesktop/DropdownQna'

function Heading5() {

  let options = [
    "A",
    "B",
    "C",
  ]

  const title1 = "What is MIDDLEMAN and how does it work?"
  const content1 = "Lorem ipsum dolor sit amet consectetur. Arcu est urna lobortis sagittis tincidunt. Aliquam odio eget risus aliquet ac nunc eget ullamcorper. Etiam blandit faucibus nibh faucibus etiam. Tincidunt cras urna magna aliquam fringilla facilisis."
  const title2 = "What is MIDDLEMAN and how does it work?"
  const content2 = "Lorem ipsum dolor sit amet consectetur. Arcu est urna lobortis sagittis tincidunt. Aliquam odio eget risus aliquet ac nunc eget ullamcorper. Etiam blandit faucibus nibh faucibus etiam. Tincidunt cras urna magna aliquam fringilla facilisis."
  const title3 = "What is MIDDLEMAN and how does it work?"
  const content3 = "Lorem ipsum dolor sit amet consectetur. Arcu est urna lobortis sagittis tincidunt. Aliquam odio eget risus aliquet ac nunc eget ullamcorper. Etiam blandit faucibus nibh faucibus etiam. Tincidunt cras urna magna aliquam fringilla facilisis."
  const title4 = "What is MIDDLEMAN and how does it work?"
  const content4 = "Lorem ipsum dolor sit amet consectetur. Arcu est urna lobortis sagittis tincidunt. Aliquam odio eget risus aliquet ac nunc eget ullamcorper. Etiam blandit faucibus nibh faucibus etiam. Tincidunt cras urna magna aliquam fringilla facilisis."


  return (
    <div className='bg-grey100 px-8'>
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between py-20 gap-y-12'>
            <h1 className='text-4xl mt-6'>YOUR QUESTIONS, ANSWERED</h1>
            <div>
                <DropdownQna title = {title1} content = {content1}/>
                <DropdownQna title = {title2} content = {content2}/>
                <DropdownQna title = {title3} content = {content3}/>
                <DropdownQna title = {title4} content = {content4}/>

            </div>
        </div>
    </div>
    
  )
}

export default Heading5