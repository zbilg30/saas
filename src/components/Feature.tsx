"use client";

import { useEffect, useRef } from "react";
import EcosystemIcon from "../assets/icons/ecosystem.svg";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

export const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const maskTemplate = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      if (!ref.current) return null;
      const rect = ref.current?.getBoundingClientRect();
      offsetX.set(e.x - rect.x);
      offsetY.set(e.y - rect.y);
    };

    window.addEventListener("mousemove", onMouse);
    return () => {
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div
      key={title}
      className="border relative border-white/30 px-5 py-10 text-center rounded-xl"
    >
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl cursor-pointer"
        style={{
          maskImage: maskTemplate,
          WebkitMaskImage: maskTemplate,
        }}
        ref={ref}
      />
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};
