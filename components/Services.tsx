"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    desc: "Building cinematic and futuristic interfaces with modern technologies.",
  },
  {
    title: "AI Integration",
    desc: "Creating intelligent AI-powered applications and assistants.",
  },
  {
    title: "3D Experiences",
    desc: "Immersive web experiences using Three.js and WebGL.",
  },
];

export default function Services() {
  return (
    <section className="relative z-10 py-40 px-6">

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-20 text-center text-5xl font-black md:text-7xl"
      >
        MY EXPERTISE
      </motion.h2>

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1 }}
            whileHover={{
              y: -15,
              scale: 1.03,
            }}
            className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">

              <div className="mb-6 h-14 w-14 rounded-2xl bg-cyan-400/20" />

              <h3 className="mb-4 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}