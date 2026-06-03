"use client";

import { motion } from "framer-motion";

export default function Availability() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mb-8 inline-flex max-w-full items-center gap-3 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-3 backdrop-blur-xl sm:px-5"
    >
      <div className="relative flex h-3 w-3 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
      </div>

      <p className="text-[11px] uppercase tracking-[0.16em] text-green-300 sm:text-sm sm:tracking-[0.2em]">
        Open for Internships & Collaborations
      </p>
    </motion.div>
  );
}
