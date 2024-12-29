"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between items-center lg:h-[100px] sm:h-[80px] h-[60px] w-full px-5 mt-8 md:justify-around">
        {/* Logo */}
        <div className="text-[#1F3E97] sm:text-2xl lg:text-4xl text-xl font-bold italic">Vantela</div>

        {/* Links for larger screens */}
        <div className="hidden md:flex md:relative md:right-[-3%] lg:relative lg:right-[-8%] md:text-[11px] lg:text-[14px] items-center text-[#858585] md:gap-6 lg:gap-12 font-semibold">
          <Link href="/" className="hover:text-[#1F3E97]">
            Home
          </Link>
          <Link href="/shop" className="hover:text-[#1F3E97]">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-[#1F3E97]">
            Contact Us
          </Link>
          <Link href="" className="hover:text-[#1F3E97]">
            Other
          </Link>
        </div>

        {/* Icons and Buttons */}
        <div className="hidden md:flex md:gap-4 lg:gap-6 items-center">
          <Image src={"/Group (2).png"} alt="" width={24} height={24} className='lg:w-[24px] lg:h-[24px] md:w-[18px] md:h-[18px]'/>
          <Image src={"/icon-park-outline_like.png"} alt="" width={24} height={24} className='lg:w-[24px] lg:h-[24px] md:w-[18px] md:h-[18px]'/>
          <Link href={"/cart"}>
            <Image src={"/ph_bag.png"} alt="" width={24} height={24}  className='cursor-pointer lg:w-[24px] lg:h-[24px] md:w-[18px] md:h-[18px]'/>
          </Link>
          <div className="flex md:gap-4 lg:gap-6 md:ml-3 lg:ml-10">
            <Link href="/signup">
              <button className="lg:px-6 md:px-4 md:py-1.5 lg:py-2 bg-[#1F3E97] hover:bg-blue-700 rounded-full text-white md:text-[10px] lg:text-[14px]">
                Sign Up
              </button>
            </Link>
            <Link href="/signin">
              <button className="lg:px-6 lg:py-2 md:px-4 md:py-1.5 border border-[#1F3E97] hover:bg-[#1F3E97] hover:text-white rounded-full text-[#1F3E97] md:text-[10px] lg:text-[14px]">
                Sign In
              </button>
            </Link>
          </div>
        </div>

        {/* Hamburger Menu for mobile */}
        <button
          className="block md:hidden text-[#1F3E97] text-xl focus:outline-none relative right-4"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-5">
          <div className="text-[#1F3E97] text-2xl font-bold italic">Vantela</div>
          <button
            className="text-[#1F3E97] text-xl focus:outline-none"
            onClick={toggleSidebar}
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col text-[#858585] font-semibold text-[12px] mt-4 gap-6 px-5">
          <Link href="/" className="hover:text-[#1F3E97]" onClick={toggleSidebar}>
            Home
          </Link>
          <Link href="/shop" className="hover:text-[#1F3E97]" onClick={toggleSidebar}>
            Shop
          </Link>
          <Link href="/contact" className="hover:text-[#1F3E97]" onClick={toggleSidebar}>
            Contact Us
          </Link>
          <Link href="" className="hover:text-[#1F3E97]" onClick={toggleSidebar}>
            Other
          </Link>
          <div className='flex items-center gap-4'>
             <Image src={"/Group (2).png"} alt="" width={20} height={20} />
          <Image src={"/icon-park-outline_like.png"} alt="" width={20} height={20} />
          <Link href={"/cart"}>
            <Image src={"/ph_bag.png"} alt="" width={20} height={20} className="cursor-pointer" />
          </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-8 px-5">
          <Link href="/signup" onClick={toggleSidebar}>
            <button className="px-4 py-2 bg-[#1F3E97] hover:bg-blue-700 rounded-full text-white text-[12px] w-full">
              Sign Up
            </button>
          </Link>
          <Link href="/signin" onClick={toggleSidebar}>
            <button className="px-4 py-2 border border-[#1F3E97] hover:bg-[#1F3E97] hover:text-white rounded-full text-[#1F3E97] text-[12px] w-full">
              Sign In
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
