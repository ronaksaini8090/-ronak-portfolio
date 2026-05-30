"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Cyan Aurora */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[180px]"
      />

      {/* Purple Aurora */}
      <motion.div
        animate={{
          x: [0, -120, 120, 0],
          y: [0, 80, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[180px]"
      />

      {/* Pink Aurora */}
      <motion.div
        animate={{
          x: [0, 150, -150, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] left-[30%] h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[180px]"
      />

    </div>
  );
}