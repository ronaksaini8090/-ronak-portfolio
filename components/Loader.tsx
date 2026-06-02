"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-5xl font-black tracking-[0.35em] text-cyan-400 md:text-7xl">
              RONAK
            </h1>
            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-gray-500">
              Initializing Portfolio System
            </p>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "260px" }}
            transition={{ duration: 1.45, ease: "easeInOut" }}
            className="mt-8 h-[3px] rounded-full bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
