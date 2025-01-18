import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";

// Define types for the props
interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  oldPrice?: string; // oldPrice is optional
  discount?: string; // discount is optional
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  description,
  price,
  oldPrice,
  discount,
}) => {
  return (
    <div className="group bg-[#F4F5F7] w-full h-[350px] overflow-hidden transition-transform transform hover:scale-105 relative">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-2 right-2 bg-pink-500 text-white text-center text-xs font-bold rounded-full w-12 h-12 flex items-center justify-center">
          {discount} Off
        </div>
      )}

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-3/5"
      />

      {/* Product Info */}
      <div className="text-center mt-4 space-y-2">
        <p className="font-semibold text-lg text-left pl-3">{name}</p>
        <p className="text-gray-600 text-sm text-left pl-3">{description}</p>
        <p className="font-semibold text-base text-left pl-3 mb-6">
          Rp. {price}{" "}
          {oldPrice && <span className="line-through text-gray-400 ml-4">Rp. {oldPrice}</span>}
        </p>
      </div>

      {/* Hover Effect */}
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
  );
};

export default ProductCard;
