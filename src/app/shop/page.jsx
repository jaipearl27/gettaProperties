"use client";
import { useDispatch, useSelector } from "react-redux";
import PaginationComponent from "@/components/Pagination/Pagination";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { addToCart } from "../lib/features/cartSlice/cartSlice";
import { useRouter } from "next/navigation";
const products = [
  {
    id: 1,
    name: "PTaxPro Assessment Software",
    category: "Software",
    description:
      "A comprehensive tool for property tax assessment and calculation.",
    price: 299.99,
    stockCount: 50,
    rating: 4.5,
    features: [
      "Automated assessment",
      "Multi-state support",
      "Customizable tax rates",
    ],
    inStock: true,
    image: "https://justhomnextjs.vercel.app/images/shop/shop-1.png",
  },
  {
    id: 2,
    name: "GovPilot Tax Management",
    category: "Software",
    description:
      "Manage multiple property tax accounts with payment scheduling and reminders.",
    price: 499.99,
    stockCount: 30,
    rating: 4.7,
    features: [
      "Payment scheduling",
      "Document management",
      "Tax filing reminders",
    ],
    inStock: true,
    image: "https://justhomnextjs.vercel.app/images/shop/shop-2.png",
  },
  {
    id: 3,
    name: "OfficialPayments Tax Payment Platform",
    category: "Online Platform",
    description: "Online platform for easy and secure property tax payments.",
    price: 0.0,
    stockCount: "Unlimited",
    rating: 4.2,
    features: [
      "Automated payment scheduling",
      "Secure transactions",
      "E-receipts",
    ],
    inStock: true,
    image: "https://justhomnextjs.vercel.app/images/shop/shop-3.png",
  },
  {
    id: 4,
    name: "PropertyShark Records Search",
    category: "Online Service",
    description: "Search for property tax records by address or owner name.",
    price: 19.99,
    stockCount: "Unlimited",
    rating: 4.0,
    features: [
      "Nationwide property records",
      "Historical tax data",
      "Owner information lookup",
    ],
    inStock: true,
    image: "https://justhomnextjs.vercel.app/images/shop/shop-4.png",
  },
  {
    id: 5,
    name: "CCH Property Tax Compliance",
    category: "Software",
    description:
      "Ensure compliance with local and state property tax regulations.",
    price: 899.99,
    stockCount: 15,
    rating: 4.8,
    features: ["Filing support", "Audit tracking", "Multi-state management"],
    inStock: true,
    image: "https://justhomnextjs.vercel.app/images/shop/shop-5.png",
  },
  {
    id: 6,
    name: "Real Estate Tax Calculator",
    category: "Online Tool",
    description: "Estimate property tax based on property value and location.",
    price: 9.99,
    stockCount: "Unlimited",
    rating: 4.1,
    features: [
      "Integration with property listings",
      "Accurate tax estimates",
      "Mobile-friendly interface",
    ],
    inStock: true,
    image: "https://justhomnextjs.vercel.app/images/shop/shop-6.png",
  },
  {
    id: 7,
    name: "TaxLienInvestor Platform",
    category: "Investment Platform",
    description: "Invest in tax liens on properties to earn interest.",
    price: 0.0,
    stockCount: "Unlimited",
    rating: 4.4,
    features: [
      "Portfolio management",
      "Lien auction participation",
      "Educational resources",
    ],
    inStock: true,
    image: "https://justhomnextjs.vercel.app/images/shop/shop-7.png",
  },
  {
    id: 8,
    name: "Property Tax Insurance",
    category: "Insurance",
    description: "Protect against unexpected property tax increases.",
    price: 199.99,
    stockCount: 25,
    rating: 4.3,
    features: [
      "Risk assessment",
      "Customizable coverage",
      "Premium calculators",
    ],
    inStock: true,
    image: "https://justhomnextjs.vercel.app/images/shop/shop-8.png",
  },
];

const Page = () => {
  const {cartData} =  useSelector(state => state.cart);
  console.log(cartData, "cartData");

  return (
    <div className="min-h-screen py-52 px-5">
      <h1 className="text-center text-5xl font-bold mb-14">Shop List</h1>

      <div className="w-full xl:px-8">
      <ListHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 mb-20">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <PaginationComponent totalPages={10} className="mt-10" />
      </div>
    </div>
  );
};

export default Page;

const ProductCard = ({ product }) => {


  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity: 1, // Default quantity set to 1
    };
    dispatch(addToCart(cartItem));
    router.push('shop/cart')
  };
  return (
    <div className="w-full group">
      <div className="w-full h-0 relative pb-[100%] rounded-xl overflow-hidden ">
        <img
          src={product.image}
          alt="img"
          className="w-full h-full object-cover  absolute top-0 left-0 group-hover:animate-zoomInOut "
        />

        <div 
        onClick={handleAddToCart}
        className=" cursor-pointer  absolute group-hover:bottom-3 group-hover:opacity-100 opacity-0 -bottom-1 transition-all duration-300 ease-in-out left-4 right-4 rounded-lg bg-white items-center py-4 flex justify-center gap-4">
          <p>Add to Cart</p>
          <GoArrowRight size={20} />
        </div>
      </div>

      <div className="w-full space-y-2 text-center">
        <p className="text-lg font-bold truncate">{product.name}</p>
        <p className="text-[#eb664e] font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

const ListHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Newest");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };
  
  const options = [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
    { label: "Last 3 days", value: "3-days" },
    { label: "Last week", value: "last-week" },
    { label: "Last month", value: "last-month" },
    { label: "Last year", value: "last-year" },
  ];

  return (
    <div className="flex justify-between items-center p-4">
      <span className="text-gray-800">9,998 results</span>
      <div className="relative">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          <span className="text-gray-800">Sort by</span>
          <span className="text-blue-600">{selectedOption}</span>
          <i
            className={`fas fa-chevron-down text-gray-800 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          ></i>
        </div>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded z-10 shadow-lg">
            <div className="py-1">
              {
                
                options.map((option) => (
                  <div
                    key={option.value}
                    className="px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-100"
                    onClick={() => selectOption(option.value)}
                  >
                    {option.label}
                  </div>
                ))
                
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
