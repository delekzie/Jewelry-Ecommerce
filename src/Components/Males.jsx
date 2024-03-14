import React from 'react'

function Males() {
  return (
    <>
        <div className=' mt-[15%] lg:mt-[6%] '>
            <h1 className='text-center text-3xl'>Introducing TWELVE For Men</h1>
        </div>

        <section className='bg-gray-50 py-6 mt-10'>
          <div className='flex flex-row space-x-5 px-5'>
            <p className='text-gray-500'>Filter by: </p>
            <select name="" id="" className="bg-transparent outline-none" >
                <option value="">Category</option>
            </select>
            <select name="" id="" className="bg-transparent outline-none" >
                <option value="">Collection</option>
            </select>
            <select name="" id="" className="bg-transparent outline-none" >
                <option value="">Material</option>
            </select>
            <select name="" id="" className="bg-transparent outline-none" >
                <option value="">Color</option>
            </select>
            <p>0 Items</p>
          </div>
        </section>
        
        <section></section>

        <div className='flex items-center justify-center    my-10 space-x-2'>
            <p className='border border-gray-200 px-4 py-2 text-gray-500'>1</p>
            <p className='border border-gray-200 px-4 py-2 text-gray-500'>2</p>
            <p className='border border-gray-200 px-4 py-2 text-gray-500'>3</p>
        </div>
    </>
  )
}

export default Males