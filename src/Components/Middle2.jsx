import React from 'react'
import bracelet from '../assets/caviarBracelet.webp'

function Middle2() {
  return (
    <>
       <div className="relative flex py-10">
        {/* Image container */}
        <div className="flex-1">
            <img src={bracelet}alt="Image" className="w-full h-auto" />
        </div>
        {/* Text container */}
        <div className="absolute  top-0 right-3 mt-12 lg:py-40 lg:px-10 text-center">
            <h1 className="text-3xl lg:text-4xl">THE ICON</h1>
            <p className="text-xl lg:mt-3 text-gray-800">The classic Caviar bracelet in a kaleidoscope of colour</p>
            <button className="px-12 py-2 mt-1 lg:mt-4 bg-gray-900 text-white rounded-sm font-semibold">SHOP NOW</button>
        </div>
        </div>
    </>
  )
}

export default Middle2