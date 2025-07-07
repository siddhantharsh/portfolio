import { useRef, useState } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const TiltCard = ({ children, className }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 150; // Much more subtle
    const rotateY = (centerX - x) / 150; // Much more subtle
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className={`transition-all duration-200 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1: Minimal Profile - Only this one has tilt */}
        <TiltCard className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Siddhant Harsh</p>
            <p className="subtext mb-2">
              Full-stack developer passionate about building impactful EdTech, FinTech, and AI solutions. I love turning ideas into interactive, real-world products.
            </p>
          </div>
        </TiltCard>
        {/* Grid 2: Impactful Skills (No tilt - draggable elements) */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex flex-wrap items-center justify-center w-full h-full gap-2">
            <Card text="React.js" containerRef={grid2Container} />
            <Card text="Node.js" containerRef={grid2Container} />
            <Card text="Python" containerRef={grid2Container} />
            <Card text="Flask" containerRef={grid2Container} />
            <Card text="Keras" containerRef={grid2Container} />
            <Card text="SQL" containerRef={grid2Container} />
            <Card text="Flutter" containerRef={grid2Container} />
            <Card text="Git" containerRef={grid2Container} />
          </div>
        </div>
        {/* Grid 3: Location */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location</p>
            <p className="subtext">
              Based in India, open to remote work opportunities worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4: Contact/Collab */}
        <div className="grid-special-color grid-4 bg-neutral-950 rounded-2xl shadow-lg flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 w-full h-full p-6">
            <p className="text-center headtext text-black">
              Ready to collaborate on exciting projects?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5: Tech Stack Spiral */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
