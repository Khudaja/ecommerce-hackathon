import React from "react";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OurProducts = () => {
  return (
    <div className="mx-4 py-10">
      {/* Heading */}
      <div className="text-center mb-8 space-y-2">
        <p className="font-bold text-5xl">Our Products</p>
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
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
            <p className="text-gray-600 text-sm text-left pl-3">Stylish cafe chair</p>
            <p className="font-semibold text-base text-left pl-3 mb-6">
              Rp. 2,500,000{" "}
              <span className="line-through text-gray-400 ml-4">Rp. 3,500,000</span>
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
            <p className="text-gray-600 text-sm text-left pl-3">Stylish cafe chair</p>
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
            <p className="text-gray-600 text-sm text-left pl-3">Luxury big sofa</p>
            <p className="font-semibold text-base text-left pl-3 mb-6">
              Rp. 2,500,000{" "}
              <span className="line-through text-gray-500 ml-4">Rp. 7,000,000</span>
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
            <p className="text-gray-600 text-sm text-left pl-3">Outdoor chair</p>
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
            <p className="text-gray-600 text-sm text-left pl-3">Classic dining chair</p>
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
            <p className="text-gray-600 text-sm text-left pl-3">Modern lounge chair</p>
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
      </div>
    </div>
  );
};

export default OurProducts;
