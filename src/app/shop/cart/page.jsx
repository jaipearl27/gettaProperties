"use client";
import React from "react";
import { useSelector } from "react-redux";
import { LuPlus, LuMinus } from "react-icons/lu";
import { IoTrashBin } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
const Page = () => {
  const { cartData } = useSelector((state) => state.cart);
  console.log(cartData, "cartData");

  const totalPrice = cartData.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  return (
    <div className="min-h-screen py-52 px-5">
      <h1 className="text-center text-5xl font-bold mb-14">Shop Cart</h1>

      <div className="w-full px-5 md:flex">
        <div className="w-full overflow-x-auto no-scrollbar">
          <table className="w-full mb-12">
            <thead>
              <tr className="">
                <th className="p-7 text-start w-[350px]">Product</th>
                <th className="p-7 text-start w-[150px]">Price</th>
                <th className="p-7 text-start w-[150px]">Quantity</th>
                <th className="p-7 text-start w-52">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((product, index) => (
                <tr className="" key={index}>
                  <td className="flex gap-5 items-center p-7 font-semibold">
                    <img
                      className="h-[100px] w-[100px]  rounded-xl "
                      src={product.image}
                      alt="img"
                    />
                    <p>{product.name}</p>
                  </td>
                  <td className="p-7">${product.price}</td>
                  <td>
                    <div className="   items-center flex justify-around px-4">
                      <LuMinus className="cursor-pointer" />
                      <p>{product.quantity}</p>
                      <LuPlus className="cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-7">
                    <div className="flex items-center justify-around">
                      <p>${(product.price * product.quantity).toFixed(2)}</p>
                      <IoTrashBin className=" cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="w-full flex justify-between items-center">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Coupon Code"
                className=" p-4 border rounded-xl w-72 focus:outline-neutral-400"
              />
              <div className="bg-black flex justify-center text-white items-center gap-3 w-fit  rounded-xl p-4">
                <div className="text-nowrap ">Apply Coupon</div>
                <GoArrowRight className="w-5 h-5" />
              </div>
            </div>
            <div className="bg-white border border-black flex justify-center items-center gap-3 w-fit  rounded-xl p-4">
              <div>Send Message</div>
              <GoArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="min-w-full md:min-w-96 p-9 xl:pl-24 xl:min-w-[460px]">
          <h3 className="text-[19px] font-semibold mb-4">Cart Total</h3>
          {cartData.map((product, index) => (
            <div className="flex justify-between py-3 items-center">
              <p>SubTotal</p>
              <p>${product.price * product.quantity}</p>
            </div>
          ))}
          <div className="flex justify-between py-3 items-center">
            <p>Total</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>

          <div className="bg-[#e7c873] flex mt-10 justify-center mx-auto items-center gap-3 w-fit lg:w-full rounded-xl p-4">
          <div>Proceed to Checkout  </div>
          <GoArrowRight className="w-5 h-5" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
