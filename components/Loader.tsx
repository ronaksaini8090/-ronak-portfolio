"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2.2,
        duration: 1,
      }}
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="text-center"
      >

        <h1 className="text-5xl font-black tracking-[0.5em] text-cyan-400 md:text-7xl">
          RONAK
        </h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
          }}
          className="mt-6 h-[2px] bg-cyan-400"
        />

      </motion.div>

    </motion.div>
  );
}