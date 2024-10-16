"use client"

import React from 'react'
import Carousel from "@/components/LandingPage/Carousel/Carousel";
import PropertyCard from '@/components/LandingPage/Carousel/PropertyCard';


function Buy() {
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
      
      return (
        <div>
     
     <div className="text-3xl  font-bold py-12 mt-20  text-black mx-20">
           Properties for Sale
            </div>
            <div className=" grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 px-20 ">
        {properties.map((item, index) => (
          <PropertyCard key={index} cardData={item} />
        ))}
</div>
    
        </div>
      )
    }
    

export default Buy
