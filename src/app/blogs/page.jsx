"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsDash } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "@/components/Blogs/BlogCard";

const blogs = [
  {
    imgUrl: "https://justhomnextjs.vercel.app/images/blog/blog-list-1.jpg",
    type: "Tips & Tricks",
    date: "April 24, 2024",
    title: "Chip and Joanna Gaines’ Latest Fixer-Upper Is Open for Visitors",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.",
  },
  {
    imgUrl: "https://justhomnextjs.vercel.app/images/blog/blog-list-2.jpg",
    type: "Tips & Tricks",
    date: "April 24, 2024",
    title: "Homebuyers Will Be So Thankful To Hear These",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.",
  },
  {
    imgUrl: "https://justhomnextjs.vercel.app/images/blog/blog-list-3.jpg",
    type: "Tips & Tricks",
    date: "April 24, 2024",
    title: "That’s Life! Frank Sinatra’s Former Los Angeles-Area",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.",
  },
  {
    imgUrl: "https://justhomnextjs.vercel.app/images/blog/blog-list-4.jpg",
    type: "Tips & Tricks",
    date: "April 24, 2024",
    title: "Affordability crisis buyers and renters turn to tiny living",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.",
  },
];

const recentBlogs = [
  {
    imgUrl: "https://justhomnextjs.vercel.app/images/blog/blog-list-1.jpg",
    date: "May 24, 2024",
    title: "Manhattan Apartments",
  },
  {
    imgUrl: "https://justhomnextjs.vercel.app/images/blog/blog-list-2.jpg",
    date: "August 29, 2024",
    title: "Modern Villa",
  },
  {
    imgUrl: "https://justhomnextjs.vercel.app/images/blog/blog-list-3.jpg",
    date: "June 28, 2024",
    title: "Best Luxury Homes",
  },
];
const page = () => {


  return (
    <div className="py-32 min-h-screen">
      <h1 className="text-center text-4xl font-bold py-24">Blog Pages</h1>

      <div className="lg:px-10 xl:px-36 flex flex-col lg:flex-row">
        <div className="space-y-8 px-5 lg:w-[70%] mb-10">
          {blogs.map((blog, index) => (
            <div key={index}>
              <BlogCard blog={blog} index={index} />
            </div>
          ))}

          {/* <Pagination /> */}
        </div>

        <RightPanel />
      </div>
    </div>
  );
};
export default page;

const RightPanel = () => {
  return (
    <div className="w-full lg:w-[30%] space-y-8 p-4">
      <div className="p-8 rounded-lg bg-neutral-100">
        <div className="flex items-center gap-3 bg-white p-4 rounded-lg border">
          <input
            type="text"
            placeholder="Search"
            className="outline-none ring-0  border-none w-full"
          />
          <CiSearch className="text-3xl" />
        </div>
      </div>

      <div className="px-8 py-6 rounded-lg bg-neutral-100">
        <h3 className="text-[22px] font-semibold mb-3">Categories</h3>

        {["Apartement", "Villa", "Office", "Single Family", "Shop"].map(
          (item, index) => (
            <div
              key={index}
              className="flex gap-3 items-center mb-4 transition-transform ease-in-out duration-300 hover:text-[#eb664e] hover:scale-110"
            >
              <BsDash size={25} />

              <p>{item}</p>
            </div>
          )
        )}
      </div>

      <div className="px-8 py-6 rounded-lg bg-neutral-100 space-y-8">
        <h3 className="text-[22px] font-semibold">Recent Blogs</h3>

        {recentBlogs.map((item, index) => (
          <div className="h-24 w-full flex items-center gap-6" key={index}>
            <img
              src={item.imgUrl}
              alt="img"
              className="h-full w-24 object-cover rounded-lg"
            />
            <div className="flex flex-col w-full overflow-hidden">
              <p className="text-lg w-full truncate ">{item.title}</p>
              <p className="text-neutral-500 whitespace-nowrap">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-8 py-6 rounded-lg bg-neutral-100 space-y-8">
        <h3 className="text-[22px] font-semibold">Popular Tags</h3>

        <div className="mt-7 flex flex-wrap gap-2">
          {["Real Estate", "Business", "Construction", "Luxury", "House"].map(
            (item, index) => (
              <div
                key={index}
                className="py-2 px-6 hover:text-blue-700 bg-neutral-200 rounded-full"
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

const Pagination = () => {
  const totalPages = 10;
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 200,
    afterChange: (current) => {
      console.log("after", current);
      setCurrentIndex(current);
    },
  };
  return (
    <div className="w-72">
      <Slider {...settings}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <div className="relative p-4 h-0" key={index}>
            <p
              className={`flex items-center justify-center rounded-full w-7 h-7 absolute top1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                currentIndex === index && "bg-black text-white"
              } `}
            >
              {index + 1}
            </p>
          </div>
        ))}
      </Slider>{" "}
    </div>
  );
};
