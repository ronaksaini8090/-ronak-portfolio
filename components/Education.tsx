"use client";

import { motion } from "framer-motion";

const focusAreas = ["CSE", "Full Stack Development", "DSA", "Problem Solving"];
const coursework = ["DBMS", "Operating Systems", "Computer Networks", "OOP"];

export default function Education() {
  return (
    <section id="education" className="relative z-10 px-6 py-40">
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
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileHover={{ y: -8, scale: 1.01 }}
          className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              BACHELOR OF TECHNOLOGY
            </p>
            <h3 className="mt-4 text-3xl font-black">
              Computer Science Engineering
            </h3>
            <p className="mt-4 text-lg text-gray-400">
              BK Birla Institute of Engineering & Technology, Pilani
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <p className="text-gray-500">2023 – Present</p>
              <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-400">
                Pursuing
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                Relevant Coursework
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
