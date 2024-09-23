"use client";
import { CiHome } from "react-icons/ci";
import Carousel from "@/components/Carousel/Carousel";
import PropertyServiceCard from "@/components/Property/PropertyServiceCard";
export default function Home() {
  return (
    <>
      <div className="w-full  ">
        <div className="w-full h-screen">
          <img 
          className="fixed inset-0 z-0 object-cover"
          alt='hero banner' src="https://justhomnextjs.vercel.app/_next/static/media/slider-home-10.e675bbe1.jpg"/>

        </div>
        <div className="text-3xl  font-bold z-10 relative py-8 px-6 xl:px-14 bg-white text-black">Newly added properties</div>
        <div className="bg-white z-10 relative w-full px-4 xl:px-12 pb-28"><Carousel /></div>

        <div className="w-full bg-white z-10 relative flex ">
          <PropertyServiceCard
            title="Buy Your Property"
            icon={<CiHome className="w-20 relative h-20" />}
            description="Choose from Millions of properties across Bengaluru with just a click of a button."
            buttonLabel="Find your home"
          />

          <PropertyServiceCard
            title="Rent a Property"
            icon={<CiHome e className="w-20 relative h-20" />}
            description="Sell your Property with the leaders in Bengaluru Real Estate Space."
            buttonLabel="Find an ad"
          />
          <PropertyServiceCard
            title="Rent a Property"
            icon={<CiHome className="w-20 relative h-20" />}
            description="Search through our database for a wide range of options."
            buttonLabel="Find a rental"
          />
        </div>
      </div>
    </>
  );
}
