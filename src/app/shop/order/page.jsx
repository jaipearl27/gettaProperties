import React from "react";
import { FaCheck } from "react-icons/fa";

const Page = () => {
  const orderDetails = [
    { label: "Order Number", value: 13119 },
    { label: "Date", value: "27/07/2022" },
    { label: "Total", value: "$40.10" },
    { label: "Payment Method", value: "Direct Bank Transfer" },
  ];

  return (
    <div className="w-full min-h-screen pb-60 lg:p-40 xl:p-72 pt-28 ">
      <div className="w-full p-5">
        <div className="flex justify-center mx-auto items-center h-20 w-20 rounded-full bg-[#e7c873]">
          <FaCheck size={25} />
        </div>
        <h1 className="text-[26px] font-bold text-center mt-8">
          Your order is completed!
        </h1>
        <p className="text-center mt-4">
          Thank you. Your order has been received
        </p>

        <div className="border mt-8 border-dashed border-black rounded-xl px-16 py-12 flex justify-between flex-wrap gap-8">
          {orderDetails.map((item, index) => (
            <div className="" key={index}>
              <p>{item.label}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 border  p-10 rounded-xl w-full">
          <h3 className="text-[19px] font-semibold mb-7">Your order</h3>
          <div className="flex justify-between font-semibold w-full">
            <p>Product</p>
            <p>Subtotal</p>
          </div>
          <div className="flex justify-between mt-6  w-full">
            <p>12v Compact Battery Jump Starter x2</p>
            <p>$59.00</p>
          </div>
          <div className="flex justify-between mt-3  w-full">
            <p>Road and Track Suspensio x 3</p>
            <p>$67.00</p>
          </div>

          <div className="flex justify-between mt-4 w-full">
            <p className="font-semibold">Subtotal</p>
            <p>$178.00</p>
          </div>

          <div className="flex justify-between mt-6 w-full">
            <p className="font-semibold">Shipping </p>
            <p>$178.00</p>
          </div>

          <div className="flex justify-between mt-6 w-full">
            <p className="font-semibold">Total </p>
            <p>$9,218.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
