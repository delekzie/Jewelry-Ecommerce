import React from 'react'

import bw2 from '../assets/bw2.jpeg'
import bw from '../assets/bw.jpeg'
import human from '../assets/human.jpeg'

function About() {
  return (
    <>
    <div className=' px-5 lg:px-96  '>
    <h1 className='text-center mt-5 text-gray-700'> ABOUT US</h1>
     <div className='mt-10'>
     <p className='italic text-sm text-gray-600 leading-relaxed'>At TWELVE, we understand, live and breathe jewellery. We want to offer the most premium product whilst elevating your confidence and giving you a sense of empowerment. TWELVE is built on three pillars: design, empowerment and quality.</p>
     </div>

     <div>
        <h1 className='font-semibold my-4 text-gray-700'>DESIGN</h1>
        <p className='text-gray-600 text-sm leading-relaxed'>TWELVE offers everlasting classic, yet strong jewelry that stays in style. Timeless, classic and versatile - we believe that jewelry should be worn every day, whilst not compromising on the designs’ longevity and quality. Equally strong by themselves or stacked, our jewelry is here to make an impression and enhance your attire to exude sophistication. Effortlessly stylish and classically refined. </p>
     </div>
     
     <div>
        <h1 className='font-semibold my-4 text-gray-700 '>EMPOWERMENT</h1>
        <p className='text-gray-600 text-sm leading-relaxed'>We believe in elevating your confidence and giving you a sense of empowerment through our jewelry. The feel of wearing Romy gives you the power and inspiration to shape your own destiny and be in control of your life. It’s more than jewelry, it’s a symbol of self-love and self-worth. Our mission is to create a community of empowered women who value themselves and want to step into the highest version of themselves. </p>
        <p className='italic text-gray-500 text-xs mt-4 leading-relaxed'>Show yourself that you value yourself. Show it through jewelry. </p>
     </div>
     <div>
        <h1 className='font-bold my-4 text-gray-700'>QUALITY & CRAFTSMANSHIP</h1>
        <p className='text-gray-600 text-sm leading-relaxed'>Our jewelry pieces are crafted with meticulous attention to detail. Our founder and Master Goldsmith of 28 years designs and creates every single piece, whilst ensuring each piece is made to the highest possible standards. Our focus on craftsmanship ensures our designs are not only beautiful but also made to last. We work with reputable suppliers to source the materials, ensuring they are of the highest quality as well as ethically and sustainably sourced. We commit and promise to only use high-quality materials to offer you pieces that are durable, long-lasting, and beautiful.</p>
     </div>
     <div className='my-5   lg:flex justify-between'>
        <img src={bw} className='w-100 lg:w-72 h-100 lg:h-96' alt="" />
        <img src={bw2} className='w-100 lg:w-64 h-100 lg:h-64 lg:ml-3 my-5 lg:my-16 ' alt="" />
     </div>
     <div>
        <h1 className='font-bold my-4 text-gray-700'>TEAM</h1>
        <p className='text-gray-600 text-sm leading-relaxed'>Founded by Master Goldsmith Sabine Roemer, Marleen joined the team few years later to help elevate the brand's look and feel visually and digitally. They both share the same language and love for elevated branding - something that feels inspiring, sexy and chic all at the same time. The foundation of the dream team - now Sabine runs the whole production and product design, whilst Marleen takes care of how the brand is presented and looks online. Together with the rest of the team they create the perfect inspiring experience where customer not just leaves with high quality jewellery, but also feeling inspired to become the best version of themselves.</p>
     </div>
   
     <div>
        <h1 className='font-bold my-4 text-gray-700'>GET TO KNOW THE MASTERMIND BEHIND YOUR JEWELLERY</h1>
        <p className='text-gray-600 text-sm leading-relaxed'>Our founder, Sabine Roemer, is an award-winning Master Goldsmith who has been an industry expert for over 26 years. Sabine started at a young age and found her true vocation in making jewellery.</p>
        <p className='text-gray-600 text-sm leading-relaxed'>Ever since she was a little girl she was mesmerised on how jewellery carries meanings and memories, making them the perfect heirlooms and ever-lasting gifts.</p>
     </div>

     <div className='my-5 flex justify-center'>
        <img src={human} className='h-100' alt="" />
     </div>

     <p className='text-gray-600 text-sm mt-5 leading-relaxed'>Sabine travelled and lived around the world working with the world’s top jewellery, fashion and couture houses around the world before settling in London. Today, she runs her high jewellery line and ROMY with her wonderful women-only team.</p>
     <p className='italic text-gray-600 text-xs mt-5 leading-relaxed'>We love creating stories and empowering women through our jewellery. The biggest joy is to hear the back from our clients and see how ROMY pieces are now part of their lives and everyday style.</p>

     <div>
        <img src="" alt="" />
     </div>
     <div>
        <h1 className='font-bold my-4 text-gray-700'>PRESS</h1>
        <p className='text-gray-600 text-sm leading-relaxed'>For any press inquiries please contact us via romy@atelierromy.com. Please find our latest Lookbook here & our product sheet here.</p>
     </div>
    </div>
    </>
  )
}

export default About