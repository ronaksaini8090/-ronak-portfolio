"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute left-[-25%] top-[10%] h-[360px] w-[360px] rounded-full bg-cyan-500/20 blur-[160px] md:left-[-10%] md:h-[500px] md:w-[500px] md:blur-[180px]"
      />

      <motion.div
        animate={{ x: [0, -120, 120, 0], y: [0, 80, -80, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-25%] top-[30%] h-[360px] w-[360px] rounded-full bg-purple-500/20 blur-[160px] md:right-[-10%] md:h-[500px] md:w-[500px] md:blur-[180px]"
      />

      <motion.div
        animate={{ x: [0, 150, -150, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[20%] h-[360px] w-[360px] rounded-full bg-pink-500/10 blur-[160px] md:left-[30%] md:h-[500px] md:w-[500px] md:blur-[180px]"
      />
    </div>
  );
}
