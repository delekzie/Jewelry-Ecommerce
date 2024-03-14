import React from 'react'
import oldman from '../assets/oldman.webp'


function Men() {
  return (
    <>
         <div className="backG">
          <div className="text-white  text-gray-200 leading-loose" style={{marginLeft:"8%", paddingTop: '9rem'}} >
         <div className="text-center left-13 absolute mt-5">
         <h1 className='text-2xl lg:text-3xl font-semibold'>INTRODUCING</h1>
               <h2 className='text-2xl lg:text-4xl font-semibold mt-3 '>TWELVE'S COLLECTION</h2>
               <p className='text-lg mt-2'>FOR MEN</p>
               <p className='text-sm text-xl mt-4 '>Artisanal Details, Handsome Style. <br /> Newest Arrival</p>
               <button className='px-8 py-2 mt-4 bg-gray-50 text-black rounded-sm  font-semibold' >SHOP NOW</button>
         </div>
          </div>
        </div>

  
      <div className="grid grid-cols-2 my-10 ">
      <div className='text-center flex flex-col items-center justify-center px-20'>
          <p className='text-xl'>"I wanted my design to reflect the indiviuality of a person who wears it  -my goal was to make jewelry with a bit of attitude"</p>
          <p className='mt-10 font-semibold text-lg'> DELEKZIE TWELVE</p>
          <p className='mt-1 text-lg'>FOUNDER AND CREATIVE DIRECTOR</p>
        </div>
        <img src={oldman} className='h-[75vh] w-[75vw]' alt="" />
      </div>
    </>
  )
}

export default Men