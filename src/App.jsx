import { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Achievements from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const preloadResources = async () => {
      try {
        const images = [
          'assets/coding-pov.png',
          'assets/logos/github.svg',
          'assets/socials/linkedIn.svg'
        ];
        await Promise.all(
          images.map(src => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = src;
            });
          })
        );
      } catch (error) {
        console.log('Some resources failed to load:', error);
      }
    };
    preloadResources();
  }, []);

  const handleLoadingComplete = () => {
    setTransitioning(true);
    setTimeout(() => {
      setIsLoading(false);
      setTransitioning(false);
    }, 800); // Match loader slide duration
  };

  return (
    <>
      <div className="ui-overlay relative min-h-screen text-white overflow-x-hidden bg-black">
        <Navbar />
        <main className="relative min-h-screen">
          {/* Loader and Hero slide in sync */}
          <div className="relative min-h-screen w-full">
            {/* Loader slides up */}
            <div className={`fixed inset-0 z-50 transition-transform duration-700 ${transitioning ? '-translate-y-full' : 'translate-y-0'}`}
              style={{ willChange: 'transform', pointerEvents: isLoading ? 'auto' : 'none' }}>
              {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />}
            </div>
            {/* Hero slides in from below */}
            <div className={`absolute inset-0 w-full transition-transform duration-700 ${isLoading && !transitioning ? 'translate-y-full' : 'translate-y-0'}`}
              style={{ willChange: 'transform' }}>
              <Hero animate={!isLoading || transitioning} />
            </div>
          </div>
          {/* Rest of the sections */}
          {!isLoading && <>
            <About />
            <div className="section-divider" />
          <Projects />
            <div className="section-divider" />
          <Achievements />
            <div className="section-divider" />
          <Contact />
          </>}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
