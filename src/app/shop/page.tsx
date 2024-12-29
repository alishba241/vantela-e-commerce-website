// ProductCard.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
const menProducts = [
  {
    id: 9,
    name: "Jackson Ask 6JP Men’s Sandals  - Navy",
    price: "Rp 199.000",
    image: "/pro9.png",
    rating: 3.0,
    reviews: 35,
  },
  {
    id: 10,
    name: "Jackson Pose 1JS Men’s Sandals - Black khaki",
    price: "Rp 199.000",
    image: "/pro10.png",
    rating: 4.0,
    reviews: 95,
  },
  {
    id: 11,
    name: "Jackson Best 1JS Men’s Sandals - Black",
    price: "Rp 249.000",
    image: "/pro11.png",
    rating: 5.0,
    reviews: 325,
  },
  {
    id: 12,
    name: "Jackson Best 2JS Men’s Sandals - Brown",
    price: "Rp 249.000",
    image: "/pro12.png",
    rating: 4.0,
    reviews: 145,
  },
  {
    id: 13,
    name: "Jackson Clip 1JS Men’s Sandals - White black",
    price: "Rp 249.000",
    image: "/pro13.png",
    rating: 5.0,
    reviews: 65,
  },
  {
    id: 14,
    name: "Jackson 2JSA Men’s Sandals - Black",
    price: "Rp 307.000",
    image: "/pro14.png",
    rating: 5.0,
    reviews: 35,
  },
  {
    id: 15,
    name: "Jackson High 3JE Men’s Sandals - White",
    price: "Rp 249.000",
    image: "/pro15.png",
    rating: 4.5,
    reviews: 55,
  },
  {
    id: 16,
    name: "Jackson Ask 6JP Men’s  Sandal  - Navy",
    price: "Rp 307.000",
    image: "/pro16.png",
    rating: 4.5,
    reviews: 55,
  },
];

const womenProducts = [
  {
    id: 17,
    name: "Jackson Aron 2JS  Womens Sandals - Navy",
    price: "Rp 175.000",
    image: "/pro17.png",
    rating: 3.0,
    reviews: 35,
  },
  {
    id: 18,
    name: "Jackson Ford 2JS Womens Sandals - Black",
    price: "Rp 199.000",
    image: "/pro18.png",
    rating: 4.0,
    reviews: 95,
  },
  {
    id: 19,
    name: "Jackson Cozy 2JST Womens Sandals - Beige",
    price: "Rp 249.000",
    image: "/pro19.png",
    rating: 5.0,
    reviews: 325,
  },
  {
    id: 20,
    name: "Jackson Flit 2JS Womens Sandals - Black ",
    price: "Rp249.000",
    image: "/pro20.png",
    rating: 4.0,
    reviews: 145,
  },
  {
    id: 21,
    name: "Jackson Ask 6JP Men’s  Sandal  - Coffee",
    price: "Rp 175.000",
    image: "/pro21.png",
    rating: 5.0,
    reviews: 65,
  },
  {
    id: 22,
    name: "Jackson Pose 1JS Womens Sandals - Mocca Maroon",
    price: "Rp 199.000",
    image: "/pro22.png",
    rating: 5.0,
    reviews: 35,
  },
  {
    id: 23,
    name: "Jackson Axel 1JT Womens Sandals - Almond",
    price: "Rp 299.000",
    image: "/pro23.png",
    rating: 4.5,
    reviews: 55,
  },
  {
    id: 24,
    name: "Jackson Ask 4JP Womens Sandals - Brown",
    price: "Rp 199.000",
    image: "/pro24.png",
    rating: 4.5,
    reviews: 55,
  },
];

const kidsProducts = [
  {
    id: 25,
    name: "Jackson Kids Ask 5JP Black Tane",
    price: "Rp 179.000",
    image: "/pro25.png",
    rating: 3.0,
    reviews: 35,
  },
  {
    id: 26,
    name: "Jackson Kids Miko 1ZT Boys Sandals - Light Grey",
    price: "Rp 263.000",
    image: "/pro26.png",
    rating: 4.0,
    reviews: 95,
  },
  {
    id: 27,
    name: "Jackson Kids K 080 - Yellow",
    price: "Rp 199.000",
    image: "/pro27.png",
    rating: 5.0,
    reviews: 325,
  },
  {
    id: 28,
    name: "Jackson Kids Art 1JS Boys Sandals - Navy ",
    price: "Rp 175.000",
    image: "/pro28.png",
    rating: 4.0,
    reviews: 145,
  },
  {
    id: 29,
    name: "Jackson Kids Miko 1ZT Brown",
    price: "Rp 263.000",
    image: "/pro29.png",
    rating: 5.0,
    reviews: 65,
  },
  {
    id: 30,
    name: "Jackson Kids K 080 Light Blue",
    price: "Rp 249.000",
    image: "/pro30.png",
    rating: 5.0,
    reviews: 35,
  },
  {
    id: 31,
    name: "Jackson Kids Art 1JS Red",
    price: "Rp 175.000",
    image: "/pro31.png",
    rating: 4.5,
    reviews: 55,
  },
  {
    id: 32,
    name: "Jackson Kids Ask 5JP Girls sandals - Light Blue White",
    price: "Rp 179.000",
    image: "/pro32.png",
    rating: 4.5,
    reviews: 55,
  },
];

const Shop = () => {
  return (
    <div className="lg:mt-[80px] md:mt-[40px] sm:mt-[10px] mt-[20px] w-[84%] mx-auto">
      {/*men's sandals*/}
      <div className="w-auto h-[103px] mx-auto ">
        <div className="flex gap-[87px] justify-center items-center h-[30px] md:h-[40px] lg:h-[60px] bg-[#1F3E97] rounded-full">
          <h1 className="lg:text-[20px] md:text-[15px] text-[12px] font-medium lg:font-bold text-[#F4F4F4] italic text-center">
            Men&#39;s Sandals
          </h1>
        </div>
      </div>

      {/* products */}
      <div className="md:mt-[20px] md:w-full w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] sm:gap-[20px] lg:gap-[30px] md:w-[80%] lg:w-full mx-auto">
          {menProducts.map((product1, index) => (
            <div key={index} className="lg:w-[270px] md:w-[240px] w-[200px] h-auto relative group">
              {/* Product Card */}
              <div className="lg:w-[270px] md:w-[230px] w-[200px] md:h-[240px] h-[200px] lg:h-[250px] bg-[#F5F5F5] rounded-[4px] justify-center items-center flex relative">
                {/* product image */}
                <Image
                  src={product1.image}
                  alt={product1.name}
                  width={190}
                  height={190}
                  className="lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] w-[150px] h-[150px]"
                />

                {/* ! buy now button redirected to product detail page*/}

                <Link href={`/products/${product1.id}`}>
                  <div className="absolute bottom-0 left-0 w-full h-[30px] md:h-[40px] bg-[#1F3E97] text-white flex items-center justify-center transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[12px] md:text-[16px] font-medium">Buy Now</p>
                  </div>
                </Link>
              </div>

              {/* product text */}
              <div className="pt-[16px]">
                <p className="text-[13px] md:text-sm lg:text-[16px] font-medium">{product1.name}</p>

                {/* ratings */}
                <div className="flex items-center pt-1 gap-1.5">
                  <p className="text-[#1F3E97] text-[10px] md:text-[14px] lg:text-[16px] font-medium pt-1 mr-1.5">
                    {product1.price}
                  </p>
                  {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;

                    if (product1.rating >= ratingValue) {
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
                    } else if (product1.rating >= ratingValue - 0.5) {
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
                    ({product1.reviews})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* women's Sandals*/}
       <div className="w-auto h-[103px] mx-auto ">
        <div className="flex gap-[87px] mt-14 justify-center items-center h-[30px] md:h-[40px] lg:h-[60px] bg-[#1F3E97] rounded-full">
          <h1 className="lg:text-[20px] md:text-[15px] text-[12px] font-medium lg:font-bold text-[#F4F4F4] italic text-center">
            Women&#39;s Sandals
          </h1>
        </div>
      </div>

      {/* products */}
          <div className="md:mt-[20px] md:w-full w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] sm:gap-[20px] lg:gap-[30px] md:w-[80%] lg:w-full mx-auto">
          {womenProducts.map((product2, index) => (
            <div key={index} className="lg:w-[270px] md:w-[240px] w-[200px] h-auto relative group">
              {/* Product Card */}
              <div className="lg:w-[270px] md:w-[230px] w-[200px] md:h-[240px] h-[200px] lg:h-[250px] bg-[#F5F5F5] rounded-[4px] justify-center items-center flex relative">
                {/* product image */}
                <Image
                  src={product2.image}
                  alt={product2.name}
                  width={190}
                  height={190}
                  className="lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] w-[150px] h-[150px]"
                />

                {/* ! buy now button redirected to product detail page*/}

                <Link href={`/products/${product2.id}`}>
                  <div className="absolute bottom-0 left-0 w-full h-[30px] md:h-[40px] bg-[#1F3E97] text-white flex items-center justify-center transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[12px] md:text-[16px] font-medium">Buy Now</p>
                  </div>
                </Link>
              </div>

              {/* product text */}
              <div className="pt-[16px]">
                <p className="text-[13px] md:text-sm lg:text-[16px] font-medium">{product2.name}</p>

                {/* ratings */}
                <div className="flex items-center pt-1 gap-1.5">
                  <p className="text-[#1F3E97] text-[10px] md:text-[14px] lg:text-[16px] font-medium pt-1 mr-1.5">
                    {product2.price}
                  </p>
                  {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;

                    if (product2.rating >= ratingValue) {
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
                    } else if (product2.rating >= ratingValue - 0.5) {
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
                    ({product2.reviews})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*kid's Sandals*/}
       <div className="w-auto h-[103px] mx-auto "> 
        <div className="flex gap-[87px] mt-14 justify-center items-center h-[30px] md:h-[40px] lg:h-[60px] bg-[#1F3E97] rounded-full">
          <h1 className="lg:text-[20px] md:text-[15px] text-[12px] font-medium lg:font-bold text-[#F4F4F4] italic text-center">
            Kid&#39;s Sandals
          </h1>
        </div>
      </div>

      {/* products */}
       <div className="md:mt-[20px] md:w-full w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] sm:gap-[20px] lg:gap-[30px] md:w-[80%] lg:w-full mx-auto">
          {kidsProducts.map((product3, index) => (
            <div key={index} className="lg:w-[270px] md:w-[240px] w-[200px] h-auto relative group">
              {/* Product Card */}
              <div className="lg:w-[270px] md:w-[230px] w-[200px] md:h-[240px] h-[200px] lg:h-[250px] bg-[#F5F5F5] rounded-[4px] justify-center items-center flex relative">
                {/* product image */}
                <Image
                  src={product3.image}
                  alt={product3.name}
                  width={190}
                  height={190}
                  className="lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] w-[150px] h-[150px]"
                />

                {/* ! buy now button redirected to product detail page*/}

                <Link href={`/products/${product3.id}`}>
                  <div className="absolute bottom-0 left-0 w-full h-[30px] md:h-[40px] bg-[#1F3E97] text-white flex items-center justify-center transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[12px] md:text-[16px] font-medium">Buy Now</p>
                  </div>
                </Link>
              </div>

              {/* product text */}
              <div className="pt-[16px]">
                <p className="text-[13px] md:text-sm lg:text-[16px] font-medium">{product3.name}</p>

                {/* ratings */}
                <div className="flex items-center pt-1 gap-1.5">
                  <p className="text-[#1F3E97] text-[10px] md:text-[14px] lg:text-[16px] font-medium pt-1 mr-1.5">
                    {product3.price}
                  </p>
                  {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;

                    if (product3.rating >= ratingValue) {
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
                    } else if (product3.rating >= ratingValue - 0.5) {
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
                    ({product3.reviews})
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

export default Shop;
