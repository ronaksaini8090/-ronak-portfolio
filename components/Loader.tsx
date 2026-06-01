"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl font-black text-cyan-400"
          >
            RONAK
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "220px" }}
            transition={{ duration: 2 }}
            className="mt-8 h-[4px] rounded-full bg-cyan-400"
          />

          <p className="mt-4 text-sm tracking-[0.3em] text-gray-400">
            LOADING PORTFOLIO
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}