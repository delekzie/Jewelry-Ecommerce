import React, { useEffect, useState } from 'react'
import { womenPrdts } from '../data/women'

womenPrdts


function Women() {

  // show all the products in the women category
  useEffect(() => {
    setFilteredProjects(womenPrdts);
  }, [])

// declare a usestate
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedCollection, setSelectedCollection] = useState();
  const [filteredProjects, setFilteredProjects] = useState([]);

// function for filtering through categories
    const handleCategoryChange = (e) => {
        const navCategory = e.target.value
        setSelectedCategory(navCategory);
        console.log(selectedCategory);

        let filteredProjects = womenPrdts.filter((category) =>
        navCategory ? category.categories.includes(navCategory) : true
        );

        setFilteredProjects(filteredProjects);
    }
    const myCategories = Array.from(
      new Set(womenPrdts.flatMap((woom) => woom.categories.split(", ")))
    )

    //function filtering through collections
    const handleCollectionChange = (e) => {
      const navCollection = e.target.value
      setSelectedCollection(navCollection);
      console.log(selectedCollection);

      let filteredProjects = womenPrdts.filter((collect) =>
      navCollection ? collect.collection.includes(navCollection) : true
      );

      setFilteredProjects(filteredProjects);

    }
    const myCollections = Array.from(
      new Set(womenPrdts.flatMap((muum) => muum.collection.split(", ")))
    )
  return (
    <>
          <div className=' mt-[15%] lg:mt-[6%] '>
            <h1 className='text-4xl py-4 text-center'>JEWERLY</h1>
          </div>
        <section className='mt-7 w-full'>
              <div className='p-6 bg-gray-50 flex space-x-5'>
              <p className='text-gray-500'>Filter by: </p>
              <select className="bg-transparent outline-none" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Category</option>
                {myCategories.map((navCategory, index) => (
                  <option key={index} value={navCategory}>
                     {navCategory.toLowerCase()}
                  </option>
                ))}
              </select>
              <select name="" id="" className="bg-transparent outline-none" >
                <option value="">Material</option>
            </select>
                   
                   <select name="" className="bg-transparent outline-none" value={selectedCollection} onChange={handleCollectionChange}>
                    <option value="">Collection</option>
                    {myCollections.map((navCollection, index) =>(
                      <option value={navCollection} key={index}>
                        {navCollection.toLowerCase()}
                      </option>
                    ))}
                   </select>
              <p>{womenPrdts.length + " items"}</p>
              </div>
            </section>

            {/* DISPLAY PRODUCT */}

            <section className=''>
            <div className='grid grid-cols-2 lg:grid-cols-4 mt-1 mx-3 '>
          {filteredProjects.map((project, index) => (
            <div key={index} className='border border-gray-100 flex flex-col items-center text-center w-full lg:h-[65vh] lg:w-[24vw]'>
              <p className='py-2 px-3 bg-gray-50 rounded-sm m-2 font-semibold text-xs'>{project.repo}</p>
                <img className='w-[230px]  px-3' src={project.image} alt={project.id} />
              <h3 className='text-sm  px-3 mt-2'>{project.collection}</h3>
              <p className='text-lg my-2  px-3'> {project.description}</p>
              <p className='text-lg  px-3'>${project.price}</p>
              <p className='text-sm  px-3'>{project.rating}</p>
              {/* <button className='w-full py-3 bg-gray-800 text-gray-100'>ADD TO CART</button> */}
            </div>
          ))}
        </div>
      </section>

      <div className='flex items-center justify-center my-10 space-x-2'>
              <p className='border border-gray-200 px-4 py-2 text-gray-500'>1</p>
              <p className='border border-gray-200 px-4 py-2 text-gray-500'>2</p>
              <p className='border border-gray-200 px-4 py-2 text-gray-500'>3</p>
            </div>
    </>
  )
}

export default Women