"use client";

import React, { useEffect, useState } from "react";
import Productcard from "../component/productcard";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchData = await fetch("/api/product");
        const response: Product[] = await fetchData.json();
        setProducts(response);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch data", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className=" flex flex-col justify-center items-center h-screen">
        <div className="lg:w-[50px] lg:h-[50px] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] rounded-full border-[4px] lg:border-[5px] border-r-white border-[#1F3E97] animate-spin"></div>
        <div className=" flex justify-center items-center lg:text-xl sm:text-[16px] text-sm font-semibold text-gray-500 mt-4">
          Loading Products...
        </div>
      </div>
    );
  }

  return (
    <div>
      <Productcard />
    </div>
  );
};

export default HomePage;
