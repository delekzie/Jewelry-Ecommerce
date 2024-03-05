import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='bg-gray-100 text-gray-900 text-xs px-8 py-5 mt-5'>
            <ul  className='my-8'>
                <h1  className='my-5 font-semibold'>Footer Menu</h1>
                <li className="my-4 cursor-pointer">
                    <Link to="/care" className="" >Product Care</Link>
                </li>
                <li className="my-4 cursor-pointer">
                    <Link to="" className="" >Contact Us</Link>
                </li>
                <li className="my-4 cursor-pointer">
                    <Link to="/terms" className="" >Terms & Conditions</Link>
                </li>
                <li className="my-4 cursor-pointer">
                    <Link to="" className="" >Ring Size Guide</Link>
                </li>
                <li className="my-4 cursor-pointer">
                    <Link to="/return" className="" >Return & Exchanges</Link>
                </li>
                <li className="my-4 cursor-pointer">
                    <Link to="/about" className="" >About Us</Link>
                </li>
            </ul>

            <select name="" id="" className='px-3 py-2 outline outline-offset-2 outline-1  bg-gray-100'>
                <option value="">NGN</option>
                <option value="">CAD</option>
                <option value="">USD</option>
                <option value="">YER</option>
                <option value="">NGN</option>
                <option value="">NGN</option>
                <option value="">NGN</option>
                <option value="">NGN</option>
            </select>

            <ul className='hidden lg:flex font-thin mt-10'>   
                <li className=" cursor-pointer">
                    <Link to="/care" className="" >PRODUCT CARE</Link>
                </li>
                <li className="mx-6 cursor-pointer">
                    <Link to="" className="" >CONTACT US</Link>
                </li>
                <li className="mx-6 cursor-pointer">
                    <Link to="/terms" className="" >TERMS & CONDITION</Link>
                </li>
                <li className="mx-6 cursor-pointer">
                    <Link to="" className="" >RING SIZE GUARD</Link>
                </li>
                <li className="mx-6 cursor-pointer">
                    <Link to="" className="" >RETURNS & EXCHANGES</Link>
                </li>
                <li className="mx-6 cursor-pointer">
                    <Link to="/about" className="" >ABOUT US</Link>
                </li>
                
            </ul>           
        </div>
    </>
  )
}

export default Footer