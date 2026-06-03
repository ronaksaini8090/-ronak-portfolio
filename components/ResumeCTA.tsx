"use client";

import { motion } from "framer-motion";

export default function ResumeCTA() {
  return (
    <section className="relative z-10 overflow-x-hidden px-4 py-28 sm:px-6 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-[35px] border border-cyan-400/20 bg-cyan-400/10 p-6 text-center backdrop-blur-xl sm:p-10 md:rounded-[40px]"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 sm:text-sm sm:tracking-[0.4em]">
          RESUME
        </p>
        <h2 className="mt-4 break-words text-3xl font-black sm:text-4xl md:text-6xl">
          Ready to review my profile?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
          Download my resume to quickly view my education, technical skills,
          certificates, training and project experience.
        </p>
        <div className="mt-8 grid gap-4 sm:flex sm:flex-wrap sm:justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-bold tracking-[0.22em] text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto"
          >
            VIEW RESUME
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex w-full items-center justify-center rounded-full border border-cyan-400 px-8 py-3 text-sm font-bold tracking-[0.22em] text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-black sm:w-auto"
          >
            DOWNLOAD CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
