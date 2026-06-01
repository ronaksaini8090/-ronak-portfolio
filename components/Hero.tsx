"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import MagneticButton from "./MagneticButton";
import Availability from "./Availability";
import SocialIcons from "./SocialIcons";
import TechStack from "./TechStack";
import Scene3D from "./Scene3D";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20">
      
      <Scene3D />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}
        <div className="flex flex-col">

          <Availability />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 text-xs uppercase tracking-[0.35em] text-cyan-400 sm:text-sm"
          >
            FULL STACK DEVELOPER • CSE STUDENT • AI ENTHUSIAST • PROBLEM SOLVER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-black leading-[0.95] md:text-7xl"
          >
            Building

            <br />

            <span className="block min-h-[120px] md:min-h-[150px]">
              <TypeAnimation
                sequence={[
                  " futuristic systems",
                  1500,
                  " cinematic products",
                  1500,
                  " AI-powered platforms",
                  1500,
                  " immersive experiences",
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
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            I’m Ronak Saini, a Computer Science Engineering student and Full
            Stack Developer passionate about creating high-performance web
            applications, AI-powered solutions, and immersive user experiences
            using modern technologies.
          </motion.p>

          {/* Internship Notice */}
          <p className="mt-6 font-semibold text-cyan-400">
            Currently seeking Software Development Internship opportunities.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
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

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="relative flex flex-col items-center lg:items-end"
        >
          <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px] md:h-[450px] md:w-[450px]" />

          <div className="absolute h-[340px] w-[340px] rounded-full border border-cyan-400/20 shadow-[0_0_60px_rgba(34,211,238,0.18)] md:h-[500px] md:w-[500px]" />

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-[1px] backdrop-blur-xl">

            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-pink-500/20 opacity-40 blur-md" />

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

          {/* Quick Stats */}
          <div className="mt-6 grid w-full max-w-[420px] grid-cols-3 gap-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
              <h3 className="text-2xl font-black text-cyan-400">4+</h3>
              <p className="text-xs text-gray-400">
                Hackathons
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
              <h3 className="text-2xl font-black text-cyan-400">6+</h3>
              <p className="text-xs text-gray-400">
                Certificates
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
              <h3 className="text-2xl font-black text-cyan-400">
                CSE
              </h3>
              <p className="text-xs text-gray-400">
                Student
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}