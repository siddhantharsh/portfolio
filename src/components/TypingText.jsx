import React, { useEffect, useState } from "react";

export const TypingText = ({ text, className = "", startDelay = 0 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeout;
    let i = 0;
    const type = () => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
        timeout = setTimeout(type, 40); // typing speed
      }
    };
    const start = setTimeout(type, startDelay);
    return () => {
      clearTimeout(timeout);
      clearTimeout(start);
    };
  }, [text, startDelay]);

  return (
    <span className={className}>
      {displayed.split("").map((char, idx) => (
        <span
          key={idx}
          style={{
            opacity: 0,
            animation: `fadeIn 0.3s forwards`,
            animationDelay: `${idx * 0.03}s`,
            display: "inline-block"
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </span>
  );
}; 