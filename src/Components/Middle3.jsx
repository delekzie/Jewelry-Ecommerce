import React from 'react'
import bee from '../assets/bracelet-Jewelry.webp'
import amu from '../assets/amulet-jewelry.webp'


function Middle3() {
  return (
    <>
       <div className='flex flex-col mx-5 lg:px-0 lg:flex-row justify-center gap-10 lg:py-10'>
       <div className=''>
          <img src={bee} className='w-[500px]'  alt="" />
          <div className='text-center mt-5 px-10'>
            <h1 className='text-3xl '>BRACELETS</h1>
            <p className='py-4 text-lg '>Jewelry with a bit of an attitude.</p>
            <button className='px-12 p-2 border-2 border-gray-800'>SHOP NOW</button>
          </div>
        </div>

        <div className=''>
          <img src={amu} className='w-[500px]' alt="" />
          <div className='text-center mt-5'>
            <h1 className='text-3xl'>AMULETS</h1>
            <p className='py-4 text-lg'>Precious metals and unique materials that have meaning.</p>
            <button className='px-12 p-2 border-2 border-gray-800'>SHOP NOW</button>
          </div>
        </div>
       </div>
    </>
  )
}

export default Middle3