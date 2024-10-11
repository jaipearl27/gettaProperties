"use client";
import PaginationComponent from "@/components/Pagination/Pagination";
import React,{useState} from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const orders = [
    {
      orderId: 3684,
      package: "Premium Plan",
      amount: "$291",
      date: "May 29, 2023",
      paymentMode: "Cash on Delivery",
      status: "Processing"
    },
    {
      orderId: 3684,
      package: "Premium Plan",
      amount: "$291",
      date: "May 29, 2023",
      paymentMode: "Cash on Delivery",
      status: "Processing"
    },
    {
      orderId: 3684,
      package: "Premium Plan",
      amount: "$291",
      date: "May 29, 2023",
      paymentMode: "Cash on Delivery",
      status: "Processing"
    },
    {
      orderId: 3684,
      package: "Premium Plan",
      amount: "$291",
      date: "May 29, 2023",
      paymentMode: "Cash on Delivery",
      status: "Processing"
    }
  ];
  

const Page = () => {
  const [ordersData, setOrdersData] = useState(orders);

  function deleteElementAtIndex(index) {
    const arr = [...ordersData];
    if (index >= 0 && index < arr.length) {
      arr.splice(index, 1);
    } else {
      console.log("Index out of bounds");
    }
    setOrdersData(arr);
  }
  return (
    <div className="w-full pt-14">
      <h2 className="text-[26px] font-bold">My Package</h2>
      <p className="text-neutral-600  mt-1">We are glad to see you again!</p>

      <div className="w-full mt-8 p-10 bg-white border border-neutral-200 overflow-auto  rounded-xl no-scrollbar">
        <table>
          <thead>
            <tr className="text-left  ">
              <th className="min-w-[200px] px-12 py-7">Order ID</th>
              <th className="min-w-[200px] text-nowrap px-12 py-7">Package</th>
              <th className="min-w-[200px] text-nowrap px-12 py-7">Amount</th>
              <th className="min-w-[200px] px-12 py-7">Date</th>
              <th className="min-w-[200px] text-nowrap px-12 py-7">Payment Mode</th>
              <th className="min-w-[200px] px-12 py-7">Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, index) => (
              <tr
                key={index}
                className="text-left  border-b border-b-neutral-200"
              >
                <td className="pl-12 py-10 font-semibold">{order.orderId}</td>
                <td className="pl-12 py-10">
                  {order.package}
                </td>
                <td className="pl-12 py-10">
                {order.amount}
                </td>
                <td className="pl-12 py-10">{order.date}</td>
                <td className="pl-12 py-10">
                {order.paymentMode}
                </td>
                <td className="pl-12 py-10">
                <div className="px-4 py-1 text-white bg-[#eb664e] text-sm rounded-full  w-fit">
                    {order.status}
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
