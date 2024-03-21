import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import selected1 from '../assets/selected1.webp'
import selected2 from '../assets/selected2.avif'
import selected3 from '../assets/selected3.avif'
import selected4 from '../assets/selected4.webp'
import selected5 from '../assets/selected5.webp'
import selected6 from '../assets/selected6.avif'
import selected8 from '../assets/selected8.webp'
import selected9 from '../assets/selected9.webp'
import { Link } from 'react-router-dom';




function Imageslider() {
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
      
      const productList = [
            {
                id:1,
                image:selected1,
                name: "Signature Caviar Silver Station Caviar",
                description: "Bracelet | 6mm",
                price: 1300,
                category: "Bracelets",
                collection:"SMART CAVIAR"
            },
            {
                id: 2,
                image: selected2,
                name: "Pink Caviar Ceramic Beaded Bracelet",
                description: "Bracelet | 9mm",
                price: 1625,
                category: "Bracelets",
                collection:"PINK CAVIAR"

            },
            {
                id: 3,
                image: selected3,
                name: "Smart Caviar Stainless Steel Watch",
                description: "Bracelet | 38-45mm",
                price: 2650,
                category: "Bracelets",
                collection:"SMART CAVIAR"
            },
            {
                id: 4,
                image:selected4,
                name: "Embrace X Beaded Ring",
                price: 1200,
                category: "Bracelets",
                collection:"EMBRACE"
            },
            {
                id: 5,
                image: selected5,
                name: "Signature Caviar Silver caviar Bracelet",
                description: "Bracelet | 9mm",
                price: 1425,
                category: "Bracelets",
                collection:"SMART CAVIAR"
            },
            {
                id: 6,
                image: selected6,
                name: "Caviar Icon Pink Ceramic Beaded Bracelet",
                price: 1285,
                category: "Bracelets",
                collection:"PINK CAVIAR"
            },
            {
                id: 7,
                image: selected8,
                name: "Anthem Silver Caviar Beaded Bracelet",
                price: 1285,
                category: "Bracelets",
                collection:"ANTHEM"
            },
            {
                id: 8,
                image:  selected9,
                name: "Caviar Icon Silver Caviar Beaded Bracelet",
                price: 1185,
                category: "Bracelets",
                collection:"SIGNATURE CAVIAR"
            }
      ]
 

  return (

   
    <>
    <div className="text-center mt-10 ">
        <h1 className='p-3 text-3xl'>SELECTED FOR YOU</h1>
       <div className="px-14">
       <Carousel responsive={responsive}>
           {
            productList.map((select, id)=>(
              <Link to= {`/shop-selected/${select.name}`} key={id} state={select}>
              <div className='text-center text-sm'>
                      <img src={select.image} alt="" className />
                      <h2>{select.name}</h2>
                      <p className='mt-2'>{select.description}</p>
                      <p className='mt-2 font-semibold'>${select.price}</p>
                    </div>
              </Link>
            ))
           }
        </Carousel>
       </div>
        
      </div>
    </>
  )
}

export default Imageslider