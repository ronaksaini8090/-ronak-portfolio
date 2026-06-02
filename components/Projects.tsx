"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Spotlight from "./Spotlight";

const projects = [
  {
    title: "Personal Portfolio",
    desc: "A high-performance portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion. Designed with premium animations, responsive layouts and recruiter-focused storytelling.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    demo: "https://ronak-portfolio-beta.vercel.app",
    github: "https://github.com/ronaksaini8090/-ronak-portfolio",
    status: "LIVE",
    image: "/images/project1.png",
  },
  {
    title: "MERN Stack Application",
    desc: "A full stack application concept focused on authentication, dashboards, REST APIs and database-driven workflows. Final live version will be published soon.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "#",
    github: "#",
    status: "IN DEVELOPMENT",
    image: "/images/project2.png",
  },
  {
    title: "AI Powered Web Platform",
    desc: "An upcoming AI-integrated platform planned around smart automation, clean UI and scalable frontend architecture using modern web technologies.",
    tech: ["Next.js", "AI", "APIs", "Tailwind"],
    demo: "#",
    github: "#",
    status: "PLANNED",
    image: "/images/project3.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-6 py-40">
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
          <Spotlight key={project.title}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 1 }}
              whileHover={{ scale: 1.015 }}
              className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_45px_rgba(34,211,238,0.12)] md:p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold tracking-widest text-cyan-400">
                      PROJECT 0{index + 1}
                    </span>
                    <span
                      className={`rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-xl ${
                        project.status === "LIVE"
                          ? "bg-green-500/20 text-green-400"
                          : project.status === "IN DEVELOPMENT"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-purple-500/20 text-purple-300"
                      }`}
                    >
                      ● {project.status}
                    </span>
                  </div>

                  <h3 className="mb-6 text-4xl font-black leading-tight">
                    {project.title}
                  </h3>

                  <p className="mb-8 text-lg leading-relaxed text-gray-400">
                    {project.desc}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.demo !== "#" ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-cyan-400 px-8 py-3 text-sm font-semibold tracking-widest text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
                      >
                        LIVE DEMO
                      </a>
                    ) : (
                      <span className="rounded-full border border-white/10 px-8 py-3 text-sm font-semibold tracking-widest text-gray-500">
                        COMING SOON
                      </span>
                    )}

                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
                      >
                        SOURCE CODE
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative h-[280px] overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 md:h-[320px]">
                  <div
                    className={`absolute left-4 top-4 z-20 rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-xl ${
                      project.status === "LIVE"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status === "LIVE" ? "● LIVE" : "● COMING SOON"}
                  </div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/35" />
                </div>
              </div>
            </motion.div>
          </Spotlight>
        ))}
      </div>
    </section>
  );
}
