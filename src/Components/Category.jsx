import React, { useEffect, useState } from "react";
import { dataList } from "../data/data";

function Category() {
  const [isActive, setIsActive] = useState(true);
  const [product, setProduct] = useState([]);
  let firstFiveItems = dataList.slice(0, 5);
  let lastFiveItems = dataList.slice(5, 10);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (click === true) {
      setProduct(lastFiveItems);
    } else {
      setProduct(firstFiveItems);
    }
  }, []);

  const handleClick = (gender) => {
    if (gender == "women") {
      setProduct(firstFiveItems);
      setClick(false);
      setIsActive(true)
    } else {
      setProduct(lastFiveItems);
      setClick(true);
      setIsActive(false)
    }
  };

  // const  handleWomen = () => {
  //     setIsActive(true)
  //     setProduct(firstFiveItems)
  //     setClick(false)
  // }

  // const  handleMen = () => {
  //     setIsActive(false)
  //     setProduct(lastFiveItems)
  //     setClick(true)
  // }

  return (
    <>
      <div className="text-center py-16">
        <h1 className="text-3xl">SHOP BY CATEGORY</h1>
        <div className="flex">
          <div className="my-6 border border-gray-200 mx-auto rounded-3xl ">
            <button
              className={`px-5 py-2  rounded-3xl font-semibold ${
                isActive
                  ? "bg-gray-900 text-gray-200"
                  : "bg-transparent text-gray-900"
              } ${!click ? '' : ''}` }
              
            //   onClick={handleWomen}
            onClick={() => handleClick("women")}
            >
              WOMEN
            </button>
            <button
              className={`px-7 py-2  rounded-3xl font-semibold ${
                isActive
                  ? "bg-transparent text-gray-900 "
                  : "bg-gray-900 text-gray-200"
              } ${click? '' : ''}`}
            //   onClick={handleMen}
            onClick={() => handleClick("men")}
            >
              MEN
            </button>
          </div>
        </div>

        <div className="my-2">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {product.map((item, index) => (
              <div key={index} className="text-center">
                <img src={item.image} alt="" className="mx-auto lg:mx-0 mt-3 lg:mt-0 h-[290px] w-[255px]" />
                <div className="flex justify-center">
                <p className=" text-center mt-3 font-semibold hover:text-gray-900 transition duration-200 border-b-2 border-transparent hover:border-gray-900">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
