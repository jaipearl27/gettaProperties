import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const PropertyRegionSection = ({ CitiesData }) => {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {CitiesData.map((city, index) => (
        <div
          key={index}
          className="h-0 w-[48%] xl:px-14 relative overflow-hidden rounded-lg pb-[60%] md:w-[32%] md:pb-[40%] lg:w-[23%] lg:pb-[28%] group"
        >
          <div className="z-10 relative pt-[15%] pl-10 xl:pl-5 h-full space-y-[70%]  text-white">
            <div>
              <div>{city.propertyCount} Properties</div>
              <div className="text-2xl font-bold">{city.name}</div>
            </div>
            <div>
              <button className=" bg-white text-black flex justify-center items-center p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <HiOutlineArrowSmRight className="w-8 h-8" />
              </button>
            </div>
          </div>
          <img
            src={city.imgUrl}
            alt="img"
            className="w-full group-hover:scale-110 z-0 transition-transform ease-in-out duration-500 object-cover h-full absolute top-0 left-0"
          />
        </div>
      ))}
    </div>
  );
};

export default PropertyRegionSection;
