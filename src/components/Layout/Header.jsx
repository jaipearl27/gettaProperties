"use client";
import Link from "next/link";
import logo from "../../../public/logo.svg";

import Image from "next/image";

const Header = () => {
  return (
    <nav className="w-full relative z-10 text-sm text-white py-8 font-semibold px-20">
      <div className="grid grid-cols-7">
      <div className="col-span-2">
        <Image src={logo} />
      </div>
      <div className="w-full flex justify-center col-span-3">
        <ul className="flex w-fit gap-8 h-full items-center font-semibold">
          <li>
            <Link
              href={"/"}
              className="py-1 hover:shadow-[0_3px#ffffff] w-fit transition duration-300"
            >
              Buy
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="py-1 hover:shadow-[0_3px#ffffff] w-fit transition duration-300"
            >
              Rent
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="py-1 hover:shadow-[0_3px#ffffff] w-fit transition duration-300"
            >
              Post Your Requirements
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="py-1 hover:shadow-[0_3px#ffffff] w-fit transition duration-300"
            >
              Home Loans
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="py-1 hover:shadow-[0_3px#ffffff] w-fit transition duration-300"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 items-center justify-end col-span-2 pr-4 ">
        <div className="hidden xl:visible">+91 7204248282</div>
        <Link href={'/'} >
          Login
        </Link>
        <Link href={'/'}>
          Register
        </Link>
        <Link
          href={"/"}
          className="border border-[#fffefe] rounded-full w-fit  px-4 py-2 hover:bg-blue-600 hover:border-[#ffffff] hover:text-white transition duration-300"
        >
          Add Property
        </Link>
      </div>
      </div>
    </nav>
  );
};

export default Header;
