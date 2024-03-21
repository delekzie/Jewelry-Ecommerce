import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
function Product() {
  const location = useLocation();
  const selectedItem = location.state;
  const [click, setClick] = useState(false);
  const [choice, setChoice] = useState("0");
 

   console.log(selectedItem);

   const rate = (value) => {
      setChoice(value);
      console.log(choice);
   }
  return (
    <>
        <div className='mt-[100px]'>
            <h1 className='text-gray-900 text-4xl text-center'>Discover {selectedItem.name}</h1> 
        </div>
        <div className='lg:flex  justify-center gap-40 m-10'>
        <img src={selectedItem.image} alt={selectedItem.name} className='w-[500px] h-[350px] object-cover rounded-sm' />

        <div>
          <div className='flex  items-center'>
          <h1 className='text-md mr-2'>{selectedItem.name.toUpperCase()}</h1>
          <IoIosHeartEmpty />
          </div>
          <p className='text-3xl'>{selectedItem.collection}</p>
          <p className='text-2xl mt-1'>{selectedItem.description}</p>

         <div className="flex text-purple-300 mt-3">
         <FaStar onClick={() => rate('1')} className={`cursor-pointer ${choice == "1" || choice == "2"  || choice =="3"  || choice == "4" || choice == "5"? 'text-red-500' : 'text-purple-300'}`} />
         <FaStar onClick={() => rate('2')} className={`cursor-pointer ${choice == "2" || choice =="3"  || choice == "4" || choice == "5" ? 'text-red-500' : 'text-purple-300'}`}/>
         <FaStar onClick={() => rate('3')}  className={`cursor-pointer ${choice =="3"  || choice == "4" || choice == "5" ? 'text-red-500' : 'text-purple-300'}`}/>
         <FaStar onClick={() => rate('4')} className={`cursor-pointer ${choice == "4" || choice == "5" ? 'text-red-500' : 'text-purple-300'}`} />
         <FaStar onClick={() => rate('5')} className={`cursor-pointer ${ choice == "5" ? 'text-red-500' : 'text-purple-300'}`}/>
         </div>
      
          <p className='text-md font-semibold mt-2'>${selectedItem.price.toLocaleString()}</p>
          <button className='bg-gray-900 text-gray-50 w-full py-3 rounded-sm mt-10 font-semibold text-lg'>ADD TO BAG</button>
          <p className='mt-4 text-sm font-semibold'>ESTIMATED DELIVERY : After 7days of Order</p>
          <p className='text-sm font-semibold mt-1'>Free Two-day Shipping and Return </p>
        </div>

        </div>
    </>
  )
}

export default Product