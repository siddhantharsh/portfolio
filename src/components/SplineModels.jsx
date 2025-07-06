import { useEffect, useRef } from 'react';

const SplineModels = () => {
  const botViewerRef = useRef(null);
  const backgroundViewerRef = useRef(null);

  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.22/build/spline-viewer.js';
    document.head.appendChild(script);

    script.onload = () => {
      // Create background viewer
      if (backgroundViewerRef.current) {
        const backgroundViewer = document.createElement('spline-viewer');
        backgroundViewer.setAttribute('url', 'https://prod.spline.design/SgJ0DnwFU9FQsJdK/scene.splinecode');
        backgroundViewer.style.position = 'fixed';
        backgroundViewer.style.top = '0';
        backgroundViewer.style.left = '0';
        backgroundViewer.style.width = '100%';
        backgroundViewer.style.height = '100%';
        backgroundViewer.style.zIndex = '0';
        backgroundViewer.style.pointerEvents = 'none';
        backgroundViewerRef.current.appendChild(backgroundViewer);
      }

      // Create bot viewer
      if (botViewerRef.current) {
        const botViewer = document.createElement('spline-viewer');
        botViewer.setAttribute('url', 'https://prod.spline.design/1vHIfPyosrR42xOF/scene.splinecode');
        botViewer.style.position = 'fixed';
        botViewer.style.top = '0';
        botViewer.style.left = '0';
        botViewer.style.width = '100%';
        botViewer.style.height = '100%';
        botViewer.style.zIndex = '2';
        // Do NOT set pointer-events: none here
        botViewerRef.current.appendChild(botViewer);
      }
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Background Spline Model */}
      <div ref={backgroundViewerRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{zIndex: 0, pointerEvents: 'none'}} />
      {/* Bot Spline Model */}
      <div ref={botViewerRef} className="fixed inset-0 w-full h-full" style={{zIndex: 2}} />
    </>
  );
};

export default SplineModels; 