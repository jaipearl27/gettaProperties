import React from 'react'
import { HiOutlineArrowSmRight } from "react-icons/hi";
const PropertyTypeCard = (props) => {
    const {Count, label, imgUrl} = props;
  return (
    <div className=" relative overflow-hidden rounded-lg group min-h-72 min-w-64">
              <div className="z-10 relative pl-10 xl:pl-5 h-full flex bg-black/30 flex-col justify-around text-white">
                <div>
                  {Count && <div className="text-sm">{Count} Properties</div>}
                  <div className="text-xl font-bold">{label}</div>
                </div>
                <div>
                  <button className=" bg-white text-black flex justify-center items-center p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <HiOutlineArrowSmRight className="w-8 h-8" />
                  </button>
                </div>
              </div>
              <img
                src={imgUrl}
                alt="img"
                className="w-full group-hover:scale-110 scale-105 z-0 transition-transform ease-in-out duration-500 object-cover h-full absolute top-0 left-0"
              />
            </div>
  )
}

export default PropertyTypeCard