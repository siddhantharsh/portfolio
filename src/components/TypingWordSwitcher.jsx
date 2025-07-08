import React, { useEffect, useState } from "react";

export const TypingWordSwitcher = ({ words, className = "", startDelay = 0 }) => {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    let word = words[currentWordIdx];
    let i = typing ? 0 : word.length;
    let delay = startDelay;

    const type = () => {
      if (typing) {
        if (i <= word.length) {
          setDisplayed(word.slice(0, i));
          i++;
          timeout = setTimeout(type, 60);
        } else {
          timeout = setTimeout(() => setTyping(false), 1200);
        }
      } else {
        if (i >= 0) {
          setDisplayed(word.slice(0, i));
          i--;
          timeout = setTimeout(type, 40);
        } else {
          setTyping(true);
          setCurrentWordIdx((idx) => (idx + 1) % words.length);
        }
      }
    };
    timeout = setTimeout(type, delay);
    return () => clearTimeout(timeout);
  }, [currentWordIdx, typing, words, startDelay]);

  return (
    <span className={className}>
      {displayed}
      <span className="blinking-cursor">|</span>
      <style>{`
        .blinking-cursor {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to { opacity: 0; }
        }
      `}</style>
    </span>
  );
}; 