import ProductCard from "./ProductCard";

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
        <ProductCard
          image="/images/p1.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />

        <ProductCard
          image="/images/p2.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />

        <ProductCard
          image="/images/p3.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />

        <ProductCard
          image="/images/p4.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />

        <ProductCard
          image="/images/p5.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />

        <ProductCard
          image="/images/p6.png"
          name="Syltherine"
          description="Stylish cafe chair"
          price="2,500,000"
          oldPrice="3,500,000"
          discount="-30%"
        />
      </div>
    </div>
  );
};

export default OurProducts;
