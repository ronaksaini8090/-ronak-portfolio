"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Availability from "./Availability";
import MagneticButton from "./MagneticButton";
import Scene3D from "./Scene3D";
import SocialIcons from "./SocialIcons";
import TechStack from "./TechStack";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center overflow-x-hidden px-4 pb-20 pt-24 sm:px-6 md:pt-32">
      <Scene3D />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px] sm:h-[520px] sm:w-[520px]" />
      <div className="pointer-events-none absolute -right-20 top-20 h-[260px] w-[260px] rounded-full bg-purple-500/10 blur-[110px] sm:h-[320px] sm:w-[320px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative z-50 flex min-w-0 flex-col">
          <Availability />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 max-w-full text-[10px] uppercase tracking-[0.16em] text-cyan-400 sm:text-xs sm:tracking-[0.3em]"
          >
            FULL STACK DEVELOPER • CSE STUDENT • AI ENTHUSIAST
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-full break-words text-4xl font-black leading-[0.95] sm:text-5xl md:text-7xl"
          >
            Creating
            <br />
            <span className="block min-h-[92px] max-w-full break-words sm:min-h-[120px] md:min-h-[150px]">
              <TypeAnimation
                sequence={[
                  " scalable apps",
                  1500,
                  " AI products",
                  1500,
                  " clean interfaces",
                  1500,
                  " web platforms",
                  1500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="block max-w-full break-words text-cyan-400"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg"
          >
            I’m Ronak Saini, a Computer Science Engineering student and Full
            Stack Developer focused on high-performance web applications,
            AI-powered solutions, clean user experiences and scalable systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <span className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-medium text-green-400 sm:text-sm">
              Open to Internships
            </span>

            <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-xs font-medium text-purple-300 sm:text-sm">
              Available for Freelance
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative z-50 mt-10 grid w-full gap-4 sm:flex sm:flex-wrap"
          >
            <a href="#projects" className="block w-full sm:w-auto">
              <MagneticButton text="EXPLORE WORK" />
            </a>

            <a href="/resume.pdf" download className="block w-full sm:w-auto">
              <MagneticButton text="DOWNLOAD CV" />
            </a>

            <a href="#contact" className="block w-full sm:w-auto">
              <MagneticButton text="HIRE ME" />
            </a>
          </motion.div>

          <div className="relative z-50 mt-10">
            <SocialIcons />
          </div>

          <div className="relative z-50 mt-10">
            <TechStack />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-20 flex flex-col items-center lg:items-end"
        >
          <div className="pointer-events-none absolute h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[120px] md:h-[450px] md:w-[450px]" />
          <div className="pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-cyan-400/20 shadow-[0_0_60px_rgba(34,211,238,0.18)] md:h-[500px] md:w-[500px]" />

          <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-[1px] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 rounded-[35px] bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-pink-500/20 opacity-50 blur-md" />

            <div className="relative overflow-hidden rounded-[35px] bg-black">
              <Image
                src="/images/profile.png"
                alt="Ronak Saini"
                width={500}
                height={650}
                priority
                className="relative z-10 h-auto w-[240px] object-cover transition-transform duration-700 hover:scale-105 sm:w-[300px] md:w-[380px] lg:w-[420px]"
              />
            </div>
          </div>

          <div className="relative z-50 mt-5 flex justify-center">
            <div className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-center text-xs font-medium text-green-400 backdrop-blur-xl sm:text-sm">
              🟢 Available for Internships & Freelance Projects
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-sm text-cyan-400 md:block"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}
