"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const PropertySlick = (props) => {
  const { imgArray } = props;
  let sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => {
      console.log("after", current);
      setCurrentSlide(current);
    },
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  function handleBottomImageClick(index) {
    sliderRef.slickGoTo(index);
  }

  return (
    <div className="w-full py-6">
      <div className="w-full relative pb-3 ">
        <div className=" absolute top-[40%] w-full z-10 flex justify-between px-9 gap-5 ">
          <button
            className={` py-3 px-7 rounded-full  backdrop-blur-lg ${
              currentSlide === 0 ? "opacity-30 cursor-not-allowed" : ""
            }`}
            onClick={previous}
          >
            <FaChevronLeft className={` text-white `} />
          </button>

          <button
            className={` py-3 px-7 rounded-full  backdrop-blur-lg ${
              currentSlide === imgArray.length - 1 ? "opacity-30 cursor-not-allowed" : ""
            }`}
            onClick={next}
          >
            <FaChevronRight
              className={` text-white`}
            />
          </button>
        </div>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {imgArray.map((item, index) => (
            <img
              className="w-full h-full rounded-lg object-cover relative inset-0"
              alt="img"
              key={index}
              src={item.imgUrl}
            />
          ))}
        </Slider>
      </div>
      <div className="w-full h-[7vw] flex gap-2 md:gap-3 overflow-x-scroll no-scrollbar ">
        {imgArray.map((img, index) => (
          <img
            onClick={() => handleBottomImageClick(index)}
            className="w-[10vw] h-full object-cover rounded-lg"
            src={img.imgUrl}
            alt="img"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertySlick;
