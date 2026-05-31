"use client";

import {
  Code2,
  BrainCircuit,
  Database,
  Smartphone,
} from "lucide-react";

import { motion } from "framer-motion";

const expertise = [
  {
    title: "Frontend Development",
    desc: "Modern React, Next.js and high-performance user interfaces.",
    icon: Code2,
  },
  {
    title: "AI Integration",
    desc: "AI-powered applications, APIs and intelligent workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Backend Systems",
    desc: "Scalable APIs, databases and production-ready architectures.",
    icon: Database,
  },
  {
    title: "Responsive Design",
    desc: "Pixel-perfect experiences across desktop, tablet and mobile.",
    icon: Smartphone,
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative z-10 px-6 py-32">

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center text-5xl font-black md:text-7xl"
      >
        MY <span className="text-cyan-400">EXPERTISE</span>
      </motion.h2>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

        {expertise.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
              group
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              "
            >
              <Icon className="mb-6 h-12 w-12 text-cyan-400" />

              <h3 className="mb-4 text-2xl font-black">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}