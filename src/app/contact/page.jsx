"use client";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import PartnerSection from "@/components/LandingPage/Partners/PartnerSection";
const page = () => {
  return (
    <div className="py-32 px-7 relative">
      <div className="w-full h-[70vh] rounded-xl xl:mb-20 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5794.122681030878!2d77.9967338936702!3d30.288197816318156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1727776763035!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex lg:flex-row flex-col items-center gap-12 justify-center lg:absolute lg:top-[85vh] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
        <ContactCard
          icon={<CiLocationOn className="text-5xl mb-12" />}
          label="Address"
          label2="90 Fifth Avenue, 3rd Floor"
          label3="San Francisco, CA 1980"
          bottomLabel="See on Map"
        />
        <ContactCard
          icon={<BsTelephone className="text-5xl mb-12" />}
          label="Address"
          label2="90 Fifth Avenue, 3rd Floor"
          label3="San Francisco, CA 1980"
          bottomLabel="See on Map"
        />
        <ContactCard
          icon={<BiSupport className="text-5xl mb-12" />}
          label="Address"
          label2="90 Fifth Avenue, 3rd Floor"
          label3="San Francisco, CA 1980"
          bottomLabel="See on Map"
        />
      </div>

      <div className=" mb-32 mt-32 lg:mt-64 lg:px-44 md:px-32 xl:px-80">
        <h1 className="text-[40px] text-center font-bold mb-5">
          Send Us a Message
        </h1>
        <p className="text-[17px] text-center mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className={`w-full flex flex-col md:flex-row gap-5 mb-5`}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 border rounded-xl focus:outline-neutral-400"
          />

          <input
            type="number"
            placeholder="Phone"
            className="w-full p-4 border rounded-xl focus:outline-neutral-400"
          />
        </div>

        <input
          type="email"
          placeholder="Email  "
          className="w-full p-4 border rounded-xl focus:outline-neutral-400"
        />

        <textarea
          placeholder="Your Message"
          rows={8}
          className="w-full p-4 mt-5 border rounded-xl mb-3 focus:outline-neutral-400"
        ></textarea>

        <div className="flex gap-2 items-center my-5 justify-center">
          <input type="checkbox" className="w-5 h-5" />
          <p className="">
            I consent to having this website store my submitted information
          </p>
        </div>

        <div className="bg-[#e7c873] flex mt-10 justify-center mx-auto items-center gap-3 w-fit lg:w-full rounded-xl p-4">
          <div>Send Message</div>
          <GoArrowRight className="w-5 h-5" />
        </div>
      </div>

      <div className="w-full ">
        <p className="text-center mb-7 text-[17px]">Thousands of world’s leading companies trust Space</p>
        <PartnerSection/>  
      </div>

      <div className="">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default page;

const ContactCard = (props) => {
  const { icon, label, label2, label3, bottomLabel } = props;
  return (
    <div className="w-96 py-16 rounded-xl flex flex-col items-center bg-white">
      {icon}
      <p className="font-bold text-[21px] mb-4">{label}</p>
      <p className="text-neutral-500 mb-1">{label2}</p>
      <p className="text-neutral-500 mb-10">{label3}</p>
      <p>{bottomLabel}</p>
    </div>
  );
};
