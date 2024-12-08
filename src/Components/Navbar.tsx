import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 lg:px-20 h-16">
      {/* Logo Section */}
      <div className="relative flex items-center">
        {/* Logo Behind the Text */}
        <div className="flex items-center justify-center -z-10">
          <div className="bg-gray-300 w-10 h-10 sm:w-12 sm:h-12">
            <Image
              src={"/images/logo.jpg"}
              width={50}
              height={50}
              alt="Logo"
              className="object-cover"
            />
          </div>
        </div>
        <span className="ml-2 text-2xl sm:text-3xl font-bold">Furino</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex space-x-4 sm:space-x-8 lg:space-x-16 text-sm sm:text-base lg:text-lg font-medium">
        <Link href="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link href="/shop" className="hover:text-gray-400">
          Shop
        </Link>
        <Link href="/blog" className="hover:text-gray-400">
          Blog
        </Link>
        <Link href="/contact" className="hover:text-gray-400">
          Contact
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {/* User Icon */}
        <Link href="/signup">
          <FontAwesomeIcon icon={faUser} className="text-xl sm:text-2xl text-gray-500" />
        </Link>
        {/* Search Icon */}
        <Link href="/search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-xl sm:text-2xl text-gray-500"
          />
        </Link>
        {/* Wishlist Icon */}
        <Link href="/wishlist" className="relative">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-xl sm:text-2xl text-gray-500"
          />
          <div className="absolute top-0 right-[-4px] text-[10px] sm:text-xs text-white bg-red-700 rounded-full w-[12px] sm:w-[14px] h-[12px] sm:h-[14px] flex items-center justify-center">
            5
          </div>
        </Link>
        {/* Cart Icon */}
        <Link href="/cart" className="relative">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-xl sm:text-2xl text-gray-500"
          />
          <div className="absolute top-0 right-[-4px] text-[10px] sm:text-xs text-white bg-red-700 rounded-full w-[12px] sm:w-[14px] h-[12px] sm:h-[14px] flex items-center justify-center">
            3
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
