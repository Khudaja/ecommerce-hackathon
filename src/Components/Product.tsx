"use client";
import React, { useState } from "react";
import Image from "next/image";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function ProductPage() {
  // State for managing the main image
  const [mainImage, setMainImage] = useState("/images/sofa1.png");

  // State for managing active tabs
  const [activeTab, setActiveTab] = useState("Description");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Section */}
      <div className="bg-[#FAF3EA] py-2 px-12">
        <span className="text-gray-600">Home</span> &gt;{" "}
        <span className="text-gray-600">Shop</span> &gt;{" "}
        <span className="text-gray-800 font-semibold">Asgaard Sofa</span>
      </div>

      {/* Product Section */}
      <div className="container mx-auto border-b px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="flex w-full md:w-1/2 space-x-4">
            {/* Smaller Images */}
            <div className="flex flex-col space-y-4">
              {[
                "/images/sofa2.png",
                "/images/sofa1.png",
                "/images/sofa4.png",
              ].map((image) => (
                <img
                  key={image}
                  src={image}
                  alt="Sofa View"
                  className={`w-20 h-20 cursor-pointer ${
                    mainImage === image
                      ? "border-2 border-blue-500"
                      : "border border-gray-300"
                  }`}
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <img src={mainImage} alt="Main Sofa" className="w-full h-96" />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold">Asgaard Sofa</h1>
            <p className="text-gray-700 mt-2">Rs. 250,000.00</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="ml-2 text-gray-500">(1 Customer Review)</span>
            </div>
            <p className="text-gray-700 mt-4">
              Setting the bar on one of the loudest speakers in its class, the
              Asgaard sofa is the ultimate comfort choice, designed to make
              every experience better.
            </p>

            {/* Size Selection */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Size</h3>
              <div className="flex space-x-4 mt-2">
                {["S", "M", "L"].map((size) => (
                  <button
                    key={size}
                    className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-yellow-600"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Color</h3>
              <div className="flex space-x-4 mt-2">
                {["blue-500", "yellow-500", "brown-500"].map((color) => (
                  <span
                    key={color}
                    className={`w-8 h-8 rounded-full bg-${color} border`}
                  ></span>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center mt-4 border-b-0">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-20 border border-gray-300 px-4 py-3 rounded-lg"
              />
              <button className="bg-gray-100 text-black px-9 py-3 rounded-lg ml-4 hover:bg-yellow-600">
                Add to Cart
              </button>
              <button className="bg-gray-100 text-gray-800 px-12 py-3 rounded-lg ml-2 hover:bg-yellow-600">
                Compare
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 text-gray-700 justify-items-end mr-80">
        <div className="space-y-4">
          {/* SKU */}
          <div className="flex items-left">
            <span className="w-24 text-gray-500">SKU</span>
            <span className="flex-1">: SS001</span>
          </div>

          {/* Category */}
          <div className="flex items-left">
            <span className="w-24 text-gray-500">Category</span>
            <span className="flex-1">: Sofas</span>
          </div>

          {/* Tags */}
          <div className="flex items-left">
            <span className="w-24 text-gray-500">Tags</span>
            <span className="flex-1">: Sofa, Chair, Home, Shop</span>
          </div>

          {/* Share */}
          <div className="flex items-left">
            <span className="w-24 text-gray-500">Share</span>
            <span className="flex-1 flex gap-4 text-gray-600">
              <FaFacebookF className="cursor-pointer hover:text-black" />
              <FaLinkedinIn className="cursor-pointer hover:text-black" />
              <FaTwitter className="cursor-pointer hover:text-black" />
            </span>
          </div>
        </div>
      </div>

      <div className="p-8 font-sans text-gray-700 border-t">
        {/* Tabs */}
        <div className="flex gap-8 pb-3 mb-6 justify-center">
          <span className="text-black font-semibold border-b-2 border-black pb-2">
            Description
          </span>
          <span className="text-gray-500 cursor-pointer hover:text-black">
            Additional Information
          </span>
          <span className="text-gray-500 cursor-pointer hover:text-black">
            Reviews [5]
          </span>
        </div>

        {/* Description Section */}
        <div className="space-y-4 mr-28 ml-28 font-normal text-left mx-auto ">
          <p>
            Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex gap-6 justify-center border-b pb-8  mt-6">
          <div className="rounded-md">
            <Image
              src="/images/sofa6.png"
              alt="Sofa "
              width={600}
              height={200}
              className="object-cover"
            />
          </div>
          <div className="rounded-md">
            <Image
              src="/images/sofa7.png"
              alt="Sofa "
              width={600}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 py-10">
        {/* Heading */}
        <div className="text-center mb-8 space-y-2">
          <p className="font-bold text-3xl">Related Products</p>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12">
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
        </div>
      </div>
      <div className="flex justify-center mb-20">
        <a
          href="/shop"
          className="py-1 px-10 border border-yellow-600 bg-white text-yellow-600 text-center text-lg font-semibold"
        >
          See More
        </a>
      </div>
    </div>
  );
}
