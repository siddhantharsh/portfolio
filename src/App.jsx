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
  };

  if (isLoading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <SplineModels />
      <div className="relative min-h-screen text-white overflow-x-hidden z-10">
        <Navbar />
        <main>
          <Hero />
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
