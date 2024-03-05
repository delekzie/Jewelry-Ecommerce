import React from 'react'
import Imageslider from './Imageslider'
import Category from './Category'
import Middle from './Middle'
import Spring from './Spring'
import Middle2 from './Middle2'
import Middle3 from './Middle3'
import Middle4 from './Middle4'
import Blogs from './Blogs'


function Dashboard() {
  return (
    <>
        <div className="background-image ">
          <div className="text-white  text-gray-200 leading-loose" style={{marginLeft:"8%", paddingTop: '9rem'}} >
          <h1 className='text-3xl lg:text-6xl font-semibold'>INTRODUCING</h1>
               <h2 className='text-2xl lg:text-4xl font-semibold mt-3 '>TWELVE'S COLLECTION</h2>
               <p className='text-sm text-xl mt-4 '>Discorver the luster of gold, the sparkle of silver <br /> and the luster of diamond</p>
               <button className='px-8 py-2 mt-4 bg-gray-50 text-black rounded-sm  font-semibold' >SHOP NOW</button>
          </div>
        </div>

        <Imageslider/>
        <Category/>
        <Middle/>
        <Spring/>
       <Middle2/>
       <Middle3/>
       <Middle4/>
       <Blogs/>
    </>

  )
}

export default Dashboard