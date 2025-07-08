import { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Achievements from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";
import SplineModels from "./components/SplineModels";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    // Add smooth scrolling to the whole page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Preload critical resources
    const preloadResources = async () => {
      try {
        // Preload images
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
    setIsLoading(false);
    setTimeout(() => {
      setShowSpline(true);
    }, 800); // Stagger SplineModels fade-in after hero text
  };

  if (isLoading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <>
      {showSpline && <SplineModels />}
      <div className="ui-overlay relative min-h-screen text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Hero animate={!isLoading} />
          <About />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
