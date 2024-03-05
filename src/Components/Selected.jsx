import React from 'react'


function Selected(probs) {
  return (
    <>
          <div className='text-center text-sm'>
            <img src={probs.image} alt="" className />
            <h2>{probs.name}</h2>
            <p className='mt-2'>{probs.description}</p>
            <p className='mt-2 font-semibold'>${probs.price}</p>
          </div>
    </>
  )
}

export default Selected