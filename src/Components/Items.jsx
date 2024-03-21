import React from 'react'
import { useLocation } from 'react-router-dom'



function Items() {
    const location = useLocation();

    const pickedItem = location.state;
  return (
    <>
          <div className='mt-[100px]'>
            <h1 className='text-gray-900 text-4xl text-center'>Selected Items For You</h1> 
        </div>

        <div className='lg:flex justify-center gap-40 m-10 '>

            <img src={pickedItem.image} alt="" className='w-[300px]  object-cover rounded-sm'  />

            <div>
            <div className='flex  items-center'>
                <h1 className='text-md mr-2'>{pickedItem.collection.toUpperCase()}</h1>
                
          </div>
                <h1 className='text-3xl'>{pickedItem.name}</h1>
                <h1 className='text-2xl'>{pickedItem.description}</h1>
               
                <h1 className='font-semibold text-md mt-1'>${pickedItem.price.toLocaleString()}</h1>
                <button className='bg-gray-900 text-gray-50 w-full py-3 rounded-sm mt-10 font-semibold text-lg'>ADD TO BAG</button>
                <p className='mt-4 text-sm font-semibold'>ESTIMATED DELIVERY : After 7days of Order</p>
                <p className='text-sm font-semibold mt-1'>Free Two-day Shipping and Return </p>
            </div>
        </div>
    </>
  )
}

export default Items