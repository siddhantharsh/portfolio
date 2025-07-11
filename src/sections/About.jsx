import { motion, useAnimation, useInView } from "framer-motion";
import { Globe } from "../components/globe";
import CircularGallery from "../components/CircularGallery";
import { TypingText } from "../components/TypingText";
import BlurText from "../components/BlurText";
import { useEffect, useRef, useState } from "react";
import SkillsSection from "../sections/SkillsSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
};

const About = () => {
  const [bgY, setBgY] = useState(0);
  const sectionRef = useRef(null);
  const whatIDoRef = useRef(null);
  const [textState, setTextState] = useState('hidden'); // 'hidden', 'typing', 'visible', 'backspacing'
  const [displayText, setDisplayText] = useState('');
  const [displayDesc, setDisplayDesc] = useState('');
  
  const fullText = "What I Do";
  const fullDesc = "I design and build interactive products that combine performance, usability, and real-world impact.";

  // Typing animation effect
  useEffect(() => {
    if (textState === 'typing') {
      let titleIndex = 0;
      let descIndex = 0;
      let isTypingTitle = true;
      
      const typeInterval = setInterval(() => {
        if (isTypingTitle && titleIndex < fullText.length) {
          setDisplayText(fullText.substring(0, titleIndex + 1));
          titleIndex++;
        } else if (isTypingTitle && titleIndex >= fullText.length) {
          isTypingTitle = false;
          setTimeout(() => {
            // Small delay before starting description
          }, 300);
        } else if (!isTypingTitle && descIndex < fullDesc.length) {
          setDisplayDesc(fullDesc.substring(0, descIndex + 1));
          descIndex++;
        } else {
          setTextState('visible');
          clearInterval(typeInterval);
        }
      }, 50); // Much faster typing speed
      
      return () => clearInterval(typeInterval);
    }
  }, [textState]);

  // Backspace animation effect
  useEffect(() => {
    if (textState === 'backspacing') {
      let descIndex = displayDesc.length;
      let titleIndex = displayText.length;
      let isDeletingDesc = true;
      
      const backspaceInterval = setInterval(() => {
        if (isDeletingDesc && descIndex > 0) {
          setDisplayDesc(fullDesc.substring(0, descIndex - 1));
          descIndex--;
        } else if (isDeletingDesc && descIndex <= 0) {
          isDeletingDesc = false;
        } else if (!isDeletingDesc && titleIndex > 0) {
          setDisplayText(fullText.substring(0, titleIndex - 1));
          titleIndex--;
        } else {
          setTextState('hidden');
          setDisplayText('');
          setDisplayDesc('');
          clearInterval(backspaceInterval);
        }
      }, 30); // Fast backspace speed
      
      return () => clearInterval(backspaceInterval);
    }
  }, [textState, displayDesc.length, displayText.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !whatIDoRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Parallax: move faster for more dramatic effect
      const offset = rect.top / windowHeight;
      setBgY(offset * 200);

      // Text state logic based on scroll position
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const center = windowHeight / 2;
      const enterThreshold = windowHeight * 0.8; // Start typing when 80% of section is visible
      const exitThreshold = windowHeight * 0.2; // Start backspacing when only 20% of section is visible

      if (sectionTop < enterThreshold && sectionBottom > exitThreshold) {
        // Section is well in view - start or continue typing
        if (textState === 'hidden') {
          setTextState('typing');
        }
      } else if (sectionTop < exitThreshold && textState === 'visible') {
        // Section is exiting - start backspacing
        setTextState('backspacing');
      } else if (sectionTop > enterThreshold && textState !== 'hidden') {
        // Section is not in view - reset to hidden
        setTextState('hidden');
        setDisplayText('');
        setDisplayDesc('');
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [textState]);

  const shouldShowText = textState !== 'hidden';

  return (
    <section className="meisken-about-section" id="about" ref={sectionRef}>
      {/* Pinned What I Do text and parallax coding-pov image */}
      <div style={{ position: 'relative', width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0 }}>
        <motion.div
          ref={whatIDoRef}
          className="meisken-about-whatido-full meisken-about-whatido-centered"
          style={{
            position: 'sticky',
            top: '30vh',
            zIndex: 2,
            background: 'none',
            width: '100vw',
            display: shouldShowText ? 'flex' : 'none',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            userSelect: 'none',
            padding: '0 2rem', // Add padding to prevent text from touching edges
          }}
        >
          <h2 className="meisken-about-whatido-title-full" style={{ 
            whiteSpace: 'nowrap', 
            textAlign: 'center', 
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            marginBottom: '1rem'
          }}>
            {displayText}
            {textState === 'typing' && displayText.length < fullText.length && (
              <span className="typing-cursor">|</span>
            )}
            {textState === 'backspacing' && displayText.length > 0 && (
              <span className="typing-cursor">|</span>
            )}
          </h2>
          <motion.p
            className="meisken-about-whatido-desc-full"
      style={{
              maxWidth: '900px', 
              whiteSpace: 'pre-line', 
              textAlign: 'center', 
              fontSize: 'clamp(1.1rem, 2vw, 2rem)',
              lineHeight: '1.4',
              wordBreak: 'normal', // Allow natural line breaks
              overflowWrap: 'break-word' // Handle long words gracefully
            }}
          >
            {displayDesc}
            {textState === 'typing' && displayText.length >= fullText.length && displayDesc.length < fullDesc.length && (
              <span className="typing-cursor">|</span>
            )}
            {textState === 'backspacing' && displayDesc.length > 0 && (
              <span className="typing-cursor">|</span>
            )}
          </motion.p>
        </motion.div>
        {/* Parallax coding-pov image */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1,
            pointerEvents: 'none',
            background: `linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/assets/coding_povnew.gif') center ${bgY}px / cover no-repeat`,
            opacity: shouldShowText ? 1 : 0.5,
            transform: shouldShowText ? 'scale(1)' : 'scale(1.1)',
            transition: 'opacity 0.5s, transform 0.5s',
          }}
        />
          </div>
      {/* Skills Card Stack Section (moved above CircularGallery) */}
      <div style={{ height: '600px', position: 'relative', background: 'none', marginTop: '5rem', marginBottom: '5rem' }}>
        <SkillsSection />
      </div>
      <div style={{ height: '600px', position: 'relative', background: 'none', marginTop: '5rem' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
      </div>
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-24px); }
        }
        
        .typing-cursor {
          animation: blink 1s infinite;
          font-weight: normal;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default About;