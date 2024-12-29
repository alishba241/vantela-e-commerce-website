import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full lg:max-w-4xl max-w-2xl sm:max-w-xl bg-white md:p-8 sm:px-6 p-8 ">
        <h2 className="lg:text-[32px] sm:text-[24px] text-[18px] text-[#464646] font-medium text-center  mb-10">
          Contact Us
        </h2>
        <div className="border w-full"></div>

        <form className="space-y-10 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold text-[#1F3E97]">
                Full Name <span className="text-[#EA1C0F]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Full name"
                className="mt-4 block w-full lg:placeholder:text-[16px] placeholder:text-sm placeholder:text-[#858585] bg-[#F1F1F1] rounded-md shadow-sm sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F3E97]">
                Email <span className="text-[#EA1C0F]">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="Email"
                className="mt-4 block w-full lg:placeholder:text-[16px] placeholder:text-sm placeholder:text-[#858585] bg-[#F1F1F1] rounded-md shadow-sm sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1F3E97]">
              Message <span className="text-[#EA1C0F]">*</span>
            </label>
            <textarea
              placeholder="Type your message..."
              required
              className="mt-4 block w-full resize-none lg:placeholder:text-[16px] placeholder:text-sm placeholder:text-[#858585] bg-[#F1F1F1] rounded-md shadow-sm sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
              cols={6}
              rows={6}
            ></textarea>
          </div>
          {/* security code */}
          <div>
            <p className="block text-sm font-semibold text-[#1F3E97]">
              Type security code <span className="text-[#EA1C0F]">*</span>
            </p>
            <div className="mt-4 h-[84px] rounded-md w-[180px] bg-[#F1F1F1] flex items-center px-6">
              <Image src={"/image 2.png"} alt="" width={400} height={400} />
            </div>
            <div className="">
              <div className="flex sm:flex-row flex-col sm:items-center gap-6 mt-4">
                <input
                  required
                  className="mt-4 block w-[200px]  placeholder:text-[#858585] bg-[#F1F1F1] rounded-md shadow-sm sm:px-3 lg:py-3.5 sm:py-3 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F3E97]"
                />
                <div>
                  <button className="bg-[#1F3E97] sm:py-2.5 lg:py-3 py-2 text-sm sm:text-[16px] hover:bg-blue-700 px-8 rounded-md relative top-2 text-white font-medium">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
