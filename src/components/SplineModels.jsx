import { useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineModels = () => {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [botLoaded, setBotLoaded] = useState(false);

  const handleBackgroundLoad = () => {
    console.log('✅ Background Spline model loaded');
    setBackgroundLoaded(true);
  };

  const handleBotLoad = () => {
    console.log('✅ Bot Spline model loaded');
    setBotLoaded(true);
  };

  const handleBackgroundError = (error) => {
    console.error('❌ Background Spline model failed to load:', error);
  };

  const handleBotError = (error) => {
    console.error('❌ Bot Spline model failed to load:', error);
  };

  return (
    <>
      {/* Background Particle Model */}
      <div 
        className="fixed inset-0 w-full h-full" 
        style={{ 
          zIndex: 0,
          opacity: backgroundLoaded ? 1 : 0,
          transition: 'opacity 3s ease-in-out'
        }}
      >
        <Spline 
          scene="https://prod.spline.design/SgJ0DnwFU9FQsJdK/scene.splinecode"
          onLoad={handleBackgroundLoad}
          onError={handleBackgroundError}
          style={{
            width: '100%',
            height: '100%',
            pointerEvents: 'auto'
          }}
        />
      </div>
      
      {/* Bot Model */}
      <div 
        className="fixed inset-0 w-full h-full" 
        style={{ 
          zIndex: 1,
          opacity: botLoaded ? 1 : 0,
          transition: 'opacity 3s ease-in-out'
        }}
      >
        <Spline 
          scene="https://prod.spline.design/1vHIfPyosrR42xOF/scene.splinecode"
          onLoad={handleBotLoad}
          onError={handleBotError}
          style={{
            width: '100%',
            height: '100%',
            pointerEvents: 'auto'
          }}
        />
      </div>
    </>
  );
};

export default SplineModels; 