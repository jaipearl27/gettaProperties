import React from 'react'
import { BsHouseAdd, BsHouseUp, BsHouseCheck  } from "react-icons/bs";
import PropertyServiceCard from "./PropertyServiceCard";

const PropertyServiceSection = () => {
  return (
    <div className="w-full  flex flex-col gap-10 md:flex-row ">
    <PropertyServiceCard
      title="Buy a Property"
      icon={<BsHouseAdd className="w-20 relative h-20" />}
      description="Choose from Millions of properties across Bengaluru with just a click of a button."
      buttonLabel="Find your home"
    />

    <PropertyServiceCard
      title="Sell your Property"
      icon={<BsHouseCheck  className="w-20 relative h-20" />}
      description="Sell your Property with the leaders in Bengaluru Real Estate Space."
      buttonLabel="Find an ad"
    />
    <PropertyServiceCard
      title="Rent a Property"
      icon={<BsHouseUp  className="w-20 relative h-20" />}
      description="Search through our database for a wide range of options."
      buttonLabel="Find a rental"
    />
  </div>
  )
}

export default PropertyServiceSection