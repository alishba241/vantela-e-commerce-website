/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useCart } from "../component/cartcontext";
import { useState, useEffect } from "react";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();

  const [orderSummary, setOrderSummary] = useState({
    totalItems: 0,
    totalPrice: 0,
  });

  // calculation of order summary
  useEffect(() => {
    const totalItems = cart.reduce(
      (acc, item) => acc + (item.quantity || 0),
      0
    );
    const totalPrice = cart.reduce((acc, item) => {
      const numericPrice = parseFloat(
        item.price.toString().replace(/[^\d.-]/g, "")
      );
      const itemTotalPrice = numericPrice * (item.quantity || 0);
      return acc + itemTotalPrice;
    }, 0);

    setOrderSummary({ totalItems, totalPrice });
  }, [cart]);
  const formatCurrency: any = (value: any) =>
    `Rp ${value.toLocaleString("en-US")}`;

  // function to handle quantity changes
  const handleQuantityChange = (id: number, change: number) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return;
    const newQuantity = Math.max(1, (item.quantity || 0) + change);
    updateCartItemQuantity(id, newQuantity);
  };

  return (
    <div className="lg:p-14 sm:p-8 p-6">
      <h2 className="lg:text-[32px] sm:text-[20px] text-[18px] text-[#464646] font-medium  lg:mt-6 lg:mb-10 mb-6">
        Shopping Cart
      </h2>
      <div className="border-b w-full"></div>
      <div className="flex flex-col lg:flex-row justify-between p-4 gap-4">
        {/* Cart Items Section */}

        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          {cart.length === 0 ? (
            <div className="flex flex-col justify-center items-center lg:relative lg:left-[30%] mt-6">
              <p className="lg:text-2xl sm:text-[20px] text-[18px] font-medium text-[#1F3E97] ">
                Your cart is empty
              </p>
              <Image
                src={"/images.jpeg"}
                alt=""
                width={150}
                height={150}
                className="mt-4 lg:w-[150px] lg:h-[150px] sm:w-[130px] sm:h-[130px] w-[110px] h-[110px]"
              />
              <Link href="/shop">
                <button className="bg-[#1F3E97] lg:py-3 sm:py-2 py-2 sm:text-[16px] text-[14px] hover:bg-blue-700 px-6 sm:px-8 rounded-md relative top-2 text-white font-medium">
                  Start Shopping
                </button>
              </Link>
            </div>
          ) : (
            <ul>
              {cart.map((item: any) => (
                <li
                  key={item.id}
                  className="flex sm:flex-row flex-col sm:items-center gap-4 border-b border-gray-300 py-8"
                >
                  <Image
                    src={`/${item.image}`}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded sm:h-[100px] sm:w-[100px] h-[70px] w-[70px] hidden sm:block"
                  />
                  <div className="sm:hidden">
                    <div className=" flex justify-between">
                    <div>
                      <Image
                    src={`/${item.image}`}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded sm:h-[100px] sm:w-[100px] h-[70px] w-[70px]"
                  />
                    </div>
                    <div className="flex gap-2 items-start">
                        <div className="flex gap-2 items-start relative left-6">
                           <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="w-[18px] h-[18px]  text-sm border-2 text-[#1F3E97] border-[#1F3E97] rounded-full active:border-white active:text-red-500 active:ring-2 active:ring-red-500"
                        >
                          <p className="relative -top-[12px] font-medium text-2xl">
                            -
                          </p>
                        </button>
                        <p className="text-[#1F3E97] bg-[#F4F4F4] px-1 text-sm">
                          {item.quantity || 1}
                        </p>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="w-[18px] h-[18px] text-sm border-2 text-[#1F3E97] border-[#1F3E97] rounded-full active:border-white active:text-red-500 active:ring-2 active:ring-red-500"
                        >
                          <p className="relative top-[-3px] font-bold">+</p>
                      </button>
                     </div>
                      <div className='flex'>
                         <button
                        onClick={() => removeFromCart(item.id)}
                        className=" bg-[#F4F4F4] mt-8 group"
                      >
                        <Image
                          src={"/material-symbols_delete.png"}
                          alt=""
                          width={18}
                          height={18}
                          className="group-hover:filter group-hover:brightness-200 group-hover:invert "
                        />
                      </button>
                      </div>
                    </div>
                     
                    </div>
                     <p className="font-semibold text-[12px] sm:text-[15px] lg:text-[17px] mt-4">{item.name}</p>
                    <p className="font-semibold text-[#1F3E97] lg:text-sm text-[12px]">
                        {" "}
                        {item.price}
                      </p>
                  </div>
                  
                  <div className="flex-1 hidden sm:block">
                    <div className="flex justify-between">
                      <p className="font-semibold text-[12px] sm:text-[15px] lg:text-[17px] hidden sm:block">{item.name}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="sm:w-[20px] sm:h-[20px] h-[15px] w-[15px] text-lg border-2 text-[#1F3E97] border-[#1F3E97] rounded-full active:border-white active:text-red-500 active:ring-2 active:ring-red-500"
                        >
                          <p className="relative -top-[14px] font-medium text-3xl">
                            -
                          </p>
                        </button>
                        <p className="text-[#1F3E97] bg-[#F4F4F4] px-1 ">
                          {item.quantity || 1}
                        </p>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="w-[20px] h-[20px] text-xl border-2 text-[#1F3E97] border-[#1F3E97] rounded-full active:border-white active:text-red-500 active:ring-2 active:ring-red-500"
                        >
                          <p className="relative top-[-7px] font-bold">+</p>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between ">
                      <p className="font-semibold text-[#1F3E97] lg:text-sm text-[12px] hidden sm:block">
                        {" "}
                        {item.price}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className=" bg-[#F4F4F4] mt-8 group"
                      >
                        <Image
                          src={"/material-symbols_delete.png"}
                          alt=""
                          width={21}
                          height={21}
                          className="group-hover:filter group-hover:brightness-200 group-hover:invert "
                        />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* order summary section */}
        {cart.length > 0 && (
          
            <div className="w-full sm:w-[60%] mx-auto lg:mx-0 sm:h-[250px] h-[230px] lg:w-1/3 bg-white shadow-lg rounded-lg p-4 relative ">
            <h2 className="sm:text-xl text-[16px] text-[#464646] font-semibold mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between relative top-4 text-sm sm:text-[16px]">
              <p className="text-[#1F3E97] font-medium">Items:</p>
              <p className="text-[#1F3E97] font-medium">
                {orderSummary.totalItems}
              </p>
            </div>
            <div className="flex justify-between mt-8 text-sm sm:text-[16px]">
              <p className="text-[#1F3E97] font-medium">Total Price:</p>
              <p className="text-[#1F3E97] font-medium">
                {formatCurrency(orderSummary.totalPrice)}
              </p>
            </div>
            <Link href="/payment">
              <button className="sm:mt-12 mt-8 w-full text-sm sm:text-[16px] bg-[#1F3E97] text-white py-1.5 sm:py-2 rounded hover:bg-blue-700">
                Proceed to Order
              </button>
            </Link>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default CartPage;
