"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "2+", label: "Hackathons" },
  { number: "2", label: "Certificates" },
  { number: "16+", label: "Technologies" },
  { number: "2027", label: "Graduation" },
];

export default function Stats() {
  return (
    <section className="relative z-10 px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.7 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group rounded-[35px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
          >
            <h3 className="text-5xl font-black text-cyan-400">
              {stat.number}
            </h3>
            <p className="mt-4 text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
