"use client";

import { motion } from "framer-motion";

export default function ResumeCTA() {
  return (
    <section className="relative z-10 px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-cyan-400/20 bg-cyan-400/10 p-10 text-center backdrop-blur-xl"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
          RESUME
        </p>
        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Ready to review my profile?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-gray-300">
          Download my resume to quickly view my education, technical skills,
          certificates, training and project experience.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-8 py-3 text-sm font-bold tracking-[0.25em] text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            VIEW RESUME
          </a>
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-cyan-400 px-8 py-3 text-sm font-bold tracking-[0.25em] text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
          >
            DOWNLOAD CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
