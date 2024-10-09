"use client";

import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const PaginationComponent = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleGoToPage = (e) => {
    const page = Number(e.target.value);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full flex justify-center gap-8">
      <div className="flex h-10 justify-center items-center w-fit">
        <button
        className="px-4 h-full border border-neutral-700 rounded-l-lg flex items-center"
        onClick={handlePrevious}>
          <FaCaretLeft size={20} />
        </button>
        <div
        className="px-4 h-full border-y border-neutral-700 flex items-center"
        >{currentPage}</div>
        <button 
        className="px-4 h-full  border border-neutral-700 rounded-r-lg flex items-center"
        onClick={handleNext}>
          <FaCaretRight size={20} />
        </button>
      </div>

      <div className="flex justify-center items-center w-fit gap-4">
        <p>Go to page: </p>
        <input
              type="Number"
              placeholder="1"
              className=" border p-2 w-12 rounded-xl placeholder:text-black border-neutral-700"
            />
        <p>of {totalPages}</p>

      </div>


    </div>
  );
};

export default PaginationComponent;
