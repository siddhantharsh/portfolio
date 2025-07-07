import React, { useState, useEffect } from 'react';

const Loader = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress over 8 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setLoading(false);
              onLoadingComplete();
            }, 800); // fade duration
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
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-800 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'} bg-black`}>
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Siddhant Harsh</h1>
          <p className="text-neutral-400">Loading Portfolio...</p>
        </div>
        <div className="w-64 h-2 bg-neutral-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-black via-neutral-400 to-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-neutral-500 mt-4">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default Loader;
