'use client';
import React, {useState} from "react";
import { CiSearch } from "react-icons/ci";

const Page = () => {
  const [isFocused, setIsFocused] = useState(false);

  const recentSearches = [
    { id: 1, name: "New York" },
    { id: 2, name: "Los Angeles" },
    { id: 3, name: "Chicago" },
    { id: 4, name: "Houston" },
    { id: 5, name: "Miami" },
  ];
  return (
    <div className="h-screen w-full">
      <img
        src="https://justhomnextjs.vercel.app/_next/static/media/404.8081bfd7.jpg"
        alt="bg_img"
        className="h-full w-full object-cover"
      />
      <div className="flex flex-col items-center justify-center absolute inset-0 px-4">
        <h1 className="text-7xl text-white font-bold">404</h1>
        <p className="text-4xl text-white mt-4 font-bold">Oops... Page Not Found!</p>
        <p className="mt-2 text-white text-[16px]">
          It looks like nothing was found at this location. Maybe try one of the
          links below or a search?
        </p>
        <div className="mt-8 relative w-[550px] h-[70px]">
          <input
            type="text"
            placeholder="Enter Search"
            className="w-full py-4 px-7 h-full rounded-full text-black"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#e7c873] p-2 rounded-full h-[60px] w-[60px] flex justify-center items-center">
            <CiSearch className="text-2xl" />
          </button>
        </div>
        {isFocused && (
          <div className="bg-white mt-2 text-black rounded-lg p-4 w-[500px]">
            <h2 className="text-lg font-semibold mb-4">Recent Search</h2>
            <ul className="space-y-2">
              {recentSearches.map((search) => (
                <li key={search.id} className="flex items-center">
                  <i className="fas fa-clock mr-2"></i> {search.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
