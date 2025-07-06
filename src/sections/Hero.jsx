import HeroText from "../components/HeroText";
import { useMediaQuery } from "react-responsive";
import SplineModels from "../components/SplineModels";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space relative" id="home">
      {/* Hero Text */}
      <div className="relative z-10">
        <HeroText />
      </div>
    </section>
  );
};

export default Hero;
