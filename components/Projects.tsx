"use client";

import Image from "next/image";
import Spotlight from "./Spotlight";
import { motion } from "framer-motion";
const projects = [
  {
    title: "AI SaaS Platform",
    desc: "A futuristic AI-powered SaaS dashboard with real-time analytics and automation.",
    tech: ["Next.js", "AI", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    title: "3D Portfolio Experience",
    desc:
      "Immersive cinematic portfolio using Three.js and futuristic motion systems.",
    tech: ["Three.js", "Framer Motion", "GSAP"],
    demo: "#",
    github: "#",
  },
  {
    title: "Cyberpunk Commerce",
    desc:
      "Next-generation eCommerce experience with advanced UI interactions.",
    tech: ["React", "MongoDB", "Stripe"],
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
<section
  id="projects"
  className="relative z-10 px-6 py-40"
>
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-24 text-center text-5xl font-black md:text-7xl"
      >
        FEATURED PROJECTS
      </motion.h2>

      <div className="mx-auto flex max-w-7xl flex-col gap-12">

        {projects.map((project, index) => (
          <Spotlight key={index}>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 1,
              }}
              whileHover={{
                scale: 1.02,
                rotateX: 4,
                rotateY: 4,
              }}
              className="group relative transform-gpu overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">

                {/* LEFT */}
                <div>

                  <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
                    CASE STUDY
                  </p>

                  <h3 className="mb-6 text-4xl font-black">
                    {project.title}
                  </h3>

                  <p className="mb-8 text-lg text-gray-400">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8 flex flex-wrap gap-3">

                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                  <a

                  href={project.demo} target="_blank" rel="noopener noreferrer"

>
                    <button className="rounded-full border border-cyan-400 px-8 py-3 text-sm font-semibold tracking-widest text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black">
                      LIVE DEMO
                      </button>
                      </a>

                      <a href={project.github} target="_blank" rel="noopener noreferrer" >
                    <button className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black">
                      GITHUB
                      </button>
                      </a>
                  </div>

                </div>

                {/* RIGHT */}
                <div className="relative h-[300px] overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">

                  <div className="absolute inset-0 backdrop-blur-xl" />

                  <Image
                    src={`/images/project${index + 1}.png`}
                    alt="project"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/30" />

                </div>

              </div>

            </motion.div>

          </Spotlight>
        ))}

      </div>

    </section>
  );
}