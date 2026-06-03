"use client";

import { motion } from "framer-motion";

const profileCards = [
  { label: "GitHub", value: "ronaksaini8090" },
  { label: "Portfolio Repo", value: "Next.js + TypeScript" },
  { label: "Current Focus", value: "Full Stack Projects" },
  { label: "Learning", value: "DSA + AI Integration" },
];

export default function GitHubProfile() {
  return (
    <section id="github" className="relative z-10 overflow-x-hidden px-4 py-28 sm:px-6 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8 md:rounded-[40px] md:p-10"
      >
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm sm:tracking-[0.4em]">
              DEVELOPER PROFILE
            </p>
            <h2 className="mt-4 break-words text-4xl font-black md:text-6xl">
              GitHub & Code
            </h2>
            <p className="mt-6 leading-relaxed text-gray-400">
              Explore my repositories, source code and full stack development journey. I keep my work public so recruiters and collaborators can review my practical skills.
            </p>
            <a
              href="https://github.com/ronaksaini8090"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-cyan-400 px-8 py-3 text-sm font-bold tracking-[0.22em] text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black sm:w-auto"
            >
              VIEW GITHUB
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {profileCards.map((card) => (
              <div
                key={card.label}
                className="rounded-3xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  {card.label}
                </p>
                <h3 className="mt-4 break-words text-xl font-black text-white">
                  {card.value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
