"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026",
    role: "Full Stack Developer",
    company: "Freelance & Personal Projects",
    desc: "Building futuristic full stack applications with cinematic UI and scalable backend systems.",
  },
  {
    year: "2025",
    role: "Frontend Engineer",
    company: "Advanced Portfolio Systems",
    desc: "Created immersive interfaces using React, Next.js, Framer Motion and Three.js.",
  },
  {
    year: "2024",
    role: "Computer Science Journey",
    company: "Learning & Growth",
    desc: "Focused on DSA, development, AI integrations and advanced frontend engineering.",
  },
];

export default function Experience() {
  return (
    <section className="relative z-10 px-6 py-40">

      <motion.h2
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="mb-24 text-center text-5xl font-black md:text-7xl"
      >
        EXPERIENCE
      </motion.h2>

      <div className="mx-auto max-w-5xl">

        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
            }}
            className="relative mb-12 border-l border-cyan-400/30 pl-10"
          >

            {/* Dot */}
            <div className="absolute left-[-9px] top-2 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />

            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-cyan-400">
              {item.year}
            </p>

            <h3 className="text-3xl font-black">
              {item.role}
            </h3>

            <h4 className="mt-2 text-xl text-gray-300">
              {item.company}
            </h4>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-400">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}