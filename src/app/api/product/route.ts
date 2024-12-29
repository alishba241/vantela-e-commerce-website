import { NextResponse } from "next/server";

// ! products details

const productsData = [
  // product 1
  {
    id: 1,
    name: "Vantela New Public White low",
    price: "Rp. 299.990",
    image: "pro1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 2,
    name: "Vantela Republic Low Black Natural",
    price: "Rp 159.000",
    image: "pro2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 3,
    name: "Vantela Evil X Papa Gading Black Natural",
    price: "Rp 415.000",
    image: "pro3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 4,
    name: "Vantela Public Low Black Natural",
    price: "Rp 205.000",
    image: "pro4.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },

  // product 2

  {
    id: 5,
    name: "Vantela Ethnic Low Black Natural",
    price: "Rp 182.390",
    image: "pro5.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 6,
    name: "Vantela Ethnic Low Black Natural",
    price: "Rp 181.720",
    image: "pro6.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 7,
    name: "Vantela Ethnic Low Black Natural",
    price: "Rp 159.800",
    image: "pro7.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },

  {
    id: 8,
    name: "Vantela Ethnic Low Black Natural",
    price: "Rp 195.390",
    image: "pro8.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },

  // product 3
  {
    id: 9,
    name: "Jackson Ask 6JP Men’s Sandals  - Navy",
    price: "Rp 199.000",
    image: "pro9.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 10,
    name: "Jackson Pose 1JS Men’s Sandals - Black khaki",
    price: "Rp 199.000",
    image: "pro10.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 11,
    name: "Jackson Best 1JS Men’s Sandals - Black",
    price: "Rp 249.000",
    image: "pro11.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 12,
    name: "Jackson Best 2JS Men’s Sandals - Brown",
    price: "Rp 249.000",
    image: "pro12.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 13,
    name: "Jackson Clip 1JS Men’s Sandals - White black",
    price: "Rp 249.000",
    image: "pro13.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 14,
    name: "Jackson 2JSA Men’s Sandals - Black",
    price: "Rp 307.000",
    image: "pro14.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 15,
    name: "Jackson High 3JE Men’s Sandals - White",
    price: "Rp 249.000",
    image: "pro15.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },

  {
    id: 16,
    name: "Jackson Ask 6JP Men’s  Sandal  - Navy",
    price: "Rp 307.000",
    image: "pro16.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  // product 4

  {
    id: 17,
    name: "Jackson Aron 2JS  Womens Sandals - Navy",
    price: "Rp 175.000",
    image: "pro17.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 18,
    name: "Jackson Ford 2JS Womens Sandals - Black",
    price: "Rp 199.000",
    image: "pro18.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.ndi expedita in",
  },
  {
    id: 19,
    name: "Jackson Cozy 2JST Womens Sandals - Beige",
    price: "Rp 249.000",
    image: "pro19.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 20,
    name: "Jackson Flit 2JS Womens Sandals - Black ",
    price: "Rp249.000",
    image: "pro20.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 21,
    name: "Jackson Ask 6JP Men’s  Sandal  - Coffee",
    price: "Rp 175.000",
    image: "pro21.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 22,
    name: "Jackson Pose 1JS Womens Sandals - Mocca Maroon",
    price: "Rp 199.000",
    image: "pro22.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 23,
    name: "Jackson Axel 1JT Womens Sandals - Almond",
    price: "Rp 299.000",
    image: "pro23.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 24,
    name: "Jackson Ask 4JP Womens Sandals - Brown",
    price: "Rp 199.000",
    image: "pro24.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  // product 5

  {
    id: 25,
    name: "Jackson Kids Ask 5JP Black Tane",
    price: "Rp 179.000",
    image: "pro25.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 26,
    name: "Jackson Kids Miko 1ZT Boys Sandals - Light Grey",
    price: "Rp 263.000",
    image: "pro26.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 27,
    name: "Jackson Kids K 080 - Yellow",
    price: "Rp 199.000",
    image: "pro27.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 28,
    name: "Jackson Kids Art 1JS Boys Sandals - Navy ",
    price: "Rp 175.000",
    image: "pro28.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 29,
    name: "Jackson Kids Miko 1ZT Brown",
    price: "Rp 263.000",
    image: "pro29.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 30,
    name: "Jackson Kids K 080 Light Blue",
    price: "Rp 249.000",
    image: "pro30.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 31,
    name: "Jackson Kids Art 1JS Red",
    price: "Rp 175.000",
    image: "pro31.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
  {
    id: 32,
    name: "Jackson Kids Ask 5JP Girls sandals - Light Blue White",
    price: "Rp 179.000",
    image: "pro32.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto ut enim reiciendis, earum quo beatae sapiente explicabo cupiditate perspiciatis maiores temporibus autem nihil deserunt iure deleniti facilis quis saepe.",
  },
];
//! Get method to fetch all products

export async function GET() {
  return NextResponse.json(productsData);
}
