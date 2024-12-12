import Image from "next/image";

function Hero() {
  return (
    <div className="relative w-full h-[600px] sm:h-[500px] md:h-[600px]">
      {/* Full-width background image */}
      <Image
        src="/images/hero.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        priority
        className="z-[-1]"
      />

      {/* Text content on the right side */}
      <div className="absolute top-28 right-0 p-8 bg-[#FFF3E3] w-[620px] h-[380px] text-black m-8">
        <p className="uppercase text-sm font-semibold">New Arrival</p>
        <h1 className="text-5xl font-bold leading-tight mt-2 text-[#B88E2F]">
          Discover Our
          <br />
          New Collection
        </h1>
        <p className="text-sm mt-4 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B88E2F] text-white mt-9 py-3 px-14 hover:bg-[#a0522d] transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
