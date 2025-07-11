"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data, isCertification, decryptedTextComponent: DecryptedText }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
  };

  if (isCertification) {
    return (
      <section className="meisken-certificates-section">
        <motion.h2
          className="meisken-certificates-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeInUp}
        >
          Certificates
        </motion.h2>
        <div className="meisken-certificates-table">
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              className="meisken-certificates-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              <span className="meisken-certificates-number">{String(idx + 1).padStart(2, '0')}.</span>
              <span className="meisken-certificates-title">{item.title}</span>
              <span className="meisken-certificates-desc">{item.contents && item.contents.length > 0 ? item.contents[0] : item.date}</span>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div className="relative" ref={containerRef}>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
                <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-white">
                <h3>{item.date}</h3>
                  <h3 className="text-3xl text-neutral-200">{DecryptedText ? <DecryptedText text={item.title} animateOn="view" revealDirection="center" /> : item.title}</h3>
                  <h3 className="text-3xl text-neutral-300">{item.job}</h3>
              </div>
            </div>
            {/* Only render right-side content for achievements, not certifications */}
            <div className="relative w-full pl-20 pr-4 md:pl-4">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="block mb-4 text-2xl font-bold text-left text-white md:hidden ">
                <h3>{item.date}</h3>
                <h3>{item.job}</h3>
              </div>
              {item.contents.map((content, idx) => (
                <p className="mb-3 font-normal text-neutral-200 text-lg md:text-xl lg:text-2xl" key={idx}>
                  {content === "Certification"
                    ? ""
                    : DecryptedText
                      ? <DecryptedText text={content} animateOn="view" revealDirection="start" />
                      : content}
                </p>
              ))}
            </div>
              </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-white via-neutral-400 to-black from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
