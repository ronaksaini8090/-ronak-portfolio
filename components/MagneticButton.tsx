"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({ text }: { text: string }) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const button = ref.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      className="inline-flex w-full items-center justify-center rounded-full border border-cyan-400 px-6 py-3 text-xs font-semibold tracking-[0.22em] text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black sm:w-auto sm:px-8 sm:text-sm sm:tracking-[0.3em]"
    >
      {text}
    </motion.button>
  );
}
