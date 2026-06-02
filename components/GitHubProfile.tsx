"use client";

import { motion } from "framer-motion";

export default function GitHubProfile() {
  return (
    <section id="github" className="relative z-10 px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10"
      >
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
              DEVELOPER PROFILE
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              GitHub Activity
            </h2>
            <p className="mt-6 leading-relaxed text-gray-400">
              Explore my repositories, source code, experiments and upcoming
              full stack projects on GitHub.
            </p>
            <a
              href="https://github.com/ronaksaini8090"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full border border-cyan-400 px-8 py-3 text-sm font-bold tracking-[0.25em] text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
            >
              VIEW GITHUB
            </a>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-3">
              <img
                src="https://github-readme-stats.vercel.app/api?username=ronaksaini8090&show_icons=true&theme=tokyonight&hide_border=true"
                alt="Ronak Saini GitHub stats"
                className="w-full rounded-2xl"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-3">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=ronaksaini8090&theme=tokyonight&hide_border=true"
                alt="Ronak Saini GitHub streak"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
