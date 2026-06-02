"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Availability from "./Availability";
import MagneticButton from "./MagneticButton";
import Scene3D from "./Scene3D";
import SocialIcons from "./SocialIcons";
import TechStack from "./TechStack";

const heroStats = [
  { value: "2+", label: "Hackathons" },
  { value: "2", label: "Certificates" },
  { value: "CSE", label: "Student" },
];

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 md:pt-32">
      <Scene3D />

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute -right-20 top-20 h-[320px] w-[320px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col">
          <Availability />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm"
          >
            FULL STACK DEVELOPER • CSE STUDENT • AI ENTHUSIAST
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-black leading-[0.95] md:text-7xl"
          >
            Creating
            <br />
            <span className="block min-h-[120px] md:min-h-[150px]">
              <TypeAnimation
                sequence={[
                  " scalable applications",
                  1500,
                  " AI-powered products",
                  1500,
                  " immersive interfaces",
                  1500,
                  " modern web platforms",
                  1500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="block text-cyan-400"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
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
            <span className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-400">
              Open to Internships
            </span>
            <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm font-medium text-purple-300">
              Available for Freelance
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <a href="#projects">
              <MagneticButton text="EXPLORE WORK" />
            </a>
            <a href="/resume.pdf" download>
              <MagneticButton text="DOWNLOAD CV" />
            </a>
            <a href="#contact">
              <MagneticButton text="HIRE ME" />
            </a>
          </motion.div>

          <div className="mt-10">
            <SocialIcons />
          </div>

          <div className="mt-10">
            <TechStack />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative flex flex-col items-center lg:items-end"
        >
          <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px] md:h-[450px] md:w-[450px]" />
          <div className="absolute h-[340px] w-[340px] rounded-full border border-cyan-400/20 shadow-[0_0_60px_rgba(34,211,238,0.18)] md:h-[500px] md:w-[500px]" />

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-[1px] backdrop-blur-xl">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-pink-500/20 opacity-50 blur-md" />
            <div className="relative overflow-hidden rounded-[40px] bg-black">
              <Image
                src="/images/profile.png"
                alt="Ronak Saini"
                width={500}
                height={650}
                priority
                className="relative z-10 h-auto w-[260px] object-cover transition-transform duration-700 hover:scale-105 sm:w-[320px] md:w-[380px] lg:w-[420px]"
              />
            </div>
          </div>

          <div className="mt-6 grid w-full max-w-[420px] grid-cols-3 gap-2 sm:gap-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl transition hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
              >
                <h3 className="text-2xl font-black text-cyan-400">{stat.value}</h3>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-center lg:justify-end">
            <div className="rounded-full border border-green-400/20 bg-green-400/10 px-5 py-2 text-center text-sm font-medium text-green-400 backdrop-blur-xl">
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
