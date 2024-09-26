"use client";
import PropertySlick from "@/components/PropertyPage/PropertySlick";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { BiBuildingHouse } from "react-icons/bi";
import { IoHammerOutline } from "react-icons/io5";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { FaBed, FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { VscFilePdf } from "react-icons/vsc";
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
  factsNFeature: "Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at sit voluptua antiopam hendrerit. Lorem epicuri eu per. Mediocrem torquatos deseruisse te eum commodo.",
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
    <div className="w-full pt-32 px-5 md:px-10 xl:px-16 bg-white">
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
      <PropertySlick imgArray={cardData.imgData} />
      <PropertyDetails cardData={cardData} />
      <div>
        <h2 className="text-xl font-bold mb-6">Description</h2>
        <p className="text-[15px] leading-[28px] ">{cardData.description}</p>
      </div>
      <AddressSection addressData={cardData.location} />

      <div className="mb-16">
        <h2 className="text-xl font-bold mb-6">Property Attachments</h2>
        <div className="flex flex-wrap">
          <div className="flex gap-4 items-center p-4 w-72">
            <VscFilePdf className="text-5xl text-[#eb664e] " />
            <div>
              <div className="text-[15px]">Ultra-Demo-PDF File</div>
              <div className="text-[13px]">140.56 kb</div>
            </div>
          </div>
          <div className="flex gap-4 items-center p-4 w-72">
            <VscFilePdf className="text-5xl text-[#eb664e] " />
            <div>
              <div className="text-[15px]">Ultra-Demo-PDF File</div>
              <div className="text-[13px]">140.56 kb</div>
            </div>
          </div>
        </div>
      </div>
      <DetailsSection cardData={cardData} />
      <EnergyClassSection />

      <div className="mb-16">
        <h2 className="text-xl font-bold mb-6">Facts & Features</h2>
        <p className="text-[15px] leading-[28px] ">{cardData.factsNFeature}</p>
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

      <img className="w-full" src="https://justhomnextjs.vercel.app/images/image-box/energy.png" alt="img" />
    </div>
  );
};
