"use client";

import { FaBed, FaBath, FaChevronRight, FaChevronLeft   } from "react-icons/fa";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertyCard = ({cardData}) => {
  let sliderRef = useRef(null);
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="w-full  relative">
      <Pills
        className="absolute top-6 left-6 z-10"
        pillData={cardData.pillData}
      />

      <div className=" absolute top-24 w-full z-10 flex justify-between px-10 gap-5 ">
        <button className="button" onClick={previous}>
            <FaChevronLeft className=" text-white" />
        </button>

        <button className="button" onClick={next}>
            <FaChevronRight className=" text-white" />
        </button>
      </div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {cardData.imgData.map((item, index) => (
          <div key={index} className="p-2">
            <div className="border rounded-lg shadow-lg overflow-hidden relative bg-black">
              {/* Image block */}
              <img className="w-full sm:h-32 lg:h-44 md:h-36 xl:h-48 object-cover" alt="img" src={item.imgUrl} />
            </div>
          </div>
        ))}
      </Slider>
      {/* Static description */}
      <div className="px-7 py-4">
        <div className="flex justify-between mb-2 ">
          <p className="text-lg font-bold ">{cardData.name}</p>
          <p className="text-[#eb664e] text-lg  font-semibold">{cardData.price}</p>
        </div>
        <div className="flex h-fit gap-2 mb-6">
          <div className="flex items-center ">
          <CiLocationOn  className="h-5 w-5"/>
          </div>
          <div className="text-gray-500 text-sm">
            <div> {cardData.location.address} </div>
            <div>{cardData.location.zipCode}</div>
          </div>
        </div>

        <div className="flex justify-between text-gray-600 text-sm">
          <div className="flex gap-2">
            <div className="flex items-center ">
            <FaBed className="h-5 w-5"/>
            </div>
            <div>
              <div>{cardData.beds}</div>
              <div>Beds</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center">
            <FaBath className="h-5 w-5" />
            </div>

            <div>
              <div>{cardData.baths}</div>
              <div>Baths</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center">
            <HiOutlineSquare2Stack className="h-6 w-6" />
            </div>

            <div>
              <div>{cardData.sqft}</div>
              <div>Sqft</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

const Pills = (props) => {
  const { pillData, className = "" } = props;

  return (
    <div className={`flex justify-center gap-2 ${className}`}>
      {pillData.map((item, index) => (
        <span
          key={index}
          className={`text-xs font-semibold rounded-full px-3 py-1 ${item.bgColor}`}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
};
