/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCart } from "@/app/component/cartcontext";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}
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
const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params; // id from dynamic route
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { cart, addToCart } = useCart();
  const [notificationVisible, setNotificationVisible] = useState(false); // state for notification

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await fetch(`/api/product/${id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const productData = await res.json();
        setProduct(productData);
      } catch (err) {
        console.error("Failed to fetch product details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = (product: Product) => {
    if (!cart.some((item) => item.id === product.id)) {
      addToCart(product);
      setNotificationVisible(true);
      setTimeout(() => {
        setNotificationVisible(false);
      }, 3000);
    }
  };

  if (loading) {
    return (
      <div className=" flex flex-col justify-center items-center h-screen">
        <div className="lg:w-[50px] lg:h-[50px] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] rounded-full border-[4px] lg:border-[5px] border-r-white border-[#1F3E97] animate-spin"></div>
        <div className="flex justify-center items-center lg:text-xl sm:text-[16px] text-sm font-semibold text-gray-500 mt-4">
          Loading Product...
        </div>
      </div>
    );
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="font-sans">
      {/* notification */}
      {notificationVisible && (
        <div className="fixed top-32 right-10 bg-gray-100 text-[#1F3E97] px-6 lg:py-4 py-3 rounded shadow-lg w-[250px] ">
          <p className="font-medium text-sm lg:text-[16px]">Product Added to Cart</p>
          <div className="relative mt-2 w-full h-2 bg-black/10 rounded overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-[#1F3E97] animate-[progressFill_3s_linear]">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent bg-[length:200%_100%] animate-[moveLine_1.5s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      )}
      {/* Breadcrumb */}
      <div className="md:h-20 md:px-20 flex items-center px-8 gap-2 md:gap-6 ">
        <p className="text-[11px] md:text-[16px] text-[#9F9F9F]">Home</p>
        <AiOutlineRight className="text-xs" />
        <p className="text-[11px] md:text-[16px] text-[#9F9F9F]">Shop</p>
        <AiOutlineRight className="text-xs" />
        <p className="text-[12px] md:text-[16px] font-medium">{product.name}</p>
      </div>

      {/* Product Section */}
      <div className="flex md:flex-row flex-col md:px-20 px-8 mt-6">
        <div className="md:ml-10   flex justify-center items-center rounded-lg">
          <Image
            src={`/${product.image}`}
            alt={product.name}
            height={350}
            width={350}
            className="object-cover  "
          />
        </div>

        {/* product details */}
        <div className="md:ml-24 md:w-[450px] w-[250px] mt-8 md:mt-0">
          <h1 className="text-[20px] md:text-[30px] font-semibold text-black">
            {product.name}
          </h1>
          <h2 className="text-[16px] md:text-[25px] font-semibold text-[#1F3E97] mt-4">
            {product.price}
          </h2>

          {/* size selection */}
          <div className="mt-4">
            <h3 className="text-black text-[12px] md:text-sm font-medium">
              Select a size
            </h3>
            <div className="flex gap-2 mt-3">
              <button className="w-8 h-8 border border-[#9F9F9F] text-[#9F9F9F] focus:border-black focus:text-black rounded-[5px] text-sm font-medium">
                38
              </button>
              <button className="w-8 h-8 border border-[#9F9F9F] text-[#9F9F9F] focus:border-black focus:text-black duration-100 rounded-[5px] text-sm font-medium">
                39
              </button>
              <button className="w-8 h-8 border border-[#9F9F9F] text-[#9F9F9F] focus:border-black focus:text-black duration-100 rounded-[5px] text-sm font-medium">
                40
              </button>
              <button className="w-8 h-8 border border-[#9F9F9F] text-[#9F9F9F] focus:border-black focus:text-black rounded-[5px] text-sm font-medium">
                41
              </button>
              <button className="w-8 h-8 border border-[#9F9F9F] text-[#9F9F9F] focus:border-black focus:text-black duration-100 rounded-[5px] text-sm font-medium">
                42
              </button>
              <button className="w-8 h-8 border border-[#9F9F9F] text-[#9F9F9F] focus:border-black focus:text-black duration-100 rounded-[5px] text-sm font-medium">
                43
              </button>
            </div>
          </div>
          {/* Add to Cart */}
          <div className="mt-8 flex gap-4 items-center">
            {cart.some((item) => item.id === product.id) ? (
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded "
                disabled
              >
                Added to Cart
              </button>
            ) : (
              <button
                className="bg-[#1F3E97] hover:bg-blue-700 text-white px-4 py-2 rounded"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>

      <div>
        {/* on sale products*/}
        <div className="md:mt-[80px] mt-[40px] w-[84%] mx-auto">
          <div className="w-auto h-[103px] mx-auto mt-[80px]">
        <div className="flex gap-[87px] justify-center items-center h-[30px] md:h-[40px] lg:h-[60px] bg-[#1F3E97] rounded-full">
          <h1 className="lg:text-[20px] md:text-[15px] text-[12px] font-medium lg:font-bold text-[#F4F4F4] italic text-center">
           Featured Products
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
                 <p className="text-[13px] md:text-sm lg:text-[16px] font-medium">
                 {product1.name}</p>

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
                          className="inline-block lg:w-[15px] lg:h-[15px]  md:w-[14px] md:h-[14px] w-[12px] h-[12px]"
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
