"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-40">

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2"
      >

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-cyan-400">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-black leading-tight md:text-6xl">
            Passionate about building futuristic digital systems.
          </h2>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6 text-lg leading-relaxed text-gray-400"
        >

          <p>
            I’m Ronak Saini, a Computer Science Engineering student from
            BK Birla Institute of Engineering & Technology, Pilani with a strong
            focus on Full Stack Development, Data Structures & Algorithms,
            and modern web technologies.
          </p>

          <p>
            I enjoy creating immersive user experiences using technologies like
            React, Next.js, Tailwind CSS, and AI-powered systems while keeping
            performance and scalability at the core.
          </p>

          <p>
            Beyond development, I actively participate in hackathons,
            competitive events, and technical communities that continuously
            challenge my creativity and problem-solving mindset.
          </p>

        </motion.div>

      </motion.div>

      {/* ACHIEVEMENTS */}
      <div className="mx-auto mt-24 grid max-w-7xl gap-8 md:grid-cols-3">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <h3 className="mb-4 text-3xl font-black text-cyan-400">
            2nd Rank
          </h3>

          <p className="text-gray-400">
            Achieved 2nd position in Beast Mode Hackathon 2024.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <h3 className="mb-4 text-3xl font-black text-cyan-400">
            SIH Finalist
          </h3>

          <p className="text-gray-400">
            Participated in Smart India Hackathon 2024 & 2025.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <h3 className="mb-4 text-3xl font-black text-cyan-400">
            MERN Stack
          </h3>

          <p className="text-gray-400">
            Experienced in building scalable full stack applications.
          </p>

        </motion.div>

      </div>

    </section>
  );
}