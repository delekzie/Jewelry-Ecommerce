import React, { useEffect, useState } from 'react'
import { newArrivals } from '../data/new';



function New() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedCollection, setSelectedCollection] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedBtn, setSelectedBtn] = useState("");
    useEffect(() => {
      setFilteredProjects(newArrivals);

    }, [])

    const handleClick = (checkOut) => {
      if (checkOut === "view1") {
          alert("This is for view one");
      } else if (checkOut === "view2") {
          alert("This is for view two");
      } else if (checkOut === "view3") {
          alert("This is for view three");
      } else if (checkOut === "view4") {
          alert("This is for view four");
      } else {
        alert("this is the Fifth thing")
      }
  }

   // the first filter
    const handleCategoryChange = (e) => {
      const category = e.target.value;
      setSelectedCategory(category);
      console.log(selectedCategory);

      let filteredProjects = newArrivals.filter((project) =>
      category ? project.categories.includes(category) : true
      );
      setFilteredProjects(filteredProjects);
    };
    const myCategories = Array.from(
      new Set(newArrivals.flatMap((project) => project.categories.split(", ")))
    );

    // the second filter
   const handleCollectionChange = (e) => {
      const navCollection = e.target.value;
      setSelectedCollection(navCollection);

      let filteredProjects = newArrivals.filter((home) =>
        navCollection ? home.collection.includes(navCollection) : true
        );
      setFilteredProjects(filteredProjects);

    }
    const myCollections = Array.from(
      new Set(newArrivals.flatMap((home) => home.collection.split(", ")))
    );

    // the third filter
    const handleColorChange = (e) => {
     const navColor = e.target.value;
     setSelectedColor(navColor);

     let filteredProjects = newArrivals.filter((trash) =>
    typeof trash.color === "string" && (navColor ? trash.color.includes(navColor) : true)
);
      // let filteredProjects = newArrivals.filter((trash) =>
      // navColor ? trash.color.includes(navColor) : true
      // );
      setFilteredProjects(filteredProjects)
    }

    const myColors = Array.from(
      new Set(newArrivals.flatMap((trash) => {
          if (typeof trash.color === "string") {
              return trash.color.split(", ");
          }
          return []; // Return an empty array if trash.color is not a string
      }))
  );

    //  const myColors = Array.from(
    //   new Set(newArrivals.flatMap((trash) => trash.color.split(", ")))
    //  )



  return (
    <>
  
    <div className="">
      <div className="text-center p-0 mb-[50px] ">
      </div>
      <h1 className='text-3xl text-center py-10'>New Arrivals</h1>
      <section className="flex flex-wrap ">
        <div className='bg-gray-200 w-full p-3 space-x-4 flex'>  
          <select className='bg-transparent outline-none' value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Categories</option>
            {myCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
         
         <select className='bg-transparent outline-none ' value={selectedCollection}  onChange={handleCollectionChange}>
          <option className='' value="">Collection</option>
              {myCollections.map((navCollection, id) => (
              <option key={id} value={navCollection}>
                {navCollection}
              </option>
              ))}
         </select>

          <select  className='bg-transparent outline-none' value={selectedColor} onChange={handleColorChange}>
          <option value="">Color</option>
                {myColors.map((navColor, index) => (
                  <option key={index} value={navColor}>
                    {navColor}
                  </option>
                ))}
         </select>
         <p>{newArrivals.length + " items"}</p>

        </div>
        {/* THE DISPLAY OF THE PRODUCT */}
        <div className='grid grid-cols-2 lg:grid-cols-4 mt-5 mx-auto'>
          {filteredProjects.map((project, index) => (
            <div key={index} className='border border-gray-100 flex flex-col items-center text-center w-full lg:h-[65vh] lg:w-[24vw]'>
                <img className='w-[250px]  px-3' src={project.image} alt={project.id} />
              <h3 className='text-sm  px-3'>{project.collection}</h3>
              <p className='text-lg my-2  px-3'> {project.description}</p>
              <p className='text-lg  px-3'>${project.price}</p>
              <p className='text-sm  px-3'>{project.color}</p>
              {/* <button className='w-full py-3 bg-gray-800 text-gray-100'>ADD TO CART</button> */}
            </div>
          ))}
        </div>
      </section>
    </div>

    <div className='flex items-center justify-center my-10 space-x-2'>
      <p className='border border-gray-200 px-4 py-2 text-gray-500' onClick={()=> handleClick("view1")}>1</p>
      <p className='border border-gray-200 px-4 py-2 text-gray-500' onClick={()=> handleClick("view2")}>2</p>
      <p className='border border-gray-200 px-4 py-2 text-gray-500' onClick={()=> handleClick("view3")}>3</p>
      <p className='border border-gray-200 px-4 py-2 text-gray-500' onClick={()=> handleClick("view4")}>4</p>
      <p className='border border-gray-200 px-4 py-2 text-gray-500' onClick={()=> handleClick("view5")}>5</p>
    </div>
    </>
  )
}

export default New
