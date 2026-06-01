"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    label: "Projects",
  },
  {
    number: "300+",
    label: "DSA Problems",
  },
  {
    number: "5+",
    label: "Hackathons",
  },
  {
    number: "2+",
    label: "Years Learning",
  },
];

export default function Stats() {
  return (
    <section className="relative z-10 px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.8,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="rounded-[35px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
          >
            <h3 className="text-5xl font-black text-cyan-400">
              {stat.number}
            </h3>

            <p className="mt-4 text-lg text-gray-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}