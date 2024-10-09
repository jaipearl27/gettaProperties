import PaginationComponent from "@/components/Pagination/Pagination";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiPencilThin } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";

const properties = [
  {
    id: 1,
    name: "Archer House",
    price: "$815,000",
    location: "148-37 88th Ave, Jamaica, NY, 11435",
    status: "Published",
    views: 123,
    expiry: "2024-12-31",
    imgUrl: "https://justhomnextjs.vercel.app/images/house/property-1.jpg",
  },
  {
    id: 2,
    views: 123,
    name: "Sunset Villa",
    price: "$1,200,000",
    location: "250 Ocean Dr, Miami, FL, 33101",
    status: "Published",
    expiry: "2024-11-15",
    imgUrl: "https://justhomnextjs.vercel.app/images/house/property-1.jpg",
  },
  {
    id: 3,
    name: "Maple Residency",
    price: "$970,000",
    location: "13 Maple St, Boston, MA, 02108",
    status: "Not Published",
    expiry: "2024-10-30",
    views: 123,
    imgUrl: "https://justhomnextjs.vercel.app/images/house/property-1.jpg",
  },
  {
    id: 4,
    name: "Mountain Retreat",
    price: "$1,500,000",
    location: "89 Peak Rd, Denver, CO, 80203",
    status: "Published",
    views: 123,
    expiry: "2025-01-20",
    imgUrl: "https://justhomnextjs.vercel.app/images/house/property-1.jpg",
  },
  {
    id: 5,
    name: "Lakeside Cottage",
    price: "$980,000",
    location: "77 Shore Rd, Austin, TX, 73301",
    views: 123,
    status: "Not Published",
    expiry: "2025-02-28",
    imgUrl: "https://justhomnextjs.vercel.app/images/house/property-1.jpg",
  },
];

const Page = () => {
  return (
    <div className="w-full pt-14">
      <h2 className="text-[26px] font-bold">My Properties</h2>
      <p className="text-neutral-600  mt-1">We are glad to see you again!</p>
      <div className="w-full mt-8 p-10 bg-white border border-neutral-200 overflow-auto  rounded-xl no-scrollbar">
        <table>
          <thead>
            <tr className="text-left  ">
              <th className="min-w-[550px] px-12 py-7">Listing Title</th>
              <th className="min-w-[200px] px-12 py-7">Expiry</th>
              <th className="min-w-[200px] px-12 py-7">Status</th>
              <th className="min-w-[200px] px-12 py-7">View</th>
              <th className="min-w-[200px] px-12 py-7">Action</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id} className="text-left  border-b border-b-neutral-200" >
                <td className="pl-12 py-10">
                  <PropertyCellCard
                    imgUrl={property.imgUrl}
                    price={property.price}
                    title={property.name}
                    address={property.location}
                  />
                </td>
                <td className="pl-12 py-10">{property.expiry}</td>
                <td className="pl-12 py-10">
                  <div className="px-4 py-1 text-white bg-[#eb664e] text-sm rounded-full  w-fit">
                    {property.status}
                  </div>
                </td>
                <td className="pl-12 py-10">{property.views}</td>
                <td className="pl-12 py-10">
                  <div className="flex items-center gap-5 text-neutral-600">
                    <div className="cursor-pointer flex justify-center items-center rounded-full h-12 w-12 hover:text-black hover:bg-[#e7c873]">
                      <PiPencilThin className="h-4 w-4 " />
                    </div>
                    <div className="cursor-pointer flex justify-center items-center rounded-full h-12 w-12 hover:text-black hover:bg-[#e7c873]">
                      <RiDeleteBin5Line className="h-4 w-4 " />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <PaginationComponent totalPages={10} className="mt-10" />
      </div>
    </div>
  );
};

export default Page;

const PropertyCellCard = (props) => {
  const { imgUrl, price, title, address } = props;
  return (
    <div className="w-full h-32 flex  items-center gap-5">
      <img
        src={imgUrl}
        className="w-32 h-full object-cover rounded-xl"
        alt="img"
      />

      <div className="space-y-1">
        <p className="text-[#eb664e] text-lg  font-semibold">{price}</p>
        <p className=" font-semibold ">{title}</p>

        <div className="flex h-fit  gap-2 items-center">
          <div className="flex items-center ">
            <CiLocationOn className="h-7 w-7" />
          </div>
          <div className="text-gray-500 text-sm">
            <div> {address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
