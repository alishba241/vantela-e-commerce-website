// ProductCard.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
export const products = [
  {
    id: 1,
    name: "Vantela New Public White low",
    price: "Rp. 299.990",
    image: "/pro1.png",
    rating: 3.0,
    reviews: 35,
  },
  {
    id: 2,
    name: "Vantela Republic Low Black Natural",
    price: "Rp 159.000",
    image: "/pro2.png",
    rating: 4.0,
    reviews: 95,
  },
  {
    id: 3,
    name: "Vantela Evil X Papa Gading Black Natural",
    price: "Rp 415.000",
    image: "/pro3.png",
    rating: 5.0,
    reviews: 325,
  },
  {
    id: 4,
    name: "Vantela Public Low Black Natural",
    price: "Rp 205.000",
    image: "/pro4.png",
    rating: 4.0,
    reviews: 145,
  },
];

export const Saleproducts = [
  {
    id: 5,
    name: "Vantela Ethnic Low Black Natural",
    price: "Rp 182.390",
    image: "/pro5.png",
    rating: 3.0,
    reviews: 35,
  },
  {
    id: 6,
    name: "Vantela Ethnic Low Black Natural",
    price: "Rp 181.720",
    image: "/pro6.png",
    rating: 4.0,
    reviews: 95,
  },
  {
    id: 7,
    name: "Vantela Ethnic Low Black Natural",
    price: "Rp 159.800",
    image: "/pro7.png",
    rating: 5.0,
    reviews: 325,
  },
  {
    id: 8,
    name: "Vantela Ethnic Low Black Natural",
    price: "Rp 195.390",
    image: "/pro8.png",
    rating: 4.0,
    reviews: 145,
  },
];

const ProductCard = () => {
  return (
    <div className="md:mt-[80px] mt-[40px] w-[84%] mx-auto">
      {/* most popular*/}
      <div className="w-auto h-[103px] mx-auto ">
        <div className="flex gap-[87px] justify-center items-center h-[30px] md:h-[40px] lg:h-[60px] bg-[#1F3E97] rounded-full">
          <h1 className="lg:text-[20px] md:text-[15px] text-[12px] font-medium lg:font-bold text-[#F4F4F4] italic text-center">
            Most Polpular
          </h1>
        </div>
      </div>

      {/* products */}
      <div className="md:mt-[20px] md:w-full w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] sm:gap-[20px] lg:gap-[30px] md:w-[80%] lg:w-full mx-auto">
          {products.map((product, index) => (
            <div key={index} className="lg:w-[270px] md:w-[240px] w-[200px] h-auto relative group">
              {/* Product Card */}
              <div className="lg:w-[270px] md:w-[230px] w-[200px] md:h-[240px] h-[200px] lg:h-[250px] bg-[#F5F5F5] rounded-[4px] justify-center items-center flex relative">
                {/* product image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={190}
                  height={190}
                  className="lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] w-[150px] h-[150px]"
                />

                {/* ! buy now button redirected to product detail page*/}

                <Link href={`/products/${product.id}`}>
                  <div className="absolute bottom-0 left-0 w-full h-[30px] md:h-[40px] bg-[#1F3E97] text-white flex items-center justify-center transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[12px] md:text-[16px] font-medium">Buy Now</p>
                  </div>
                </Link>
              </div>

              {/* product text */}
              <div className="pt-[16px]">
                <p className="text-[13px] md:text-sm lg:text-[16px] font-medium">{product.name}</p>

                {/* ratings */}
                <div className="flex items-center pt-1 gap-1.5">
                  <p className="text-[#1F3E97] text-[10px] md:text-[14px] lg:text-[16px] font-medium pt-1 mr-1.5">
                    {product.price}
                  </p>
                  {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;

                    if (product.rating >= ratingValue) {
                      return (
                        <Image
                          key={index}
                          src="/Vector.png"
                          alt=""
                          width={15}
                          height={15}
                          className="inline-block lg:w-[15px] lg:h-[15px]  md:w-[12px] md:h-[12px] w-[10px] h-[10px]"
                        />
                      );
                    } else if (product.rating >= ratingValue - 0.5) {
                      return (
                        <Image
                          key={index}
                          src="/star-half-filled.png"
                          alt=""
                          width={18}
                          height={18}
                          className="inline-block lg:w-[15px] lg:h-[15px]  md:w-[12px] md:h-[12px] w-[10px] h-[10px]"
                        />
                      );
                    } else {
                      return (
                        <Image
                          key={index}
                          src="/Vector (1).png"
                          alt=""
                          width={15}
                          height={15}
                          className="inline-block lg:w-[15px] lg:h-[15px]  md:w-[12px] md:h-[12px] w-[10px] h-[10px]"
                        />
                      );
                    }
                  })}
                  <p className="ml-3 text-[12px] md:text-[14px] font-semibold text-black text-opacity-50">
                    ({product.reviews})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* on sale products*/}
      <div className="w-auto h-[103px] mx-auto mt-[80px]">
        <div className="flex gap-[87px] justify-center items-center h-[30px] md:h-[40px] lg:h-[60px] bg-[#1F3E97] rounded-full">
          <h1 className="lg:text-[20px] md:text-[15px] text-[12px] font-medium lg:font-bold text-[#F4F4F4] italic text-center">
            On Sale
          </h1>
        </div>
      </div>

      {/* products */}
       <div className="md:mt-[20px] md:w-full w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] sm:gap-[20px] lg:gap-[30px] md:w-[80%] lg:w-full mx-auto">
          {Saleproducts.map((products, index) => (
            <div key={index} className="lg:w-[270px] md:w-[240px] w-[200px] h-auto relative group">
              {/* Product Card */}
              <div className="lg:w-[270px] md:w-[230px] w-[200px] md:h-[240px] h-[200px] lg:h-[250px] bg-[#F5F5F5] rounded-[4px] justify-center items-center flex relative">
                {/* product image */}
                <Image
                  src={products.image}
                  alt={products.name}
                  width={190}
                  height={190}
                  className="lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] w-[150px] h-[150px]"
                />

                {/* ! buy now button redirected to product detail page*/}

                <Link href={`/products/${products.id}`}>
                  <div className="absolute bottom-0 left-0 w-full h-[30px] md:h-[40px] bg-[#1F3E97] text-white flex items-center justify-center transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[12px] md:text-[16px] font-medium">Buy Now</p>
                  </div>
                </Link>
              </div>

              {/* product text */}
              <div className="pt-[16px]">
                <p className="text-[13px] md:text-sm lg:text-[16px] font-medium">{products.name}</p>

                {/* ratings */}
                <div className="flex items-center pt-1 gap-1.5">
                  <p className="text-[#1F3E97] text-[10px] md:text-[14px] lg:text-[16px] font-medium pt-1 mr-1.5">
                    {products.price}
                  </p>
                  {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;

                    if (products.rating >= ratingValue) {
                      return (
                        <Image
                          key={index}
                          src="/Vector.png"
                          alt=""
                          width={15}
                          height={15}
                          className="inline-block lg:w-[15px] md:w-[12px] md:h-[12px] lg:h-[15px] w-[10px] h-[10px]"
                        />
                      );
                    } else if (products.rating >= ratingValue - 0.5) {
                      return (
                        <Image
                          key={index}
                          src="/star-half-filled.png"
                          alt=""
                          width={18}
                          height={18}
                          className="inline-block lg:w-[18px] lg:h-[18px]  md:w-[12px] md:h-[12px]lg w-[10px] h-[10px]"
                        />
                      );
                    } else {
                      return (
                        <Image
                          key={index}
                          src="/Vector (1).png"
                          alt=""
                          width={15}
                          height={15}
                          className="inline-block lg:w-[15px] lg:h-[15px]  md:w-[12px] md:h-[12px] w-[10px] h-[10px]"
                        />
                      );
                    }
                  })}
                  <p className="ml-3 text-[12px] md:text-[14px] font-semibold text-black text-opacity-50">
                    ({products.reviews})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
