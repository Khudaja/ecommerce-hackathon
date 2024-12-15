import React from "react";
import Image from "next/image";
import {
  FaTrophy,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";

const Cart = () => {
  return (
    <div>
      <div className="w-full h-[250px] relative flex justify-center items-center">
        <Image
          src="/images/shop.png"
          alt="Shop"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-3 text-center text-black">
          <h1 className="text-4xl md:text-5xl font-bold">Cart</h1>
          <p className="text-md sm:text-2xl font-semibold">
            <a href="/" className="text-black hover:underline">
              Home
            </a>{" "}
            <span className="mx-2">&gt;</span> Cart
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between items-start p-8">
        {/* First Section */}
        <div className="w-full lg:w-2/3">
          <div className="border-b border-[#F9F1E7] pb-4 bg-[#F9F1E7]">
            {/* Headings and Pricing - Stacked in Mobile, Grid in Larger Screens */}
            <div className="grid grid-cols-1 lg:grid-cols-4 text-center font-bold text-lg py-4">
              <div className="text-gray-800">Product</div>
              <div className="text-gray-800">Price</div>
              <div className="text-gray-800">Quantity</div>
              <div className="text-gray-800">Sub-total</div>
            </div>
          </div>

          {/* Product Information - Stacked on Mobile, Grid in Larger Screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center items-center mt-4 mr-12">
            {/* Product */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/p5.png"
                alt="Product"
                width={120}
                height={120}
                className="rounded"
              />
              <p className="mt-2 text-gray-700 font-medium">Product Name</p>
            </div>
            {/* Price */}
            <div className="flex justify-center items-center text-gray-700">
              $300
            </div>
            {/* Quantity */}
            <div className="flex justify-center items-center text-gray-700">
              2
            </div>
            {/* Sub-total */}
            <div className="flex justify-center items-center text-gray-700">
              $600
            </div>
          </div>
        </div>

        {/* Second Section - Cart Total */}
        <div className="w-full lg:w-1/4 bg-[#F9F1E7] mt-6 lg:mt-0 lg:mr-10 p-6 lg:p-12 rounded-lg text-white">
          <h2 className="text-2xl lg:text-3xl text-black font-bold text-center mb-6">
            Cart Total
          </h2>
          <div className="text-lg text-black mb-4">
            <div className="flex justify-between text-black border-b pb-2">
              <span>Subtotal:</span>
              <span>$300</span>
            </div>
            <div className="flex justify-between mt-4 text-black">
              <span>Total:</span>
              <span>$600</span>
            </div>
          </div>
          <button className="w-full mt-6 py-3 border border-black text-black rounded-lg text-lg transition-all">
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Customer Care */}
      <div className="h-auto w-full bg-[#FAF3EA] flex flex-wrap justify-around items-center py-10 mt-40">
        {[
          {
            icon: FaTrophy,
            title: "High Quality",
            desc: "Crafted from top materials",
          },
          {
            icon: FaShieldAlt,
            title: "Warranty Protection",
            desc: "Over 2 years",
          },
          {
            icon: FaShippingFast,
            title: "Free Shipping",
            desc: "Order over $150",
          },
          {
            icon: FaHeadset,
            title: "24 / 7 Support",
            desc: "Dedicated support",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2 max-w-[200px] p-4 md:max-w-[150px] lg:max-w-[200px]"
          >
            <item.icon className="text-4xl text-[#B88E2F]" />
            <h3 className="font-bold text-md sm:text-md text-lg">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
