import React from 'react'
import watch from '../assets/Home-caviar.webp'

function Middle() {
  return (
    <>

        <div className="relative flex">
        {/* Image container */}
        <div className="flex-1">
            <img src={watch}alt="Image" className="w-full h-auto" />
        </div>
        {/* Text container */}
        <div className="absolute top-0 right-3 lg:py-40 lg:px-14 text-center">
            <h1 className="text-3xl lg:text-4xl font-semibold">SMART CAVIAR</h1>
            <p className="lg:text-xl lg:mt-1 font-semibold italic">INFINITE</p>
            <p className="text-lg lg:mt-5 text-gray-800">The fine jewelry bracelet for the Apple Watch  has a brand new look</p>
            <button className="px-1 py-2 mt-1 lg:mt-4 bg-gray-50 text-black rounded-sm font-semibold">SHOP NOW</button>
        </div>
        </div>
    </>
  )
}

export default Middle