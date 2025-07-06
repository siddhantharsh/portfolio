import React, { useState, useEffect } from 'react';

const Loader = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress over 7-8 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 8; // Slower progress increment
      });
    }, 150); // Slower interval for longer duration

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Siddhant Harsh</h1>
          <p className="text-neutral-400">Loading Portfolio...</p>
        </div>
        
        <div className="w-64 h-2 bg-neutral-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-sm text-neutral-500 mt-4">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default Loader;
