import React from 'react';
import Image from 'next/image';
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from 'react-icons/fa'; // React Icons

const BlogSection = () => {
  return (
    <div>
      {/* Hero Section */}
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
          <h1 className="text-3xl sm:text-5xl font-bold">Blog</h1>
          <p className="text-md sm:text-2xl font-semibold">Home &gt; Blog</p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="container mx-auto py-10 px-4 sm:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Left Section (Blog Items) */}
          <div className="sm:col-span-2 space-y-8">
            {/* Blog Item */}
            {[1, 2, 3].map((blog) => (
              <div key={blog} className="space-y-6">
                <div className="w-full">
                  <Image
                    src={`/images/blog${blog}.png`}
                    alt={`Blog ${blog}`}
                    width={800}
                    height={700}
                    className="object-cover w-full rounded-md"
                  />
                </div>
                <h2 className="text-xl sm:text-3xl font-bold">
                  Going all-in with millennial design
                </h2>
                <p className="text-sm sm:text-md text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices.
                </p>
                <p className="border-b border-b-black w-max cursor-pointer">Read more</p>
              </div>
            ))}
          </div>

          {/* Right Section (Search and Categories) */}
          <div className="space-y-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
            <div>
              <h3 className="text-lg sm:text-2xl font-bold mt-8">Categories</h3>
              <ul className="text-sm sm:text-md font-medium text-gray-600 space-y-4 mt-4">
                <li>Craft Design</li>
                <li>Interior</li>
                <li>Modern Art</li>
                <li>Home Decor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="flex space-x-4 mt-4 justify-center items-center">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="flex justify-center items-center w-[40px] h-[40px] rounded-md bg-[#FAF3EA] hover:bg-[#B88E2F] text-black font-medium cursor-pointer"
          >
            {num}
          </div>
        ))}
        <div className="flex justify-center items-center px-5 h-[40px] rounded-md bg-[#FAF3EA] hover:bg-[#B88E2F] text-black font-medium cursor-pointer">
          Next
        </div>
      </div>

      {/* Customer Care Section */}
      <div className="h-auto w-full bg-[#FAF3EA] flex flex-wrap justify-around items-center py-10 mt-16">
        {[
          { icon: FaTrophy, title: 'High Quality', desc: 'Crafted from top materials' },
          { icon: FaShieldAlt, title: 'Warranty Protection', desc: 'Over 2 years' },
          { icon: FaShippingFast, title: 'Free Shipping', desc: 'Order over $150' },
          { icon: FaHeadset, title: '24 / 7 Support', desc: 'Dedicated support' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2 max-w-[200px] p-4"
          >
            <item.icon className="text-5xl text-[#B88E2F]" />
            <h3 className="font-bold text-lg sm:text-xl">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
