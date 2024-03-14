import React from 'react'
import Imageslider from './Imageslider'
import category6 from '../assets/category6.webp'
import category7 from '../assets/category7.jpg'
import category8 from '../assets/category8.jpg'
import category9 from '../assets/category9.jpg'
import menA from '../assets/menA.jpg'
import menB from '../assets/menB.jpg'
import menC from '../assets/menC.jpg'
import menD from '../assets/menD.jpg'
import skull1 from '../assets/skull1.avif'
import skull2 from '../assets/skull2.avif'
import skull3 from '../assets/skull3.jpg'
import skull4 from '../assets/skull4.avif'
import skull5 from '../assets/skull5.jpg'
import skull6 from '../assets/skull6.webp'
import skull7 from '../assets/skull7.webp'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom'





function Men() {

  // first array
  const myImage = [
    {
      id: 1,
      image: category6,
      name: "Bracelets"
    },
    {
      id: 2,
      image: category7,
      name: "Rings"
    },
    {
      id: 3,
      image: category8,
      name: "Chains"
    },
    {
      id: 4,
      image: category9,
      name: "Earrings"
    },
  ]

  // second array

  const menImage = [
    {
      id: 1,
      image: menA,
      name: "Amulets",
      text: "Precious metals and Unique materials that have meaning"
    },
    {
      id: 2,
      image: menB,
      name: "Pearl",
      text: "A Modern classic for him"
    },
    {
      id: 3,
      image: menC,
      name: "Color",
      text: "Jewely with a bit of attitude"
    },
    {
      id: 4,
      image: menD,
      name:"Necklace",
      text: "Symbolic and beautiful with a side of Caviar"
    }
  ]

  // responsiveness to the images
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024},
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const menList = [
        {
          id:1,
          image: skull1,
          name: "Anthem Tigereys Skull Bracelets",
          price: 200
        },
        {
          id:2,
          image: skull2,
          name: "Anthem Malachite Skull Bracelets",
          price: 200
        },
        {
          id:3,
          image:skull3 ,
          name: "Anthem Labradorite Skull Bracelets",
          price: 200
        },
        {
          id:4,
          image: skull4,
          name: "Anthem Obsidian Skull Bracelets",
          price: 200
        },
        {
          id:5,
          image: skull5 ,
          name: "Anthem Eagle Eye Skull Bracelets",
          price: 200
        },
        {
          id:6,
          image: skull6,
          name: "Anthem Caviar Beaded Skull Amulets Necklace",
          price: 575
        },
        {
          id:7,
          image: skull7,
          name: "Anthem Caviar Beaded Skull Amulets Drop Earrings",
          price: 300
        },
  ]
  return (
    <>
         <div className="backG">
          <div className="text-white  text-gray-200 leading-loose" style={{marginLeft:"8%", paddingTop: '9rem'}} >
         <div className="lg:text-center lg:left-13 absolute mt-5 ">
         <h1 className='text-2xl lg:text-3xl font-semibold'>INTRODUCING</h1>
               <h2 className='text-2xl lg:text-4xl font-semibold mt-3 '>TWELVE'S COLLECTION</h2>
               <p className='text-lg mt-2'>FOR MEN</p>
               <p className='text-sm text-xl mt-4 '>Artisanal Details, Handsome Style. <br /> Newest Arrival</p>
               <Link  to="/menjewelry">
               <button className='px-8 py-2 mt-4 bg-gray-50 text-black rounded-sm  font-semibold' >SHOP NOW</button>
               </Link>
         </div>
          </div>
        </div>

        <div className='mt-[5%]'>
          <h1 className='text-3xl text-center'>JUST FOR YOU</h1>
          <div className='mx-5 lg:mx-40' >
            <Carousel responsive={responsive}>
              {menList.map((items, id)=> (
                <div key={id} className='lg:w-[260px] text-center flex flex-col items-center justify-center'>
                    <img src={items.image} className='lg:w-[210px] lg:h-[250px]' alt="" />
                    <p className='text-md'>{items.name}</p>
                    <p className='font-bold mt-2 text-sm'>${items.price}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
   
        <div className='hotman mt-[10%]'>
          <div className='lg:text-center absolute w-[464px] py-32 px-16 ' >
              <p className='text-xl'>"I wanted my design to reflects the individuality of a person who wears it -my goal was to make jewelry with a bit of attitude"</p>
              <p className='mt-10 font-semibold text-lg'> DELEKZIE TWELVE</p>
              <p className='mt-1 text-xl'>FOUNDER AND CREATIVE DIRECTOR</p>
          </div>
        </div>

      <div>
        <h1 className='text-center mb-8 mt-[-6%] text-3xl'>SHOP BY CATEGORY</h1>

        <div  className='grid grid-cols-1 lg:grid-cols-4'>
          {myImage.map((menstuff, id)=>(
            <div key={id} className='flex flex-col justify-center items-center'>
              <img src={menstuff.image} alt="" />
              <p className='my-3 text-lg'>{menstuff.name}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div  className='hottest mt-10 mx-5 lg:mx-0'>
            
          <div className='lg:text-center lg:right-4 absolute lg:w-[550px] py-36 px-16 ' >
              <p className='text-3xl'>SMART CAVIAR FOR HIM</p>
              <p className='my-2 lg:text-lg'>On time and ever Stylish</p>
              <p className='lg:text-lg'>Discover the fine jewelry bracelets for the Apple Watch</p>
              <button className='px-9 py-2 bg-gray-900 text-white mt-3'>SHOP NOW</button>
          </div>
        </div>

        <div>
        <h1 className='text-center mb-14 lg:mt-[-6%] text-3xl'>THE MEN'S EDIT</h1>

        <div  className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-5  lg:mx-32'>
          {menImage.map((weep, id)=>(
            <div key={id} className='flex flex-col justify-center items-center text-center'>
              <img src={weep.image} alt="" className='w-full lg:w-[38vw] lg:h-[55vh] object-cover' />
              <p className='text-3xl mt-2'>{weep.name}</p>
              <p className=' text-lg  mt-2'>{weep.text}</p>
              <button className='px-9 py-2 border border-gray-600 mt-3'>SHOP NOW</button>
            </div>
          ))}
        </div>
      </div>
      
    </>
  )
}

export default Men