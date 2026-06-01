"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="relative z-10 px-6 py-32">

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-20 text-center text-5xl font-black md:text-7xl"
      >
        EDUCATION
      </motion.h2>

      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            BACHELOR OF TECHNOLOGY
          </p>

          <h3 className="mt-4 text-3xl font-black">
            Computer Science Engineering
          </h3>

          <p className="mt-4 text-lg text-gray-400">
            BK Birla Institute of Engineering & Technology, Pilani
          </p>

          <p className="mt-2 text-gray-500">
            2023 – Present
          </p>

        </motion.div>

      </div>

    </section>
  );
}