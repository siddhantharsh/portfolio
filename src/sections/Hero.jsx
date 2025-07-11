import HeroText from "../components/HeroText";
import { useMediaQuery } from "react-responsive";
import Squares from "../components/Squares";
import SplineModels from "../components/SplineModels";

const Hero = ({ animate }) => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space relative" id="home">
      {/* Squares Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>
      {/* Spline Bot Model */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <SplineModels active={animate} />
      </div>
      {/* Hero Text */}
      <div className="relative z-20">
      <HeroText animate={animate} />
      </div>
    </section>
  );
};

export default Hero;
