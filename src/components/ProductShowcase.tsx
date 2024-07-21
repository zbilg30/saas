"use client";

import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: [
      "start end", //start of image
      "end end",
    ],
  });
  useEffect(() => {
    scrollYProgress.on("change", (latesValue) => {
      console.log(latesValue);
    });
  }, []);
  const translateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-black to-[#5D2CA8]">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Instuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your successes
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: translateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            ref={imageRef}
            src={appScreen}
            alt="App Screen"
            className="mt-14"
          />
        </motion.div>
      </div>
    </div>
  );
};
