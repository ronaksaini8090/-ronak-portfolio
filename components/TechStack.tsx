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
    <div className="mt-12 flex max-w-2xl flex-wrap gap-4">

      {stacks.map((tech, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + index,
          }}
          className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.2em] text-gray-300 backdrop-blur-xl"
        >

          ✦ {tech}

        </motion.div>
      ))}

    </div>
  );
}