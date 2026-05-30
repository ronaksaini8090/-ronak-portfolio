"use client";

import { motion } from "framer-motion";

const techs = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Three.js",
  "Node.js",
  "MongoDB",
  "Firebase",
  "AI",
  "DSA",
  "UI/UX",
  "Vercel",
];

export default function TechMarquee() {
  return (
    <section className="relative z-10 overflow-hidden py-20">

      <div className="relative flex overflow-hidden">

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
          className="flex min-w-max gap-6"
        >

          {[...techs, ...techs].map((tech, index) => (
            <div
              key={index}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-8 py-4 text-lg font-semibold text-cyan-400 backdrop-blur-xl"
            >
              {tech}
            </div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}