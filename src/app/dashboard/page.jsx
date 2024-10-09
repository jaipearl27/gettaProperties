import React from "react";
import {
  HiOutlineUpload,
  HiOutlineDocumentText,
  HiOutlineHeart,
  HiOutlineThumbUp,
} from "react-icons/hi";

const statsData = [
  {
    count: 16,
    title: "Published",
    icon: <HiOutlineUpload className="text-[#1f4b43] text-6xl relative" />, // Use appropriate upload icon
  },
  {
    count: 24,
    title: "Pending",
    icon: <HiOutlineDocumentText className="text-[#1f4b43] text-6xl relative" />, // Use appropriate document/pending icon
  },
  {
    count: 39,
    title: "Favorites",
    icon: <HiOutlineHeart className="text-[#1f4b43] text-6xl relative" />, // Use heart icon for favorites
  },
  {
    count: 48,
    title: "Reviews",
    icon: <HiOutlineThumbUp className="text-[#1f4b43] text-6xl relative" />, // Use thumbs up icon for reviews
  },
];

const page = () => {
  return (
    <div className="w-full pt-14">
      <h2 className="text-[26px] font-bold">Hello Ali Tufan</h2>
      <p className="text-neutral-600  mt-1">We are glad to see you again!</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
        {statsData.map((stat, index) => (
          <DbCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default page;

const DbCard = ({ title, count, icon }) => {
  return (
    <div className="p-10 w-full bg-white rounded-xl group">
      <div className="flex gap-10 items-center justify-between">
        <div className="">
          <h1 className="text-[44px] font-bold">{count}</h1>
          <p className="text-[#1f4b43]">{title}</p>
        </div>
        <div className="relative">

          <div className="absolute z-0 -bottom-2 -left-2 rounded-full group-hover:-bottom-4 group-hover:-left-[17px] group-hover:h-[150%] group-hover:w-[150%] h-[75%] w-[75%] bg-[#e7c873] transition-all duration-300 ease-in-out">

          </div>

        {icon}
        </div>
      </div>
    </div>
  );
};
