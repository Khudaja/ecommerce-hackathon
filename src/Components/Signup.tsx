import Image from "next/image";
import Link from "next/link";
import {
  FaTrophy,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa"; // React Icons

function Signup() {
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
          <h1 className="text-4xl md:text-5xl font-bold">Signup</h1>
          <p className="text-md sm:text-2xl font-semibold">
            <a href="/" className="text-black hover:underline">
              Home
            </a>{" "}
            <span className="mx-2">&gt;</span> Signup
          </p>
        </div>
      </div>

      {/* signup section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-16 mb-56">
        {/* Left Section */}
        <div className="w-full lg:w-[50%] h-[550px] mt-5 mb-7 items-center justify-center hidden lg:flex">
          <div className="relative w-full h-full">
            <Image
              src={"/images/p3.png"}
              alt="Mobile"
              layout="fill" // Ensures the image takes up the full container
              className="w-full h-full object-cover mt-16"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[550px] h-auto flex flex-col justify-center items-center px-8 lg:px-16 lg:mr-20 mt-32 mb-7">
          <div className="w-full">
            <h1 className="text-3xl font-bold text-center">
              Create an Account
            </h1>
            <p className="text-sm pt-2 text-center">Enter your details below</p>
            <form action="" className="mt-5">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="py-2 px-4 w-full mt-5 bg-transparent border-b-2"
              />
              <label htmlFor="email" className="sr-only">
                Email or Phone
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email or Phone Number"
                className="py-2 px-4 w-full mt-5 bg-transparent border-b-2"
              />
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="py-2 px-4 w-full mt-5 bg-transparent border-b-2"
              />
              <button
                type="submit"
                className="py-2 px-4 w-full mt-5 bg-yellow-600 hover:bg-yellow-700 text-white rounded-sm transition-all ease-in-out duration-300"
              >
                Create Account
              </button>
            </form>

            <div className="border border-black text-black flex items-center justify-center px-3 w-full h-[45px] mt-5">
              <Image
                src="/images/Icon-Google.png"
                alt="Google Play Store"
                height={20}
                width={20}
                className="h-[20px] w-[20px] mr-2"
              />
              <div className="text-black text-xs">
                <p className="leading-tight">Sign up with Google</p>
              </div>
            </div>

            <div className="flex pt-8 items-center justify-center gap-2">
              <p className="text-black opacity-85">Already have an account?</p>
              <Link href="/signup/login">
                <span className="border-b border-zinc-500 cursor-pointer">
                  Log in
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* customer care */}
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
}

export default Signup;
