"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "2nd Rank",
    desc: "Achieved 2nd position in Beast Mode Hackathon 2024.",
  },
  {
    title: "SIH Participant",
    desc: "Participated in Smart India Hackathon 2024 & 2025.",
  },
  {
    title: "MERN Stack",
    desc: "Trained in building scalable full stack applications.",
  },
];

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
            Transforming ideas into scalable digital solutions.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6 text-lg leading-relaxed text-gray-400"
        >
          <p>
            I’m Ronak Saini, a Computer Science Engineering student at BKBIET
            Pilani. I specialize in Full Stack Development, Data Structures &
            Algorithms, and building modern web applications with a strong focus
            on performance and user experience.
          </p>
          <p>
            I enjoy creating immersive user experiences using React, Next.js,
            Tailwind CSS and AI-powered systems while keeping performance,
            accessibility and scalability at the core.
          </p>
          <p>
            Beyond development, I actively participate in hackathons,
            competitive events and technical communities that challenge my
            creativity and problem-solving mindset.
          </p>
          <p className="border-l-2 border-cyan-400 pl-4 text-cyan-300">
            My long-term goal is to become a Software Engineer who builds
            products that impact millions of users while continuously learning
            and adapting to emerging technologies.
          </p>
        </motion.div>
      </motion.div>

      <div className="mx-auto mt-24 grid max-w-7xl gap-8 md:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.18, duration: 0.8 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.14)]"
          >
            <h3 className="mb-4 text-3xl font-black text-cyan-400">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
