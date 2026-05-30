"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({
  text,
}: {
  text: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = ref.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = `translate(0px, 0px)`;
    }
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.9 }}
      className="rounded-full border border-cyan-400 px-8 py-3 text-sm font-semibold tracking-[0.3em] text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
    >
      {text}
    </motion.button>
  );
}