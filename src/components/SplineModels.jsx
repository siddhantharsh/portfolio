import { useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineModels = () => {
  const [botLoaded, setBotLoaded] = useState(false);

  const handleBotLoad = () => {
    console.log('✅ Bot Spline model loaded');
    setBotLoaded(true);
  };

  const handleBotError = (error) => {
    console.error('❌ Bot Spline model failed to load:', error);
  };

  return (
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
  );
};

export default SplineModels; 