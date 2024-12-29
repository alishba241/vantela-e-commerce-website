import Image from "next/image";
import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full lg:max-w-4xl max-w-2xl sm:max-w-xl bg-white md:p-8 sm:px-6 px-8 py-4">
        <h2 className="lg:text-[32px] sm:text-[24px] text-[18px] text-[#464646] font-medium text-center lg:mt-8 mb-10">
          Sign up
        </h2>
        <div className="border w-full"></div>
        <form className="space-y-6 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold text-[#1F3E97]">
                Full name <span className="text-[#EA1C0F]">*</span>
              </label>
              <input
                type="text"
                placeholder="Full name"
                required
                className="mt-4 block w-full placeholder:text-[#858585] bg-[#F1F1F1] rounded-md shadow-sm sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 lg:placeholder:text-[16px] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F3E97]">
                Username <span className="text-[#EA1C0F]">*</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                required
                className="mt-4 block w-full  placeholder:text-[#858585] sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 lg:placeholder:text-[16px] placeholder:text-sm  bg-[#F1F1F1] rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F3E97]">
                Date of Birth <span className="text-[#EA1C0F]">*</span>
              </label>
              <input
                type="date"
                required
                className="mt-4 block w-full border placeholder:text-[#858585] bg-[#F1F1F1] rounded-md shadow-sm sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 lg:placeholder:text-[16px] placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F3E97]">
                Email <span className="text-[#EA1C0F]">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                required
                className="mt-4 block w-full placeholder:text-[#858585] bg-[#F1F1F1] rounded-md shadow-sm sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 lg:placeholder:text-[16px] placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F3E97]">
                Password <span className="text-[#EA1C0F]">*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                required
                className="mt-4 block w-full placeholder:text-[#858585] bg-[#F1F1F1] rounded-md shadow-sm sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 lg:placeholder:text-[16px] placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F3E97]">
                Confirm Password <span className="text-[#EA1C0F]">*</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="mt-4 block w-full placeholder:text-[#858585] bg-[#F1F1F1] rounded-md shadow-sm sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 lg:placeholder:text-[16px] placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1F3E97]">
              Address <span className="text-[#EA1C0F]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Address"
              className="mt-4 block w-full placeholder:text-[#858585] bg-[#F1F1F1] rounded-md shadow-sm sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 lg:placeholder:text-[16px] placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[#1F3E97]">
                RT/RW <span className="text-[#EA1C0F]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="RT/RW"
                className="mt-4 block w-full placeholder:text-[#858585] bg-[#F1F1F1] rounded-md shadow-sm sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 lg:placeholder:text-[16px] placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F3E97]">
                Kelurahan <span className="text-[#EA1C0F]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Kelurahan"
                className="mt-4 block w-full placeholder:text-[#858585] bg-[#F1F1F1] rounded-md shadow-sm sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 lg:placeholder:text-[16px] placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F3E97]">
                Kecamatan <span className="text-[#EA1C0F]">*</span>
              </label>
              <input
                type="text"
                placeholder="Kecamatan"
                required
                className="mt-4 block w-full placeholder:text-[#858585] bg-[#F1F1F1] rounded-md shadow-sm sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 lg:placeholder:text-[16px] placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F3E97]">
                City <span className="text-[#EA1C0F]">*</span>
              </label>
              <input
                type="text"
                placeholder="City"
                required
                className="mt-4 block w-full placeholder:text-[#858585] bg-[#F1F1F1] rounded-md shadow-sm sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 lg:placeholder:text-[16px] placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
              />
            </div>
          </div>
          <div className="flex items-start ">
            <input
              type="checkbox"
              id="terms"
              required
              className="h-4 w-4 mt-4 text-[#1F3E97] focus:ring-[#1F3E97] border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 sm:text-sm text-[12px] text-gray-600 mt-4">
              By pressing the Register button, you agree to the terms and
              conditions of the application.
            </label>
          </div>
          <button
            type="submit"
            className="w-full  bg-[#1F3E97] text-white py-2 rounded-md lg:text-lg text-sm font-medium hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-10 text-center">
          <p className="lg:text-lg text-sm font-medium ">Or</p>
          <div className="flex lg:flex-row flex-col justify-center items-center mt-10 lg:space-x-4 gap-4">
            <button className="flex items-center text-[#1F3E97]  text-[10px] lg:text-sm font-semibold px-4 py-3 border border-[#1F3E97] rounded-full hover:bg-gray-100">
              <Image
                src="/devicon_google.png"
                alt="Google"
                width={20}
                height={20}
                className=" mr-1 lg:mr-2"
              />
              Sign Up with Google
            </button>
            <button className="flex items-center text-[#1F3E97]  text-[10px] lg:text-sm font-semibold px-4 py-3 border border-[#1F3E97] rounded-full hover:bg-gray-100">
              <Image
                src="/logos_facebook.png"
                alt="Facebook"
                width={20}
                height={20}
                className="mr-1 lg:mr-2"
              />
              Sign Up with Facebook
            </button>
            <button className="flex items-center text-[#1F3E97] font-semibold  text-[10px] lg:text-sm px-4 py-3 border border-[#1F3E97] rounded-full hover:bg-gray-100">
              <Image
                src="/ic_baseline-phone.png"
                alt="Phone"
                width={20}
                height={20}
                className="mr-1 lg:mr-2"
              />
              Sign Up with Number
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
