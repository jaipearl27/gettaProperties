"use client";

import logo from "../../../public/logo.svg";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative z-10 bg-black text-white w-full p-5 px-24">
      <div className=" flex sm:flex-row flex-col gap-5 justify-between border-b py-5 border-b-neutral-800">
        <Image src={logo} alt="Logo" className="h-20" />

        <div className="flex items-center gap-5 ">
          <p className="font-semibold">Follow Us</p>
          <FaFacebookF className="" />
          <FaTwitter className="" />
          <FaYoutube className="" />
        </div>
      </div>

      <div className="py-12 flex gap-14 flex-wrap sm:justify-center border-b border-b-neutral-800">
        <div>
          <h3 className="text-2xl font-semibold text-neutral-600 mb-8">
            Discover
          </h3>

          {["Yelahanka", "Malleshwaram", "Jayanagar", "Whitefield"].map(
            (item, index) => (
              <div className="mb-4" key={index}>
                {item}
              </div>
            )
          )}
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-neutral-600 mb-8">
            Quick Links
          </h3>

          {[
            "Buy your property",
            "Sell your property",
            "Rent a property",
            "Post your requirements",
            "Home loans",
          ].map((item, index) => (
            <div className="mb-4" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-neutral-500 mb-8">
            Contact Us
          </h3>

          {["getta@gettaproperties.com", "+91 7204248282"].map(
            (item, index) => (
              <div className="mb-4" key={index}>
                {item}
              </div>
            )
          )}
        </div>
        <div >
          <h3 className="text-2xl font-semibold text-neutral-600 mb-8">
            Our Address
          </h3>

          <div className="mb-4   text-balance">
            1302, 5th cross, kn extention,
            <br />
            yeshwantpur, Bangalore 560022
          </div>
        </div>
      </div>

      <div className="flex justify-center py-5 text-balance text-center">
        © All rights reserved by Getta Business Ventures Pvt Ltd | 2024
      </div>
    </div>
  );
};

export default Footer;
