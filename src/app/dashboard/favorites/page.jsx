"use client";

import { Pills } from "@/components/LandingPage/Carousel/PropertyCard";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaBath, FaBed } from "react-icons/fa";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { RiDeleteBin5Line } from "react-icons/ri";

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
      { imgUrl: "/img4.jpeg" },
      { imgUrl: "/img5.jpeg" },
      { imgUrl: "/img6.jpeg" },
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
    imgData: [{ imgUrl: "/img7.jpeg" }, { imgUrl: "/img8.jpeg" }],
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

const Page = () => {
  const [propertiesData, setPropertiesData] = useState(properties);

  function deleteElementAtIndex(index) {
    const arr = [...propertiesData];
    if (index >= 0 && index < arr.length) {
      arr.splice(index, 1);
    } else {
      console.log("Index out of bounds");
    }
    setPropertiesData(arr);
  }
  return (
    <div className="w-full pt-14">
      <h2 className="text-[26px] font-bold">My Favourites</h2>
      <p className="text-neutral-600  mt-1">We are glad to see you again!</p>

      <div className="w-full mt-10 p-10 bg-white border border-neutral-200 gap-x-8 gap-y-12 rounded-xl grid lg:grid-cols-1 xl:grid-cols-2 ">
        {propertiesData.map((cardData, index) => {
          return (
            <FavouritePropertyCard
              key={cardData.id}
              index={index}
              cardData={cardData}
              deleteElementAtIndex={deleteElementAtIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;

const FavouritePropertyCard = ({ cardData, deleteElementAtIndex, index }) => {
  return (
    <div className="w-full lg:h-56 lg:gap-5 xl:gap-0  relative lg:flex group">
      <Pills
        className="absolute top-6 left-6 z-10"
        pillData={cardData.pillData}
      />

      <div
        onClick={() => deleteElementAtIndex(index)}
        className="absolute top-1 right-3 cursor-pointer z-10 flex justify-center items-center h-12 w-12 rounded-full text-neutral-800 hover:text-black hover:bg-[#e7c873]"
      >
        <RiDeleteBin5Line size={20} />
      </div>

      <div className="lg:min-w-64 lg:max-w-64 overflow-hidden rounded-lg">
        <img
          className="w-full group-hover:animate-zoomInOut rounded-lg sm:h-72 md:h-96 lg:h-full  object-cover"
          src={cardData.imgData[0].imgUrl}
          alt="logo"
        />
      </div>
      {/* Static description */}
      <div className="pl-5 py-4 w-full">
        <p className="text-[#eb664e] text-lg  mb-3 font-semibold">
          {cardData.price}
        </p>
        <p className="text-lg font-bold ">{cardData.name}</p>

        <div className="flex h-fit gap-2 mb-6">
          <div className="flex items-center ">
            <CiLocationOn className="h-5 w-5" />
          </div>
          <div className="text-gray-500 text-sm">
            <div> {cardData.location.address} </div>
            <div>{cardData.location.zipCode}</div>
          </div>
        </div>

        <div className="flex xl:gap-4 lg:gap-8 justify-between lg:justify-start  text-gray-600 text-sm">
          <div className="flex gap-2">
            <div className="flex items-center ">
              <FaBed className="h-5 w-5" />
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
