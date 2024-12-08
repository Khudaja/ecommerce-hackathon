import HeroSection from "@/Components/HeroSection";
import Freshsales from "@/Components/Freshsales";
import OurProducts from "@/Components/OurProducts";
import StatsCard from "@/Components/StatsCard";
import { faTruck, faHeadphones, faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import Features from "@/Components/Featured";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Freshsales />
      <OurProducts/>
      <Features/> 
    
    </div>
  );
};
export default page;
