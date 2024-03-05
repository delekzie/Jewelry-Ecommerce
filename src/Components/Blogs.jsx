    import React from 'react'
    import blog1 from '../assets/blog1.jpg'
    import blog2 from '../assets/blog2.jpg'
    import blog3 from '../assets/blog3.avif'

    function Blogs() {
    return (
        <>
            <h1 className="text-center my-10 text-3xl"> THE TWELVE BLOG</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                
            <div className=''>
                <img src={blog1}  alt="" />
                
                    <h1>TWELVE Shines on the Red Carpet at the Emmy and Critics Choice Award</h1>
                    <p></p>
                </div>
                <div className=''>
                    <img src={blog2}   alt="" />
                    <h1>Angela Basset Wore TWELVE Jeewlry to the 81st Annual Golden Globe Award</h1>
                    <p></p>
                </div>
                <div className=''>
                    <img src={blog3}   alt="" />
                    <h1>A Word From Our Founder And Creative Director</h1>
                    <p></p>
                </div>
            </div>
        
        </>
    )
    }

    export default Blogs