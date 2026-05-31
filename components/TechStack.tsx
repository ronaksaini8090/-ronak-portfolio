"use client";

import { motion } from "framer-motion";

const stacks = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "GSAP",
  "Three.js",
  "AI",
];

export default function TechStack() {
  return (
    <div className="mt-10 flex max-w-2xl flex-wrap gap-3">

      {stacks.map((tech, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -5,
            scale: 1.05,
          }}
          transition={{
            duration: 0.2,
          }}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.15em] text-gray-300 backdrop-blur-xl sm:px-5 sm:py-3 sm:text-sm"
        >
          ✦ {tech}
        </motion.div>
      ))}

    </div>
  );
}