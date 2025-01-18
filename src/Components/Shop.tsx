import React from "react";
import Image from "next/image";
import CustomerCare from "./CustomerCare";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaTrophy,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa"; // React Icons
import ProductCard from "./ProductCard";

const Shop = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="w-full h-[250px] relative">
        <Image
          src="/images/shop.png"
          fill
          style={{ objectFit: "cover" }}
          alt="Hero"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-3 text-center text-black">
          <h1 className="text-5xl font-bold">Shop</h1>
          <p className="text-md sm:text-2xl font-semibold">
            <a href="/" className="text-black hover:underline">
              Home
            </a>{" "}
            <span className="mx-2">&gt;</span> Shop
          </p>
        </div>
      </div>
      {/* carts */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8 p-14">
          {/* Card 1 */}
          <ProductCard
          image="/images/p1.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />

          {/* Card 2 */}
          <ProductCard
          image="/images/p2.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />

          {/* Card 3 */}
          <ProductCard
          image="/images/p3.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />
          {/* Card 4 */}
          <ProductCard
          image="/images/p4.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />

          {/* Card 5 */}
          <ProductCard
          image="/images/p5.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />
          {/* Card 6 */}
          <ProductCard
          image="/images/p6.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />

          {/* Card 7 */}
          <ProductCard
          image="/images/p7.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />
     
          {/* Card 8 */}
          <ProductCard
          image="/images/p1.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />     

          {/* Card 9 */}
          <ProductCard
          image="/images/p2.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />

          {/* Card 10 */}
          <ProductCard
          image="/images/p5.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />
         {/* Card 11 */}
        <ProductCard
          image="/images/p3.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />
         {/* Card 12 */}
        <ProductCard
          image="/images/p7.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />
        </div>
      </div>
      {/* slider */}
      <div className="relative">
        {/* Four Divs in a Row */}
        <div className="flex space-x-4 mt-4 justify-center items-center">
          {/* Div 1 */}
          <div className="flex justify-center items-center w-[50px] h-[50px] rounded-md bg-[#FAF3EA] hover:bg-[#B88E2F] text-black font-medium cursor-pointer">
            1
          </div>
          {/* Div 2 */}
          <div className="flex justify-center items-center w-[50px] h-[50px] rounded-md bg-[#FAF3EA] hover:bg-[#B88E2F] text-black font-medium cursor-pointer">
            2
          </div>
          {/* Div 3 */}
          <div className="flex justify-center items-center w-[50px] h-[50px] rounded-md bg-[#FAF3EA] hover:bg-[#B88E2F] text-black font-medium cursor-pointer">
            3
          </div>
          {/* Next Div */}
          <div className="flex justify-center items-center px-5 h-[50px] rounded-md bg-[#FAF3EA] hover:bg-[#B88E2F] text-black font-medium cursor-pointer">
            Next
          </div>
        </div>
      </div>
      {/* customer service */}
      <div>
        <CustomerCare/>
      </div>
    </div>
  );
};

export default Shop;
