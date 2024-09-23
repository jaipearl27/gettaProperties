"use client";
import Carousel from "@/components/LandingPage/Carousel/Carousel";
import PropertyServiceSection from "@/components/LandingPage/Property/PropertyServiceSection";
import { HiOutlineArrowSmRight } from "react-icons/hi";

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
  }
];
export default function Home() {
  return (
    <>
      <div className="w-full  ">
        <div className=" h-screen">
          <img
            className="fixed inset-0 z-0 h-full w-full object-cover "
            alt="hero banner"
            src="https://justhomnextjs.vercel.app/_next/static/media/slider-home-10.e675bbe1.jpg"
          />
        </div>
        <div className="bg-white z-10 relative w-full pt-20">
          <PropertyServiceSection />

          <div className="text-3xl  font-bold py-8 px-6 xl:px-14  text-black">
            Properties by region
          </div>

          <div className="flex gap-2 flex-wrap justify-center">
            {CitiesData.map((city, index) => (
              <div
                key={index}
                className="h-0 w-[48%] xl:px-14 relative overflow-hidden pb-[60%] md:w-[32%] md:pb-[40%] lg:w-[23%] lg:pb-[28%] group"
              >
                <div className="z-10 relative pt-[15%] pl-10 xl:pl-5 h-full space-y-[70%] text-white">
                  <div>
                    <div>{city.propertyCount} Properties</div>
                    <div className="text-2xl font-bold">{city.name}</div>
                  </div>
                  <div>
                    <button className=" bg-white text-black flex justify-center items-center p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <HiOutlineArrowSmRight className="w-8 h-8"/>
                    </button>
                  </div>
                </div>
                <img
                  src={city.imgUrl}
                  alt="img"
                  className="w-full group-hover:scale-110 z-0 transition-transform ease-in-out duration-500 object-cover h-full absolute top-0 left-0 rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="text-3xl  font-bold py-8 px-6 xl:px-14  text-black">
            Featured properties
          </div>
          <div className=" w-full px-4 xl:px-12 py-14">
            <Carousel propertiesData={properties} />
          </div>

          <div className="text-3xl  font-bold py-8 px-6 xl:px-14  text-black">
            Newly added properties
          </div>
          <div className=" w-full px-4 xl:px-12 py-14">
            <Carousel propertiesData={properties} />
          </div>
        </div>
      </div>
    </>
  );
}
