import React from 'react'
import { CiGift } from "react-icons/ci";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlCalender } from "react-icons/sl";


function Middle4() {
  return (
    <>
            <h1 className='text-center  my-14 text-3xl'>WE ARE HERE FOR YOU</h1>
        <div className='lg:my-10 mx-5 lg:mx-40 grid lg:grid-cols-4' >
            <div className='flex flex-col items-center text-center flex-grow mt-4 lg:mt-0'>
                <CiGift className='w-10 h-10 text-gray-400'/>  
                <h1 className="text-lg font-medium py-4">EASY GIFTING</h1>
                <p className='text-sm'> find the perfect gift with a personal gift note and packaging</p>
                <p className=" font-semibold py-4 ">DISCOVER</p>
            </div>
            <div className='flex flex-col items-center text-center flex-grow mt-4 lg:mt-0 '>
                <RiSecurePaymentFill className='w-10 h-10 text-gray-400'/>
                <h1 className="text-lg font-medium py-4">BUY NOW, PAY LATER</h1>
                <p className='text-sm'>Monthly payment starting at 0% APR </p>
                <p className=" font-semibold py-4 lg:mt-5">DISCOVER</p>
            </div>
            <div className='flex flex-col items-center text-center flex-grow mt-4 lg:mt-0'>
                <MdOutlineLocalShipping className='w-10 h-10 text-gray-400'/>
                <h1 className="text-lg font-medium py-4">FREE SHIPPING</h1>
                <p className='text-sm'>Enjoying  two-days shipping on all U.S orders over $100</p>
                <p className=" font-semibold py-4">DISCOVER</p>
            </div>
            <div className='flex flex-col items-center text-center flex-grow mt-4 lg:mt-0'>
                <SlCalender className='w-10 h-10 text-gray-400'/>  
                <h1 className="text-lg font-medium py-4">EXTENTED RETURNS</h1>
                <p className='text-sm'>Free returns on items sent back within 90days</p>
                <p className=" font-semibold py-4">DISCOVER</p>
            </div>
        </div>
    </>
  )
}

export default Middle4