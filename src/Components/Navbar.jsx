import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { SlHandbag } from "react-icons/sl";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow-lg fixed top-0 w-full z-10 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-14 ">
          <div className="flex items-center">
            <div className="flex">
            <h1 className='text-2xl font-semibold leading-relaxed'>TWELVE</h1>
            </div>
            <div className="hidden md:block ml-20">
              <ul className="ml-8 flex items-center space-x-8 text-sm">
                   <li className="">
                    <Link to="/new"  className=" hover:text-gray-900 transition duration-200 border-b-2 border-transparent hover:border-gray-900" >NEW</Link>
                   </li>
                   <li className="">
                    <Link to="/women"  className=" hover:text-gray-900 transition duration-200 border-b-2 border-transparent hover:border-gray-900">WOMEN'S</Link>
                   </li>
                   <li className="">
                    <Link to="/men"  className="hover:text-gray-900 transition duration-200 border-b-2 border-transparent hover:border-gray-900" >MEN'S</Link>
                   </li>
                   <li className="">
                    <Link to=""  className="hover:text-gray-900 transition duration-200 border-b-2 border-transparent hover:border-gray-900" >BEST SELLER</Link>
                   </li>
                   <li className="">
                    <Link to="/"  className="hover:text-gray-900 transition duration-200 border-b-2 border-transparent hover:border-gray-900" >SMART CAVIAR</Link>
                   </li>
                   <li className="">
                    <Link to="/"  className="hover:text-gray-900 transition duration-200 border-b-2 border-transparent hover:border-gray-900" >EXCLUSIVE</Link>
                   </li>
                   <li className="">
                    <Link to="/"  className="hover:text-gray-900 transition duration-200 border-b-2 border-transparent hover:border-gray-900" >COLLECTIONS</Link>
                   </li>
                   <li className="">
                    <Link to="/"  className="hover:text-gray-900 transition duration-200 border-b-2 border-transparent hover:border-gray-900" href="">GIFTS</Link>
                   </li>
                   <li className="">
                    <Link to=""  className="hover:text-gray-900 transition duration-200 border-b-2 border-transparent hover:border-gray-900" href="">JUST ARRIVED</Link>
                   </li>
                   <div>
                   <p className="ml-4 rounded-md bg-gray-800 hover:brightness-75 px-4 py-2">
                    <Link to="/signuser"  className="text-gray-50 font-semibold" href="">Get Started </Link>
                   </p>
                   </div>
                   <p className='text-xl'><SlHandbag /></p>
              </ul>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
           <li className="mx-4 py-2 lg:py-0">
          <Link to="/new"  className="" href="">NEW</Link>
        </li>
        <li className="mx-4 py-2 lg:py-0">
          <Link to="/women"  className="" href="">WOMEN'S</Link>
         </li>
        <li className="mx-4 py-2 lg:py-0">
          <Link to="/men"  className="" href="">MEN'S</Link>
        </li>
        <li className="mx-4 py-2 lg:py-0">
          <Link to="/"  className="" href="">BEST SELLER</Link>
        </li>
        <li className="mx-4 py-2 lg:py-0">
          <Link to="/"  className="" href="">SMART CAIVAR</Link>
        </li>
        <li className="mx-4 py-2 lg:py-0">
          <Link to="/"  className="" href="">EXCLUSIVE</Link>
        </li>
        <li className="mx-4 py-2 lg:py-0">
          <Link to="/"  className="" href="">COLLECTIONS</Link>
        </li>
        <li className="mx-4 py-2 lg:py-0">
          <Link to="/"  className="" href="">GIFTS</Link>
       </li>
        <li className="mx-4 py-2 lg:py-0">
          <Link to=""  className="" href="">JUST ARRIVED</Link>
        </li>
        <li className="mx-4 rounded-lg bg-gray-900 hover:brightness-50 px-2 py-4 text-center text-white w-[30%] ">
          <Link to="/signuser"  className="" href="">GET STARTED</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
