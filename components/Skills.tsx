"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "C++", icon: "⚙" },
  { name: "Data Structures", icon: "▦" },
  { name: "Algorithms", icon: "◇" },
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "✦" },
  { name: "Framer Motion", icon: "↗" },
  { name: "Node.js", icon: "⬢" },
  { name: "Express.js", icon: "EX" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Firebase", icon: "🔥" },
  { name: "Git", icon: "⌁" },
  { name: "GitHub", icon: "GH" },
  { name: "REST APIs", icon: "API" },
  { name: "AI Integration", icon: "AI" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-6 py-32">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-20 text-center text-5xl font-black tracking-wide text-white md:text-7xl"
      >
        TECH <span className="text-cyan-400">ARSENAL</span>
      </motion.h2>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.45 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-4 text-4xl font-black text-cyan-400 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold tracking-wide text-white">
                {skill.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
