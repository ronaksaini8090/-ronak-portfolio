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
    <section className="relative z-10 flex min-h-screen items-center overflow-hidden px-6 pt-32">

      {/* 3D Background */}
      <Scene3D />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-20 md:grid-cols-2">

        {/* LEFT */}
        <div>

          <Availability />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 text-sm uppercase tracking-[0.5em] text-cyan-400"
          >
            SOFTWARE ENGINEER • FULL STACK • AI • DSA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-black leading-tight md:text-7xl"
          >

            Building

            <br />

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
              className="text-cyan-400"
            />

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400"
          >

            I’m Ronak Saini — a Computer Science Engineer and Full Stack Developer
            focused on building futuristic digital experiences with scalable systems,
            cinematic interfaces, AI integrations, and advanced frontend engineering.

          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="mt-10 flex flex-wrap gap-5"
          >

<a href="#projects">
  <MagneticButton text="EXPLORE WORK" />
</a>

<a href="/resume.pdf" download>
  <MagneticButton text="DOWNLOAD CV" />
              </a>
          

          </motion.div>

          {/* Social */}
          <SocialIcons />

          {/* Stack */}
          <TechStack />

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
          className="relative flex animate-[float_6s_ease-in-out_infinite] justify-center"        >

          {/* Main Glow */}
          <div className="absolute h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

          {/* Ring */}
          <div className="absolute h-[500px] w-[500px] rounded-full border border-cyan-400/20 shadow-[0_0_60px_rgba(34,211,238,0.18)]" />

          {/* Image Container */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-[1px] backdrop-blur-xl">

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-pink-500/20 opacity-40 blur-md" />

            <div className="relative overflow-hidden rounded-[40px] bg-black">

              <Image
                src="/images/profile.png"
                alt="profile"
                width={500}
                height={650}
                className="relative z-10 object-cover transition-transform duration-700 hover:scale-105"              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}