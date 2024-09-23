"use client";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import PropertyCard from "@/components/Carousel/PropertyCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react";

const Carousel = () => {
    const properties = [
        {
          id: 1,
          name: "Archer House",
          price: "$815,000",
          location: {
            address: "148-37 88th Ave, Jamaica, NY",
            zipCode: "11435",
          },
          beds: 4,
          baths: 3,
          sqft: 2660,
          imgData: [
            { imgUrl: "/img1.jpeg" },
            { imgUrl: "/img2.jpeg" },
            { imgUrl: "/img3.jpeg" },
          ],
          pillData: [
            { label: "Active", bgColor: "bg-[#1f4b43] text-white" },
            { label: "Verified", bgColor: "bg-[#e7c873]" },
          ],
        },
        {
          id: 2,
          name: "Sunset Villa",
          price: "$1,200,000",
          location: {
            address: "250 Ocean Dr, Miami, FL",
            zipCode: "33101",
          },
          beds: 5,
          baths: 4,
          sqft: 3500,
          imgData: [
            { imgUrl: "/img1.jpeg" },
            { imgUrl: "/img2.jpeg" },
            { imgUrl: "/img3.jpeg" },
          ],
          pillData: [
            { label: "Active", bgColor: "bg-[#1f4b43] text-white" },
            { label: "Verified", bgColor: "bg-[#e7c873]" },
          ],
        },
        {
          id: 3,
          name: "Maple Residency",
          price: "$970,000",
          location: {
            address: "13 Maple St, Boston, MA",
            zipCode: "02108",
          },
          beds: 4,
          baths: 3,
          sqft: 2800,
          imgData: [
            { imgUrl: "/img1.jpeg" },
            { imgUrl: "/img2.jpeg" },
            { imgUrl: "/img3.jpeg" },
          ],
          pillData: [
            { label: "Active", bgColor: "bg-[#1f4b43] text-white" },
            { label: "Verified", bgColor: "bg-[#e7c873]" },
          ],
        },
        {
          id: 4,
          name: "Mountain Retreat",
          price: "$1,500,000",
          location: {
            address: "89 Peak Rd, Denver, CO",
            zipCode: "80203",
          },
          beds: 6,
          baths: 5,
          sqft: 4500,
          imgData: [
            { imgUrl: "/img1.jpeg" },
            { imgUrl: "/img2.jpeg" },
            { imgUrl: "/img3.jpeg" },
          ],
          pillData: [
            { label: "Active", bgColor: "bg-[#1f4b43] text-white" },
            { label: "Verified", bgColor: "bg-[#e7c873]" },
          ],
        },
        {
          id: 5,
          name: "Lakeside Cottage",
          price: "$980,000",
          location: {
            address: "77 Shore Rd, Austin, TX",
            zipCode: "73301",
          },
          beds: 3,
          baths: 2,
          sqft: 2200,
          imgData: [
            { imgUrl: "/img1.jpeg" },
            { imgUrl: "/img2.jpeg" },
            { imgUrl: "/img3.jpeg" },
          ],
          pillData: [
            { label: "Active", bgColor: "bg-[#1f4b43] text-white" },
            { label: "Verified", bgColor: "bg-[#e7c873]" },
          ],
        },
      ];
    
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
        arrows:false
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
      {properties.map((item, index) => (
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