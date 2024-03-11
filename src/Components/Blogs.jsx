    import React from 'react'
    import blog1 from '../assets/blog1.jpg'
    import blog2 from '../assets/blog2.jpg'
    import blog3 from '../assets/blog3.avif'




    function Blogs() {

        const allBlogs = [
            {   
                id: 1,
                image: blog1,
                description: 'The TWELVE jewelry Shines on the Red Carpet at the Emmy and Critics Choice Award',
                paragraph:"This weekend at the 75th PrimeLook Awards, the TWELVE jewelry was on display at the red carpet. The collection was designed by the team at PrimeLook to celebrate the beauty and diversity of women in the entertainment industry. The collection features a variety of designs, including bold statement pieces, subtle details, and a range of materials. The TWELVE jewelry is a must-have for any fashion-forward woman.",
             },
            {   
                id: 2,
                image: blog2,
                description: 'Angela Basset wore the TWELVE Jewelry to the 81th Annual Golden Globe Award',
                paragraph:"All eyes were on Angela and the dazzling look as she stood at the stage for the 81st Annual Golden Globe Awards. The TWELVE jewelry was a perfect match for her stunning look, which was highlighted by the sparkling diamonds and jewels. Angela's choice of jewelry showcased her unique style and sense of fashion, making her the star of the evening.",
             },
            {   
                 id:3,
                image: blog3,
                description: 'A Word From Our Founder and Creative Director',
                paragraph:"Innovation is the thread and weaves through all our work. We are constantly looking for new and exciting ways to bring our clients' visions to life. Our team is made up of creative individuals who are passionate about what they do and are always looking for ways to improve our processes and products. We are committed to providing our clients with the highest quality products and services, and we are always looking for ways to exceed their expectations.",
             }

        ]

        // const myBlog = allBlogs.map((blog) => 
        // <Theblog 
        // key={blog.id}
        // image={blog.image}
        // description={blog.description}
        // paragraph={blog.paragraph}

    return (
        <>
        <div>
            <h1 className='text-center my-10 text-3xl'>THE TWELVE BLOG</h1>
          <div>
            {/* {myBlog} */}
            <div className='grid grid-1 lg:grid-cols-3 mt-5 lg:mt-0 mx-5 lg:mx-0 mb-12'>
          {allBlogs.map((blog, id) => (
                <div key={id} className='w-full mb-10 lg:mb-0 lg:w-[28vw] lg:mx-auto shadow-xl overflow-hidden'>
                    <img src={blog.image} className='w-full h-[37vh] object-cover transition-transform duration-300 hover:scale-110' alt="" />
                   <div className="p-5">
                   <h1 className='text-2xl my-5'>{blog.description}</h1>
                    <p className='text-sm'>{blog.paragraph}</p>
                   </div>
                </div>
            ))}
          </div>
          </div>
        </div>
        </>
    )
    }

    export default Blogs