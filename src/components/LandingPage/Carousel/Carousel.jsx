"use client";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import PropertyCard from "@/components/LandingPage/Carousel/PropertyCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react";

const Carousel = ({propertiesData = []}) => {

    
      const [visibleSlides, setVisibleSlides] = useState(4);
    
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 520) {
            setVisibleSlides(1);
          } else if (window.innerWidth < 768) {
            setVisibleSlides(2);
          } else if (window.innerWidth < 1024) {
            setVisibleSlides(4);
          }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      let sliderRef = useRef(null);
    
      const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: visibleSlides,
        slidesToScroll: 1,
        arrows:false,
        afterChange: current => {
          console.log("after",current);
        }
      };
    
      const next = () => {
        sliderRef.slickNext();
      };
      const previous = () => {
        sliderRef.slickPrev();
      };

  return (
    <div className="w-full bg-white ">
    <Slider
      ref={(slider) => {
        sliderRef = slider;
      }}
      {...settings}
    >
      {propertiesData.map((item, index) => (
        <PropertyCard key={index} cardData={item} />
      ))}
    </Slider>

    <div className=" w-full bg-white z-10 flex justify-center px-10 gap-5 ">
      <button
        className=" hover:border transition ease-in-out duration-300 hover:border-neutral-700 px-5 py-2 rounded-2xl"
        onClick={previous}
      >
        <GoChevronLeft className=" text-neutral-700 text-xl" />
      </button>

      <button
        className=" hover:border transition ease-in-out duration-300 hover:border-neutral-700 px-5 py-2 rounded-2xl"
        onClick={next}
      >
        <GoChevronRight className="  text-neutral-700 text-xl" />
      </button>
    </div>
  </div>
  )
}

export default Carousel