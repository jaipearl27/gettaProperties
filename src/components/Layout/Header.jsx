"use client";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";

const routes = [
  {
    label: "Buy",
    slug: "/",
  },
  {
    label: "Rent",
    slug: "/",
  },
  {
    label: "Post Your Requirements",
    slug: "/",
  },
  {
    label: "Property Management",
    slug: "/",
  },
  {
    label: "Blog",
    slug: "/blogs",
  },
  {
    label: "Contact Us",
    slug: "/contact",
  },
];

const Header = () => {
  // const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  function handleMenuClick() {
    console.log("clicked.");
    setIsSidebarOpen((prev) => !prev);
  }

  useEffect(() => {
    // const handleScroll = () => {
    //   const isScrolled = window.scrollY > 50; // Adjust the value as needed
    //   setScrolled(isScrolled);
    // };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(false);
      }
    };

    // window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      // window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`w-full  z-50 fixed shadow-lg  top-0 lg:glass-effect left-0 bg-white text-black  py-4 px-5 sm:px-10 lg:py-8 font-semibold xl:px-20 transition duration-200 `}
    >
      <div className="flex lg:transparent justify-between">
        <div className=" h-full min-w-28">
          <Image src={logo} alt="Logo" className="h-full" />
        </div>
        <div className="w-full   lg:flex justify-center hidden">
          <ul className="flex w-fit gap-4 xl:gap-8 h-full items-center font-semibold">
            {routes.map((route, index) => (
              <li key={index}>
                <Link
                  href={route.slug}
                  className="py-1 hover:shadow-[0_3px#ffffff] text-nowrap w-fit transition duration-300"
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:flex hidden  gap-3 items-center justify-end w-fit ">
          <div className="hidden xl:block text-nowrap">+91 7204248282</div>
          <Link className="text-nowrap" href={"/"}>Sign in/up</Link>
          <Link
            href={"/"}
            className="border text-nowrap border-[#fffefe] rounded-full w-fit px-4 py-2 hover:bg-blue-600 hover:border-[#ffffff] hover:text-white transition duration-300"
          >
            Add Property
          </Link>
        </div>
        <div className="items-center flex  justify-end col-span-6 lg:hidden ">
          <HiMenuAlt4
            className={` h-full w-7 cursor-pointer text-black `}
            onClick={handleMenuClick}
          />
        </div>
      </div>

      <div
        className={`${
          isSidebarOpen ? "left-0" : "-left-72"
        } fixed w-72 top-0 bg-white shadow-lg shadow-black/50 h-screen  transform ease-in-out duration-700 z-10`}
      >
        <div className=" h-fit min-w-28 py-4 px-5">
          <Image src={logo} alt="Logo" className="h-full" />
        </div>

        <div className="p-5 text-neutral-800 bg-white">
          {routes.map((route, index) => (
            <div key={index} className="h-12 w-full ">
              <Link
                href={route.slug}
                className="py-1 w-full h-full hover:text-neutral-500 flex items-center text-nowrap transition duration-300"
              >
                {route.label}
              </Link>
            </div>
          ))}
           <div className="h-12 w-full">
              <Link
                href='/'
                className="py-1 h-full w-full hover:text-neutral-500    flex items-center text-nowrap transition duration-300"
              >
                Sign in/up
              </Link>
            </div>

            <div className="h-12 w-full flex">
            <Link
            href={"/"}
            className="border border-neutral-800 rounded-full w-fit flex justify-center items-center px-4 hover:bg-blue-600 hover:border-[#ffffff] hover:text-white transition duration-300"
          >
            Add Property
          </Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
