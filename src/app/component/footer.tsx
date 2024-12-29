// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#1F3E97] text-white mt-20">
      <div className="container mx-auto lg:px-28 md:px-20 px-10 pt-16 pb-8">
        <div className="flex justify-between">
          <h3 className="font-semibold sm:text-3xl lg:text-4xl text-2xl italic">Vantela</h3>

          <input
            type="email"
            placeholder="Subscribe to our newsletter..."
            className="hidden sm:block px-4 py-2 w-[250px] rounded-full placeholder:text-[14px] text-black focus:outline-none text-left"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:gap-8 mt-10">
          <div>
            <h4 className="font-semibold sm:text-[16px] lg:text-[20px] text-[15px] mb-2">Company</h4>
            <ul className="space-y-4 sm:text-[12px] lg:text-[14px] text-[13px]">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our store
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold sm:text-[16px] lg:text-[20px] mb-2 text-[15px]">Help</h4>
            <ul className="space-y-4 sm:text-[12px] lg:text-[14px] text-[13px]">
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className='mt-8 sm:mt-0'>
            <h4 className="font-semibold sm:text-[16px] lg:text-[20px] mb-2 text-[15px] ">Social Media</h4>
            <ul className="space-y-4 sm:text-[12px] lg:text-[14px] text-[13px]">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className='mt-8 sm:mt-0'>
            <h4 className="font-semibold sm:text-[16px] lg:text-[20px] mb-2 text-[15px]">Contact</h4>
            <ul className="space-y-4 sm:text-[12px] lg:text-[14px] text-[13px]">
              <li>Sukaasih, Kota Tangerang, Banten 15111</li>
              <li>Phone: 0976444677</li>
              <li>Mail: admin@vantela.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" h-[60px] text-center bg-[#18378F] text-sm flex justify-center items-center">
        Copyright 2023. All Rights Reserved.
      </div>
    </footer>
  );
}
