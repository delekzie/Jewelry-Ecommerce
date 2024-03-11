import React, { useEffect, useState } from 'react'
import { giftList } from '../data/gift'
import spring5 from '../assets/spring-video.mp4'

function Spring() {
    const [gifts, setGifts] = useState([])


    useEffect(() => {
    setGifts(giftList)
    }, [])
    

  return (
    <>
        <div className='py-10'>
        <h1 className='text-center py-7 text-3xl'>SPRING GIFT GUIDE</h1>

        <div className='lg:flex justify-center mx-auto '>
            <div className="lg:w-[550px]  mx-5  lg:mr-6">
            <video autoPlay> <source src={spring5}  type="video/mp4" /> </video>
            <div className="flex justify-center">
            <p className=" text-center mt-[-40px] text-sm lg:text-lg font-semibold text-white  border-b-2 border-white-600">Spring Gift Guide</p>
            </div>
            </div>

          <div className='grid grid-cols-2 gap-5 mt-5 lg:mt-0 mx-5 lg:mx-0'>
          {gifts.map((gift, index) => (
                <div key={index}>
                    <img src={gift.image} alt="" className="mx-auto lg:mx-0 mt-3 lg:mt-0 h-[292px] lg:w-[260px]"/>
                    <div className='flex justify-center' >
                        <p className=" text-center text-sm lg:text-lg  mt-[-30px]">{gift.name} </p></div>
                </div>
            ))}
          </div>

        </div>

        </div>
    </>
  )
}

export default Spring