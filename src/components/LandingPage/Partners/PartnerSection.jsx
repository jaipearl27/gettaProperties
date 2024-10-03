import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners = [
    "https://gettaproperties.com/63091d69188a2236003ce924d54204ca.png",
    "https://gettaproperties.com/f1fb0d5a1557b74aae55ab03608cc8d6.png",
    "https://gettaproperties.com/51e4c25fdfab97e00fcd532bf211e2ae.png",
    "https://gettaproperties.com/1da9d9c6bbe4ce5f92bf6724375319e2.png",
    "https://gettaproperties.com/ac22aa3b4642143a6eed6fc448a582d7.png",
    "https://gettaproperties.com/6de772ade0e19a15e83424b3cfc991b0.png",
    "https://gettaproperties.com/b78bc04cc178dd5cbb104968aabc40d3.png",
    "https://gettaproperties.com/f48a28526661479ac37b8b9e5e9e7e56.png",
    "https://gettaproperties.com/7095896b05ef9d5095651287eb73256c.jpg",
  ];

const PartnerSection = () => {
    const settings = {
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
      <div className=" w-full pb-14 ">
      <Slider {...settings}>
      {Partners.map((partner, index) => (
        <div
        className='  relative  h-40 w-80'
        key={index}
        >
            <img src={partner} alt="Logo"  className="w-full object-scale-down absolute scale-75  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      ))}
      </Slider>
    </div>
    )
  }

export default PartnerSection