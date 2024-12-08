import Image from "next/image";

function Hero() {
  return (
    <div className="relative w-full h-[600px] sm:h-[500px] md:h-[600px]">
      {/* Full-width background image */}
      <Image
        src="/images/hero.png"
        alt="Hero Background"
        fill
        style={{objectFit: "cover"}} 
        priority
        className="z-[-1]"
      />

      {/* Text content on the right side */}
      <div className="absolute top-12 right-0 sm:top-16 md:top-28 md:right-0 bg-[#FFF3E3] m-4 p-6 sm:p-8 md:p-10 w-[90%] sm:w-[420px] md:w-[620px] h-auto md:h-[380px] text-black">
        <p className="uppercase text-xs sm:text-sm font-semibold">
          New Arrival
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2 text-[#B88E2F]">
          Discover Our
          <br />
          New Collection
        </h1>
        <p className="text-xs sm:text-sm md:text-base mt-4 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B88E2F] text-white mt-6 sm:mt-9 py-2 sm:py-3 px-8 sm:px-14 hover:bg-[#a0522d] transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
