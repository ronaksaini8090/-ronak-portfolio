"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 px-6 py-14">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">

        {/* Left */}
        <div>

          <h2 className="text-3xl font-black tracking-wide">
            RONAK<span className="text-cyan-400">.</span>
          </h2>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-400">
            Full Stack Developer focused on futuristic interfaces,
            AI-powered systems, scalable architecture, and cinematic digital experiences.
          </p>

        </div>

        {/* Center */}
        <div className="flex gap-8 text-sm uppercase tracking-[0.3em] text-gray-400">

          <a
            href="/"
            className="transition-all duration-300 hover:text-cyan-400"
          >
            Home
          </a>

          <a
            href="#projects"
            className="transition-all duration-300 hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition-all duration-300 hover:text-cyan-400"
          >
            Contact
          </a>

        </div>

        {/* Right */}
        <div className="text-center md:text-right">

          <p className="text-sm text-gray-400">
            © 2026 Ronak Saini
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-cyan-400">
            Built With Next.js
          </p>

        </div>

      </div>

    </footer>
  );
}