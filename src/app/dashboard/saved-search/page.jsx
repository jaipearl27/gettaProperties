"use client";
import React,{useState} from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const savedSearchData = [
  {
    title: "Condo",
    savedSearchQuery: {
      status: "For Sale",
      homeArea: "350 sqft",
    },
    numberOfProperties: 2,
    times: "Daily",
  },
  {
    title: "Fox",
    savedSearchQuery: {
      status: "For Sale",
      homeArea: "350 sqft",
    },
    numberOfProperties: 2,
    times: "Daily",
  },
  {
    title: "Condo 2",
    savedSearchQuery: {
      status: "For Sale",
      homeArea: "350 sqft",
    },
    numberOfProperties: 2,
    times: "Daily",
  },
  {
    title: "Condo 4",
    savedSearchQuery: {
      status: "For Sale",
      homeArea: "350 sqft",
    },
    numberOfProperties: 2,
    times: "Daily",
  },
];

const Page = () => {
  const [searchData, setSearchData] = useState(savedSearchData);

  function deleteElementAtIndex(index) {
    const arr = [...searchData];
    if (index >= 0 && index < arr.length) {
      arr.splice(index, 1);
    } else {
      console.log("Index out of bounds");
    }
    setSearchData(arr);
  }
  return (
    <div className="w-full pt-14">
      <h2 className="text-[26px] font-bold">Saved Search</h2>
      <p className="text-neutral-600  mt-1">We are glad to see you again!</p>

      <div className="w-full mt-8 p-10 bg-white border border-neutral-200 overflow-auto  rounded-xl no-scrollbar">
        <table>
          <thead>
            <tr className="text-left  ">
              <th className="min-w-[200px] px-12 py-7">Title</th>
              <th className="min-w-[200px] text-nowrap px-12 py-7">Saved Search Query</th>
              <th className="min-w-[200px] text-nowrap px-12 py-7">Number Properties</th>
              <th className="min-w-[200px] px-12 py-7">Times</th>
              <th className="min-w-[200px] px-12 py-7">Action</th>
            </tr>
          </thead>
          <tbody>
            {searchData.map((search, index) => (
              <tr
                key={index}
                className="text-left  border-b border-b-neutral-200"
              >
                <td className="pl-12 py-10 font-semibold">{search.title}</td>
                <td className="pl-12 py-10">
                  <div>
                    {search?.savedSearchQuery?.status && (
                      <p>Status: {search.savedSearchQuery.status}</p>
                    )}

                    {search?.savedSearchQuery?.status && (
                      <p>Home Area: {search.savedSearchQuery.homeArea}</p>
                    )}
                  </div>
                </td>
                <td className="pl-12 py-10">
                 Properties Found: {search.numberOfProperties}
                </td>
                <td className="pl-12 py-10">{search.times}</td>
                <td className="pl-12 py-10">
                  <div className="flex items-center gap-5 text-neutral-600">
                    <div 
                    onClick={() => deleteElementAtIndex(index)}
                    className="cursor-pointer flex justify-center items-center rounded-full h-12 w-12 hover:text-black hover:bg-[#e7c873]">
                      <RiDeleteBin5Line className="h-4 w-4 " />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
