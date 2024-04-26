import React from 'react'

function Status(props) {
  const p1 = "Wait for buyer confirm"
  const p2 = "Buyer paid"
  const p3 = "Product was confirmed"
  const p4 = "Seller sent the product"

  return (
    <div className='flex gap-6 items-center'>
      <h1 className='text-2xl md:text-4xl'>STATUS :</h1>
      <h1 className='text-xl md:text-3xl bg-green100 rounded-lg p-1'>{props.tag}</h1>
    </div>
  )
}

export default Status