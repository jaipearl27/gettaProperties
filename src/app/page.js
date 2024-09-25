"use client";
import Carousel from "@/components/LandingPage/Carousel/Carousel";
import PropertyServiceSection from "@/components/LandingPage/Property/PropertyServiceSection";
import PropertyRegionSection from "@/components/LandingPage/Property/PropertyRegionSection";

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

const CitiesData = [
  {
    name: "Yelahanka",
    imgUrl:
      "https://im.whatshot.in/img/2021/Jan/sankey-tank-rashmiklr-insta-cropped-1611299084.jpg",
    propertyCount: 23,
  },
  {
    name: "Malleshwaram",
    imgUrl:
      "https://im.whatshot.in/img/2021/Jan/sankey-tank-rashmiklr-insta-cropped-1611299084.jpg",
    propertyCount: 55,
  },
  {
    name: "Jayanagar",
    imgUrl:
      "https://im.whatshot.in/img/2021/Jan/sankey-tank-rashmiklr-insta-cropped-1611299084.jpg",
    propertyCount: 28,
  },
  {
    name: "Whitefield",
    imgUrl:
      "https://im.whatshot.in/img/2021/Jan/sankey-tank-rashmiklr-insta-cropped-1611299084.jpg",
    propertyCount: 13,
  },
];
export default function Home() {
  return (
    <>
      <div className="w-full  ">
        <div className=" h-[100dvh] justify-end flex flex-col">
          <div className="z-10 mb-20 relative flex space-y-1 sm:space-y-2 flex-col justify-center text-white p-5 lg:p-16 max-w-[55rem]">
            <h1 className="sm:text-6xl font-bold text-3xl text-balance  leading-tight">
              Find Your Dream Properties Quickly and Easily
            </h1>
            <p className=" text-balance ">
              A Unique Platform with A to Z solutions for all types of
              Residential and Commercial Real Estate Services in
              Buying/Selling/Rental/Leasing.
            </p>
            <p>Search your Dream Properties on Getta Properties.</p>
            <p>We have been operating for more than 10 years.</p>
          </div>
          <img
            className="fixed inset-0 z-0 h-full w-full object-cover "
            alt="hero banner"
            src="https://justhomnextjs.vercel.app/_next/static/media/slider-home-10.e675bbe1.jpg"
          />
        </div>
        <div className="bg-white z-10 relative w-full pt-32">
          <PropertyServiceSection />

          <div className="text-3xl  font-bold py-12 mt-20 px-6 xl:px-14  text-black">
            Properties by region
          </div>

          <PropertyRegionSection CitiesData={CitiesData} />

          <div className="text-3xl  font-bold py-12 mt-20 px-6 xl:px-14  text-black">
            Featured properties
          </div>
          <div className=" w-full px-4 xl:px-12 pb-14">
            <Carousel propertiesData={properties} />
          </div>

          <div className="text-3xl  font-bold py-12 px-6 xl:px-14  text-black">
            Newly added properties
          </div>
          <div className=" w-full px-4 xl:px-12 pb-14">
            <Carousel propertiesData={properties} />
          </div>
        </div>
      </div>
    </>
  );
}
