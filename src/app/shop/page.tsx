import React from "react";
import Image from "next/image";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaTrophy,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa"; // React Icons

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
          <p className="text-2xl font-semibold">Home &gt; Shop</p>
        </div>
      </div>

      {/* Shopbar Section */}
      <div className="bg-[#F9F1E7] p-5">
        <div className="w-full h-[50px] relative flex justify-center items-center">
          <Image
            src="/images/shopbar.png"
            fill
            style={{ objectFit: "cover" }}
            alt="Hero"
          />
        </div>
      </div>
      {/* carts */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8 p-14">
          {/* Card 1 */}
          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <div className="absolute top-2 right-2 bg-pink-500 text-white text-center text-xs font-bold rounded-full w-12 h-12 flex items-center justify-center">
              -30% Off
            </div>
            <Image
              src="/images/p1.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Hero"
            />
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Syltherine</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Stylish cafe chair
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 2,500,000{" "}
                <span className="line-through text-gray-400 ml-4">
                  Rp. 3,500,000
                </span>
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <Image
              src="/images/p2.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Hero"
            />
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Leviosa</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Stylish cafe chair
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 2,500,000
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <div className="absolute top-2 right-2 bg-pink-500 text-white text-center text-xs font-bold rounded-full w-12 h-12 flex items-center justify-center">
              -30% Off
            </div>
            <Image
              src="/images/p3.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Hero"
            />
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Lolito</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Luxury big sofa
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 2,500,000{" "}
                <span className="line-through text-gray-500 ml-4">
                  Rp. 7,000,000
                </span>
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <Image
              src="/images/p4.png"
              alt="Savanna"
              fill
              sizes="100vw"
              className="object-cover w-full h-3/5"
            />
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Savanna</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Outdoor chair
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 1,800,000
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="/images/p5.png"
              alt="Gloria"
              className="object-cover w-full h-3/5"
            />
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Gloria</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Classic dining chair
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 1,200,000
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="/images/p6.png"
              alt="Celeste"
              className="object-cover w-full h-3/5"
            />
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Celeste</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Modern lounge chair
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 2,200,000
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="/images/p7.png"
              alt="Astra"
              className="object-cover w-full h-3/5"
            />
            <div className="text-center mt-4 border space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Astra</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Sleek office chair
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 2,000,000
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <div className="absolute top-2 right-2 bg-pink-500 text-white text-center text-xs font-bold rounded-full w-12 h-12 flex items-center justify-center">
              -30% Off
            </div>
            <img
              src="/images/p1.png"
              alt="Syltherine"
              className="object-cover w-full h-3/5"
            />
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Syltherine</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Stylish cafe chair
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 2,500,000{" "}
                <span className="line-through text-gray-400 ml-4">
                  Rp. 3,500,000
                </span>
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="/images/p2.png"
              alt="Leviosa"
              className="object-cover w-full h-3/5"
            />
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Leviosa</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Stylish cafe chair
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 2,500,000
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <div className="absolute top-2 right-2 bg-pink-500 text-white text-center text-xs font-bold rounded-full w-12 h-12 flex items-center justify-center">
              -30% Off
            </div>
            <img
              src="/images/p3.png"
              alt="Lolito"
              className="object-cover w-full h-3/5"
            />
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Lolito</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Luxury big sofa
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 2,500,000{" "}
                <span className="line-through text-gray-500 ml-4">
                  Rp. 7,000,000
                </span>
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="/images/p4.png"
              alt="Savanna"
              className="object-cover w-full h-3/5"
            />
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Savanna</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Outdoor chair
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 1,800,000
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>

          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="/images/p5.png"
              alt="Gloria"
              className="object-cover w-full h-3/5"
            />
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Gloria</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Classic dining chair
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 1,200,000
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="/images/p6.png"
              alt="Celeste"
              className="object-cover w-full h-3/5"
            />
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Celeste</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Modern lounge chair
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 2,200,000
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>

          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="/images/p7.png"
              alt="Linea"
              className="object-cover w-full h-3/5"
            />
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Linea</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Comfy armchair
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 1,900,000
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="/images/p7.png"
              alt="Astra"
              className="object-cover w-full h-3/5"
            />
            <div className="text-center mt-4 border space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Astra</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Sleek office chair
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 2,000,000
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="/images/p4.png"
              alt="Linea"
              className="object-cover w-full h-3/5"
            />
            <div className="text-center mt-4 space-y-2">
              <p className="font-semibold text-lg text-left pl-3">Linea</p>
              <p className="text-gray-600 text-sm text-left pl-3">
                Comfy armchair
              </p>
              <p className="font-semibold text-base text-left pl-3 mb-6">
                Rp. 1,900,000
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-4">
              <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <FontAwesomeIcon icon={faEye} className="text-xl" />
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </div>
            </div>
          </div>
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
      <div className="h-200 w-full bg-[#FAF3EA] flex justify-around items-center py-10 mt-24">
        {/* Column 1 */}
        <div className="flex flex-col items-center text-center space-y-2 max-w-[200px]">
          <div className="flex items-center space-x-2">
            <FaTrophy className="text-5xl text-[#B88E2F]" />
            <h3 className=" font-bold text-xl">High Quality</h3>
          </div>
          <p className="text-sm text-gray-600 pl-12">
            Crafted from top materials
          </p>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col items-center text-center space-y-2 max-w-[200px]">
          <div className="flex items-center space-x-2">
            <FaShieldAlt className="text-6xl text-[#B88E2F]" />
            <h3 className="text-md font-bold text-xl">Warranty Protection</h3>
          </div>
          <p className="text-sm text-gray-600 pl-12">Over 2 years</p>
        </div>
        {/* Column 3 */}
        <div className="flex flex-col items-center text-center space-y-2 max-w-[200px]">
          <div className="flex items-center space-x-2">
            <FaShippingFast className="text-5xl text-[#B88E2F]" />
            <h3 className=" font-bold text-xl">Free Shipping</h3>
          </div>
          <p className="text-sm text-gray-600 pl-12 ">Order over 150 $</p>
        </div>
        {/* Column 4 */}
        <div className="flex flex-col items-center text-center space-y-2 max-w-[200px]">
          <div className="flex items-center space-x-2">
            <FaHeadset className="text-5xl text-[#B88E2F]" />
            <h3 className=" font-bold text-xl">24 / 7 Support</h3>
          </div>
          <p className="text-sm text-gray-600 pl-12">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
