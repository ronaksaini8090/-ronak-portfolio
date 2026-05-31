"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "GSAP",
  "Framer Motion",
  "Three.js",
  "AI Integration",
  "Node.js",
  "MongoDB",
  "Firebase",
  "UI/UX Design",
];

export default function Skills() {
  return (
    <section
  id="skills"
  className="relative z-10 px-6 py-32"
>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-20 text-center text-5xl font-black tracking-wide text-white md:text-7xl"
      >
        TECH <span className="text-cyan-400">STACK</span>
      </motion.h2>

      {/* Skills Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: index * 0.05,
              duration: 0.5,
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">

              <div className="mb-4 text-3xl text-cyan-400">
                ✦
              </div>

              <h3 className="text-lg font-bold tracking-wide text-white">
                {skill}
              </h3>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}