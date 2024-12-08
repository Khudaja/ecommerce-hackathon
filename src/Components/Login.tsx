import Image from "next/image";

function Login() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-16 mb-56">
      {/* Left Section */}
      <div className="w-full lg:w-[60%] h-[500px] mt-[90px] mb-8 pt-10 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={"/images/p3.png"}
            alt="Mobile"
            layout="fill" // Ensures the image takes up the full container
            className="w-full h-full object-cover mt-32"
          />
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full lg:w-[450px] h-screen flex flex-col justify-center items-center px-8 lg:mr-20">
        <div className="w-full">
          <h1 className="text-2xl lg:text-3xl font-bold">
            Log in to Exclusive
          </h1>
          <p className="text-sm pt-2">Enter your details below</p>
          <form action="" className="mt-5">
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
            <div className="flex items-center justify-between mt-5">
              <button
                type="submit"
                className="py-2 px-8 bg-yellow-600 hover:bg-yellow-700 text-white rounded transition-all ease-in-out duration-300"
              >
                Login
              </button>
              <p className="text-yellow-600 opacity-85 cursor-pointer hover:underline">
                Forget Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
