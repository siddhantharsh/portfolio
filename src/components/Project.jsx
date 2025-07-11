import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}) => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [12, -12]);
  const rotateY = useTransform(x, [-50, 50], [-12, 12]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    x.set(px - rect.width / 2);
    y.set(py - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`transition-all duration-500 ease-out bg-neutral-900/90 border border-white/10 shadow-xl rounded-3xl max-w-xl mx-auto flex flex-col cursor-pointer
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{
        minHeight: 340,
        perspective: 1200,
        rotateX,
        rotateY,
        scale: hovered ? 1.04 : 1,
        boxShadow: hovered ? '0 12px 32px 0 rgba(0,0,0,0.18)' : '0 4px 16px 0 rgba(0,0,0,0.10)',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ zIndex: 20 }}
    >
      {/* Project Image or Placeholder */}
      <div className="w-full h-56 bg-neutral-800 rounded-t-3xl flex items-center justify-center overflow-hidden mb-0">
        {image ? (
          <img src={image} alt={title + ' project image'} className="object-cover w-full h-full" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-500 text-lg">No Image</div>
        )}
      </div>
      <div className="flex flex-col gap-1 p-6">
        <p className="text-2xl font-extrabold mb-1 text-white font-sans leading-tight">{title}</p>
        <p className="text-base text-neutral-300 mb-2 font-sans">{description}</p>
        <div className="flex gap-3 flex-wrap mb-2">
            {tags.map((tag) => (
            <span key={tag.id} className="text-xs bg-neutral-800 px-2 py-1 rounded text-white/80 font-sans">{tag.name}</span>
            ))}
      </div>
      {/* Show details only on hover */}
      {subDescription && (
        <ul className={`list-disc list-outside pl-6 text-sm text-neutral-400 mt-2 transition-all duration-500 ${hovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          {subDescription.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      )}
      {href && (
          <a href={href} target="_blank" rel="noopener noreferrer" className="mt-3 text-blue-400 underline text-sm hover:text-blue-300 transition-colors font-sans">View Source</a>
      )}
    </div>
    </motion.div>
  );
};

export default Project;
