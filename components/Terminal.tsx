"use client";

import { motion } from "framer-motion";

const lines = [
  "> Booting RonakOS...",
  "> Loading Full Stack Modules...",
  "> Connecting MongoDB & API Layer...",
  "> Compiling DSA Knowledge Base...",
  "> Activating AI Integrations...",
  "> Rendering Premium Portfolio UI...",
  "> System Status: Online",
];

export default function Terminal() {
  return (
    <section className="relative z-10 px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-5xl overflow-hidden rounded-[35px] border border-white/10 bg-black/60 shadow-[0_0_60px_rgba(34,211,238,0.08)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <p className="ml-4 text-sm text-gray-400">ronak@portfolio-terminal</p>
        </div>

        <div className="space-y-5 p-8 font-mono text-base text-cyan-400 sm:text-lg">
          {lines.map((line, index) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.18, duration: 0.45 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
