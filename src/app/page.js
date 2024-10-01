"use client";
import Carousel from "@/components/LandingPage/Carousel/Carousel";
import PropertyServiceSection from "@/components/LandingPage/Property/PropertyServiceSection";
import PropertyRegionSection from "@/components/LandingPage/Property/PropertyRegionSection";
import Testimonials from "@/components/LandingPage/Property/Testimonials";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import PropertyTypeCard from "@/components/LandingPage/Property/PropertyTypeCard";
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
    imgData: [
      { imgUrl: "/img7.jpeg" },
      { imgUrl: "/img8.jpeg" },
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

const propertyTypes = [
  {
    Count: 23,
    label: "Apartement",
    imgUrl: "https://justhomnextjs.vercel.app/images/house/featured-14.jpg",
  },
  {
    Count: 23,
    label: "Villa",
    imgUrl: "https://justhomnextjs.vercel.app/images/house/featured-13.jpg",
  },
  {
    Count: 23,
    label: "Independent House",
    imgUrl:
      "https://5.imimg.com/data5/SELLER/Default/2021/2/SE/NM/LG/14043461/independent-house-construction-service-1000x1000.jpg",
  },
  {
    Count: 23,
    label: "Row Houses",
    imgUrl:
      "https://t3.ftcdn.net/jpg/06/23/55/30/240_F_623553073_0teW1mDcxjc3nEAE9UXM1Y8Kbg4zUzmT.jpg",
  },
  {
    Count: 23,
    label: "Plots",
    imgUrl:
      "https://media.istockphoto.com/id/1338058166/photo/land-or-landscape-of-green-field-in-aerial-view-and-home-or-house-icon.jpg?s=612x612&w=0&k=20&c=c-VlOIv3Y18NyZ5qLDZbaNNcapXo2U3yctzf8KkltN0=",
  },
  {
    label: "More",
    imgUrl: "https://3.imimg.com/data3/DO/AV/MY-10504611/farm-house-1000x1000.jpg"
  }
];

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
const testimonialData = [
  {
    imgUrl: "https://img.youtube.com/vi/WrkCziYVofo/sddefault.jpg",
    content:
      "It's so difficult to do real estate transactions in Bengaluru given the fact that I am not here in Bengaluru. I am an Indian American settled in Milwaukee. I was looking for a trust worthy real estate agent to sell my property in bengaluru. I found Getta properties online, it's very simple to post properties and get a buyer. I posted my property on www.gettaproperties.com, Deepa called me up and helped me get the khata and property taxes sorted. I was able to find a buyer and sell my property. The entire process was transparent and easy. Thank you",
    name: "Mr. & Mrs. Aggarwal",
    designation: "Chartered Accountants",
  },
  {
    content:
      "It's so difficult to do real estate transactions in Bengaluru given the fact that I am not here in Bengaluru. I am an Indian American settled in Milwaukee. I was looking for a trust worthy real estate agent to sell my property in bengaluru. I found Getta properties online, it's very simple to post properties and get a buyer. I posted my property on www.gettaproperties.com, Deepa called me up and helped me get the khata and property taxes sorted. I was able to find a buyer and sell my property. The entire process was transparent and easy. Thank you",
    name: "Dr. Chandrika",
    designation: "Cardio Vascular Surgeon",
  },
  {
    content:
      "Searches for multiplexes, property comparisons, and the loan estimator. Works great. It provides detailed insights on market trends, financing options, and helps users make informed decisions based on real-time data. Easy to use and highly recommended for investors and home buyers alike.",
    name: "Cameron Williamson",
    designation: "Designer",
  },
  {
    content:
      "Finds single-family homes, apartment buildings, and offers mortgage calculators. Extremely user-friendly. The platform also delivers personalized recommendations and neighborhood insights, ensuring you find the perfect property. Ideal for first-time buyers and seasoned investors looking for comprehensive tools.",
    name: "Manish Sain Gupta",
    designation: "Backend Developer",
  },
];
export default function Home() {
  return (
    <div className="w-full  ">
      <div className=" h-[100dvh] justify-end flex flex-col">
        <div className="z-10 mb-20 relative flex space-y-1 sm:space-y-2 flex-col justify-center text-white p-5 lg:p-16 max-w-[55rem]">
          <h1 className="sm:text-6xl font-bold text-3xl text-balance  leading-tight">
            Find Your Dream Properties Quickly and Easily
          </h1>
          <p className=" text-balance ">
            A Unique Platform with A to Z solutions for all types of Residential
            and Commercial Real Estate Services in
            Buying/Selling/Rental/Leasing.
          </p>
          <p>
            Search your Dream Properties on{" "}
            <span className="font-semibold">Getta Properties</span>.
          </p>
          <p>We have been operating for more than 10 years.</p>
        </div>
        <img
          className="fixed inset-0 z-0 h-full w-full object-cover "
          alt="hero banner"
          src="https://justhomnextjs.vercel.app/_next/static/media/slider-home-10.e675bbe1.jpg"
        />
      </div>
      <div className="bg-white z-10 relative px-5 md:px-10 xl:px-16 w-full overflow-x-hidden pt-32">
        <div className="flex gap-5  pb-40  overflow-x-scroll no-scrollbar">
          {propertyTypes.map((item, index) => (
            <PropertyTypeCard key={index} {...item} />
          ))}
        </div>
        <PropertyServiceSection />

        <div className="text-3xl  font-bold py-16 mt-20  text-black">
          Properties by region
        </div>

        <PropertyRegionSection CitiesData={CitiesData} />

        <div className="text-3xl  font-bold py-12 mt-20  text-black">
          Featured properties
        </div>
        <div className=" w-full pb-14">
          <Carousel propertiesData={properties} />
        </div>

        <div className="text-3xl  font-bold py-12  text-black">
          Newly added properties
        </div>
        <div className=" w-full pb-14">
          <Carousel propertiesData={properties} />
        </div>

        <div className="text-3xl  font-bold py-12  text-black">
          Testimonials
        </div>
        <div className=" w-full pb-14">
          <Testimonials testimonialData={testimonialData} />
        </div>

        <div className="text-3xl text-center font-bold py-12  text-black">
          Our Partners
        </div>
        <div className=" w-full pb-14  flex flex-wrap items-center justify-center gap-12">
          {Partners.map((partner, index) => (
            <img src={partner} alt="Logo" key={index} className="w-36 h-fit" />
          ))}
        </div>
      </div>
    </div>
  );
}
