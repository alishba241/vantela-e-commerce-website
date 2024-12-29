import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div>
      <div className="md:h-[auto] w-auto mt-[0px] md:mt-[20px] bg-stone-100 h-[230px]">
        <Image
          src={"/Frame 1.png"}
          alt="hero-img"
          width={500}
          height={500}
          className="lg:h-[500px] md:h-[300px] h-[230px] w-full hidden sm:block"
        />
        <div className="flex">
          <div className="lg:px-36 sm:px-14 px-10 absolute md:top-[190px] sm:top-[155px] lg:top-[250px] top-[140px]">
            <h1 className="lg:text-7xl md:4xl text-3xl text-[#1F3E97] font-bold">Vantela</h1>
            <h2 className="lg:text-3xl md:text-xl text-[12px] text-[#FFB800] font-semibold lg:mt-4 md:mt-3 mt-1">
              PUBLIC HIGH GUM NATURAL
            </h2>
            <p className="lg:text-[14px] md:text-[10px] text-[8px] text-[#464646] lg:mt-6 md:mt-2 mt-2">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem <br className="hidden sm:block"/> Ipsum passages, and more recently
              with desktop publishing
            </p>
            <Link href='/shop'>
     <button className="lg:mt-6 md:mt-4 md:px-4 lg:px-6 md:py-1.5 lg:py-2 py-1 px-4 mt-4 bg-[#1F3E97] hover:bg-blue-700 rounded-full text-white text-[10px] md:text-[10px] lg:text-[14px]">
              Shop Now
            </button>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
