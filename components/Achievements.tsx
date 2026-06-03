"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "Beast Mode Hackathon",
    value: "2nd Rank",
    desc: "Secured 2nd position by building and presenting a practical tech solution under competition pressure.",
  },
  {
    title: "Smart India Hackathon",
    value: "Participant",
    desc: "Collaborated with a team on problem solving, ideation, prototype development and presentation.",
  },
  {
    title: "MERN Training",
    value: "Internship",
    desc: "Completed full stack development training with focus on React, Node.js, MongoDB and application workflows.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative z-10 px-4 sm:px-6 py-24 md:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          mb-14
          text-center
          text-3xl
          sm:text-5xl
          md:text-7xl
          font-black
          leading-none
        "
      >
        ACHIEVEMENTS
      </motion.h2>

      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.75,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              bg-white/5
              p-6
              sm:p-8
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-cyan-400/30
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cyan-400">
                {item.title}
              </p>

              <h3 className="mt-4 text-3xl sm:text-4xl font-black text-white">
                {item.value}
              </h3>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}