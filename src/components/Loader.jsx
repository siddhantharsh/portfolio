import React, { useState, useEffect } from 'react';

const Loader = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    // Simulate loading progress over 8 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setSlideUp(true);
            setTimeout(() => {
              setLoading(false);
              onLoadingComplete();
            }, 800); // slide duration
          }, 500);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-transform duration-800 ease-in-out ${slideUp ? '-translate-y-full' : 'translate-y-0'} bg-[#f8f8f6]`}
      style={{ fontFamily: "'Inter', 'Poppins', 'Segoe UI', Arial, sans-serif" }}>
      <div className="text-center w-full flex flex-col items-center justify-center">
        <img 
          src="/assets/load.gif" 
          alt="Loading..." 
          style={{ 
            width: 120, 
            height: 120, 
            objectFit: 'contain', 
            filter: 'grayscale(1) brightness(0) contrast(200%)' 
          }} 
        />
        <div className="w-48 h-2 bg-gray-300 rounded-full mt-6 overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-black text-sm font-semibold tracking-wider">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default Loader;