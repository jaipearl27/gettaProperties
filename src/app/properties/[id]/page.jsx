"use client";
import PropertySlick from "@/components/PropertyPage/PropertySlick";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { BiBuildingHouse } from "react-icons/bi";
import { IoHammerOutline } from "react-icons/io5";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { FaBed, FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { VscFilePdf } from "react-icons/vsc";
import { CiCircleCheck } from "react-icons/ci";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const cardData = {
  id: 1,
  name: "Archer House",
  price: "$815,000",
  location: {
    address: "148-37 88th Ave",
    city: "Los Angeles",
    area: "Brookside",
    state: "California",
    country: "United States",
    zipCode: "11435",
  },
  familyType: "Multi Family",
  builtInYear: 1989,
  Garage: 1,
  beds: 4,
  baths: 3,
  sqft: 2660,
  factsNFeature:
    "Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at sit voluptua antiopam hendrerit. Lorem epicuri eu per. Mediocrem torquatos deseruisse te eum commodo.",
  description:
    "Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal dining room. Remodeled kitchen with granite countertops, white cabinetry and stainless appliances. Lovely master bedroom has updated bath, beautiful view of the pool. Guest bedrooms have walk-in, cedar closets. Delightful backyard; majestic oaks surround the free form pool and expansive patio, wet bar and grill.",
  imgData: [
    { imgUrl: "/img1.jpeg" },
    { imgUrl: "/img2.jpeg" },
    { imgUrl: "/img3.jpeg" },
  ],
  pillData: [
    { label: "Active", bgColor: "bg-[#1f4b43] text-white" },
    { label: "Verified", bgColor: "bg-[#e7c873]" },
  ],
};

export default function PropertyPage() {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);
  return (
    <div className="w-full pt-32 px-4 xl:px-16 bg-white text-[15px]">
      <div className="w-full flex justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold py-2">{cardData.name}</h2>
          <div className=" text-neutral-500 flex items-center gap-5">
            <CiLocationOn className="text-2xl" />
            <p>
              {" "}
              {cardData.location.address} {cardData.location.zipCode}
            </p>
          </div>
        </div>
        <div>
          <p className="py-1">Price</p>
          <h2 className="text-2xl font-bold">{cardData.price}</h2>
        </div>
      </div>

      <div className="w-full flex xl: gap-16">
        <div className="w-full lg:w-2/3 ">
          <PropertySlick imgArray={cardData.imgData} />
          <PropertyDetails cardData={cardData} />
          <div>
            <h2 className="text-xl font-bold mb-6">Description</h2>
            <p className="leading-[28px] ">{cardData.description}</p>
          </div>
          <AddressSection addressData={cardData.location} />

          <div className="mb-16">
            <h2 className="text-xl font-bold mb-6">Property Attachments</h2>
            <div className="flex flex-wrap">
              <div className="flex gap-4 items-center p-4 w-72">
                <VscFilePdf className="text-5xl text-[#eb664e] " />
                <div>
                  <div>Ultra-Demo-PDF File</div>
                  <div className="text-[13px]">140.56 kb</div>
                </div>
              </div>
              <div className="flex gap-4 items-center p-4 w-72">
                <VscFilePdf className="text-5xl text-[#eb664e] " />
                <div>
                  <div>Ultra-Demo-PDF File</div>
                  <div className="text-[13px]">140.56 kb</div>
                </div>
              </div>
            </div>
          </div>
          <DetailsSection cardData={cardData} />
          <EnergyClassSection />
          <FactsNFeatureSection />
          <ScheduleTourComponent isPositionedOnTop={false} />
          <ContactInfoSection isPositionedOnTop={false} />
          <ReviewsSection />
          <LeaveReviewSection />
        </div>
        <div className=" w-full hidden lg:block space-y-7">
          <ScheduleTourComponent />
          <ContactInfoSection />
        </div>
      </div>
    </div>
  );
}

const PropertyDetails = ({ cardData }) => {
  return (
    <div className="w-full py-10 flex justify-between flex-wrap">
      <div className="flex gap-3 w-1/2 md:w-1/3 items-center p-5">
        <BiBuildingHouse className="text-2xl" />
        <div className="leading-none">{cardData.familyType}</div>
      </div>

      <div className="flex gap-3 w-1/2 md:w-1/3 items-center p-5">
        <IoHammerOutline className="text-2xl" />
        <div className="leading-none">Built In {cardData.builtInYear}</div>
      </div>

      <div className="flex gap-3 w-1/2 md:w-1/3 items-center p-5">
        <HiOutlineSquare2Stack className="text-2xl" />
        <div className="leading-none">{cardData.sqft} Sq Ft</div>
      </div>

      <div className="flex gap-3 w-1/2 md:w-1/3 items-center p-5">
        <FaBed className="text-2xl" />
        <div className="leading-none">{cardData.beds} Bedrooms</div>
      </div>

      <div className="flex gap-3 w-1/2 md:w-1/3 items-center p-5">
        <FaBath className="text-2xl" />
        <div className="leading-none">{cardData.baths} Bathrooms</div>
      </div>

      <div className="flex gap-3 w-1/2 md:w-1/3 items-center p-5">
        <GiHomeGarage className="text-2xl" />
        <div className="leading-none">{cardData.Garage} Garage</div>
      </div>
    </div>
  );
};

const AddressSection = ({ addressData }) => {
  return (
    <div className="my-16">
      <div className="flex justify-between mb-2">
        <div className="font-bold text-xl">Address</div>
        <div className="bg-[#1f4b43] text-white p-3 flex gap-2 rounded-lg items-center">
          <CiLocationOn className="text-lg" />
          <div className="leading-none">Open On Google Maps</div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <DetailItem label="Address" value={addressData.address} />
        <DetailItem label="Zip/Postal Code" value={addressData.zipCode} />
        <DetailItem label="City" value={addressData.city} />
        <DetailItem label="Area" value={addressData.area} />
        <DetailItem label="State" value={addressData.state} />
        <DetailItem label="Country" value={addressData.country} />
      </div>
    </div>
  );
};

const DetailsSection = ({ cardData }) => {
  return (
    <div className="mb-16">
      <h2 className="text-xl font-bold mb-6">Details</h2>

      <div className="flex flex-wrap justify-between">
        <DetailItem label="Property ID" value="HZ48" />
        <DetailItem label="Garage" value={cardData.Garage} />
        <DetailItem label="Price" value={cardData.price} />
        <DetailItem label="Garage Size" value="200 SqFt" />
        <DetailItem label="Property Size" value={`${cardData.sqft} Sq Ft`} />
        <DetailItem label="Year Built" value={cardData.builtInYear} />
        <DetailItem label="Bedrooms" value={cardData.beds} />
        <DetailItem label="Property Type" value="Apartment" />
        <DetailItem label="Bathrooms" value={cardData.baths} />
        <DetailItem label="Property Status" value="For Sale" />
      </div>
    </div>
  );
};

const DetailItem = ({ label, value, className = "w-[46%] border-b" }) => {
  return (
    <div className={` flex justify-between py-3  ${className} `}>
      <div className="font-semibold">{label}:</div>
      <div>{value}</div>
    </div>
  );
};

const EnergyClassSection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-xl font-bold mb-6">Details</h2>

      <div className="flex flex-wrap mb-12 justify-between">
        <DetailItem
          label="Energetic class:"
          value="A+"
          className="w-full px-5"
        />
        <DetailItem
          label="Global Energy Performance Index:"
          value="92.42 kWh / m²a"
          className="w-full px-5"
        />
        <DetailItem
          label="Renewable energy performance index:"
          value="00.00 kWh / m²a"
          className="w-full px-5"
        />
        <DetailItem
          label="Energy performance of the building:"
          value="50"
          className="w-full px-5"
        />
        <DetailItem
          label="EPC Current Rating:"
          value="92"
          className="w-full px-5"
        />
        <DetailItem
          label="EPC Potential Rating:"
          value="80"
          className="w-full px-5"
        />
      </div>

      <img
        className="w-full"
        src="https://justhomnextjs.vercel.app/images/image-box/energy.png"
        alt="img"
      />
    </div>
  );
};

const CheckBoxItem = ({ label }) => {
  return (
    <div className="flex items-center gap-2 w-64 h-7 mr-5">
      <CiCircleCheck className="text-xl" />
      <div>{label}</div>
    </div>
  );
};

const FactsNFeatureSection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-xl font-bold">Facts & Features</h2>
      <p className="leading-[28px] my-6">{cardData.factsNFeature}</p>

      <p className="text-[17px] font-semibold mb-3">Interior Details</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["Equipped Kitchen", "Gym", "Laundry", "Media Room"].map(
          (item, index) => (
            <CheckBoxItem key={index} label={item} />
          )
        )}
      </div>

      <p className="text-[17px] font-semibold mb-3">Outdoor Details</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          "Back yard",
          "Basketball court",
          "Front yard",
          "Garage Attached",
          "Hot Bath",
          "Pool",
        ].map((item, index) => (
          <CheckBoxItem key={index} label={item} />
        ))}
      </div>

      <p className="text-[17px] font-semibold mb-3">Utilities Central</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          "Central Air",
          "Electricity",
          "Heating",
          "Natural Gas",
          "VentilationVentilation",
          "Water",
        ].map((item, index) => (
          <CheckBoxItem key={index} label={item} />
        ))}
      </div>

      <p className="text-[17px] font-semibold mb-3">Other Features</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          "Chair Accessible",
          "Elevator",
          "Fireplace",
          "Smoke detectorsv",
          "Washer and dryer",
          "WiFi",
        ].map((item, index) => (
          <CheckBoxItem key={index} label={item} />
        ))}
      </div>
    </div>
  );
};

import { GoArrowRight } from "react-icons/go";

const ScheduleTourComponent = ({ isPositionedOnTop = true }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <div className="p-7 w-full">
      <h2 className="text-xl font-bold mb-5">Schedule a Tour</h2>

      <div
        className={`w-full flex ${isPositionedOnTop ? "flex-col" : ""} gap-4`}
      >
        <div className="p-2 border rounded-xl w-full">
          <DatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <select className="w-full  p-4 border rounded-xl ">
          <option>6 AM</option>
          <option>12 PM</option>
          <option>6 PM</option>
        </select>
      </div>

      <div className="w-full flex justify-center mt-5 relative">
        <div className="absolute w-full h-full inset-0 flex items-center">
          <div className="w-full border-b"></div>
        </div>
        <div className="flex relative bg-white">
          <div
            onClick={() => setSelectedOption(0)}
            className={`py-4 px-10 border rounded-l-xl ${
              selectedOption === 0 ? "border-black" : ""
            }`}
          >
            In Person
          </div>
          <div
            onClick={() => setSelectedOption(1)}
            className={`py-4 px-10 border rounded-r-xl ${
              selectedOption === 1 ? "border-black" : ""
            }`}
          >
            {" "}
            Video Chat
          </div>
        </div>
      </div>

      <div
        className={`w-full flex ${
          isPositionedOnTop ? "flex-col" : ""
        } mt-5 gap-4`}
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 border rounded-xl mb-3 focus:outline-neutral-400"
        />

        <input
          type="number"
          placeholder="Phone"
          className="w-full p-4 border rounded-xl mb-3 focus:outline-neutral-400"
        />
        <input
          type="email
          "
          placeholder="Email"
          className="w-full p-4 border rounded-xl mb-3 focus:outline-neutral-400"
        />
      </div>
      <div>
        <textarea
          placeholder="Your Comment"
          rows={isPositionedOnTop ? 3 : 8}
          className="w-full p-4 border rounded-xl mb-3 focus:outline-neutral-400"
        ></textarea>
      </div>
      <div className="bg-[#e7c873] flex justify-center mx-auto items-center gap-3 w-fit lg:w-full rounded-xl p-4">
        <div>Submit a Tour Request</div>
        <GoArrowRight className="w-5 h-5" />
      </div>
    </div>
  );
};

const ContactInfoSection = ({ isPositionedOnTop = true }) => {
  return (
    <div className="p-7 w-full">
      <h2 className="text-xl font-bold mb-5">Contact Information</h2>
      <div className="flex flex-nowrap gap-5">
        <img
          className="h-[135px] w-[135px] rounded-full object-cover"
          src="https://justhomnextjs.vercel.app/images/sidebar/agent-1.png"
          alt="face"
        />
        <div className="flex-1 flex items-center">
          <div>
            <p className="font-semibold text-[17px]">Jane Cooper</p>
            <p>sale@justhome.com</p>
            <p>3-596 95 38 12</p>
          </div>
        </div>
      </div>

      {!isPositionedOnTop && (
        <p className="mt-9 font-semibold  text-[17px]">
          Enquire About This Property
        </p>
      )}
      <div
        className={`w-full flex ${
          isPositionedOnTop ? "flex-col" : ""
        } mt-7 gap-4`}
      >
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
      <div
        className={`w-full flex ${
          isPositionedOnTop ? "flex-col" : ""
        } mt-5 gap-4`}
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 border rounded-xl focus:outline-neutral-400"
        />

        <select className="w-full  p-4 border rounded-xl ">
          <option>6 AM</option>
          <option>12 PM</option>
          <option>6 PM</option>
        </select>
      </div>
      <textarea
        placeholder="Your Comment"
        rows={isPositionedOnTop ? 3 : 8}
        className="w-full p-4 mt-5 border rounded-xl mb-3 focus:outline-neutral-400"
      ></textarea>

      {!isPositionedOnTop && (
        <div className="flex gap-2 items-center my-5">
          <input type="checkbox" className="w-5 h-5" />
          <p className="">
            By submitting this form I agree to{" "}
            <span className="text-[#eb664e]">Terms of Use</span>
          </p>
        </div>
      )}

      <div className="bg-[#e7c873] flex justify-center mx-auto items-center gap-3 w-fit lg:w-full rounded-xl p-4">
        <div>Send Message</div>
        <GoArrowRight className="w-5 h-5" />
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <div className="my-16">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">4 Reviews</h2>
        <button className="bg-[#1e302d] text-white px-4 py-2 rounded-xl">
          Leave a review
        </button>
      </div>

      <ReviewCard imgUrl="	https://justhomnextjs.vercel.app/images/author/author-5.png" />
      <ReviewCard imgUrl="https://justhomnextjs.vercel.app/images/author/author-6.png" />
    </div>
  );
};

import { FaStar } from "react-icons/fa";
const ReviewCard = ({ imgUrl }) => {
  return (
    <div className="flex gap-6 my-10 shadow pb-6">
      <img
        className="sm:h-24 w-16 h-16 sm:w-24 rounded-full object-cover"
        src={imgUrl}
        alt="face"
      />
      <div>
        <div className=" pt-4">
          <div className="flex gap-1">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
          <p className="font-semibold mt-2 text-[17px]">Jane Cooper</p>
          <p className="mt-1">April 06, 2024 at 7:55 pm</p>

          <p className="mt-7">
            Beautiful home, very picturesque and close to everything in jtree! A
            little warm for a hot weekend, but would love to come back during
            the cooler seasons!
          </p>
        </div>
      </div>
    </div>
  );
};

const LeaveReviewSection = () => {
  return (
    <div className="my-20">
      <h2 className="text-xl font-bold ">Leave A Review</h2>
      <p className="my-6">
        Your email address will not be published. Required fields are marked *
      </p>
      <p>Your Rating*</p>
      <div className="flex gap-1">
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
      </div>
      <textarea
        placeholder="Your Comment"
        rows={8}
        className="w-full p-4 border mt-7 rounded-xl mb-6 focus:outline-neutral-400"
      ></textarea>

      <div className="flex lg:flex-row flex-col gap-6 mb-6">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-4 border rounded-xl  focus:outline-neutral-400"
      />

      <input
        type="email
          "
        placeholder="Email"
        className="w-full p-4 border rounded-xl focus:outline-neutral-400"
      />
      </div>

      <input
        type="text"
        placeholder="Website"
        className="w-full p-4 border rounded-xl mb-6 focus:outline-neutral-400"
      />

      <div className="flex gap-2 items-center mb-6 justify-center lg:justify-start">
        <input type="checkbox" className="w-5 h-5" />
        <p>
          Save my name, email, and website in this browser for the next time I
          comment.
        </p>
      </div>

      <div className="bg-[#e7c873] text-md flex justify-center lg:mx-0  mx-auto items-center gap-3 w-fit rounded-xl px-7 py-4">
        <div>Submit Review</div>
        <GoArrowRight className="w-5 h-5" />
      </div>
    </div>
  );
};
