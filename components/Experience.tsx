"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025",
    role: "MERN Stack Development Intern",
    company: "Regex Software Services",
    desc: "Completed internship focused on full stack development using React, Node.js, Express.js and MongoDB. Worked on scalable web applications, REST APIs and modern development workflows.",
    skills: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    year: "2025",
    role: "Hackathon Participant",
    company: "Smart India Hackathon & Beast Mode",
    desc: "Participated in national-level hackathons involving rapid prototyping, problem solving, teamwork and product development under strict deadlines.",
    skills: ["Problem Solving", "Teamwork", "Innovation", "Pitching"],
  },
  {
    year: "2023 - Present",
    role: "Computer Science Engineering Student",
    company: "BKBIET Pilani",
    desc: "Building strong foundations in Data Structures & Algorithms, DBMS, Operating Systems, Software Engineering and Full Stack Development.",
    skills: ["DSA", "DBMS", "Web Development", "Software Engineering"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 overflow-x-hidden px-4 py-24 sm:px-6 md:py-40"
    >
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-12 text-center text-[34px] font-black leading-none sm:text-5xl md:mb-20 md:text-7xl"
      >
        EXPERIENCE
      </motion.h2>

      <div className="mx-auto max-w-5xl">
        {experiences.map((item, index) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
            }}
            whileHover={{
              x: 8,
            }}
            className="group relative mb-10 border-l border-cyan-400/20 pl-6 sm:mb-14 sm:pl-10"
          >
            <div className="absolute left-[-8px] top-3 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.9)] transition-all duration-500 group-hover:scale-125 sm:left-[-10px] sm:h-5 sm:w-5" />

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/30 group-hover:bg-white/[0.07] sm:rounded-[28px] sm:p-8">
              <p className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium text-cyan-400 sm:text-sm">
                {item.year}
              </p>

              <h3 className="mt-5 break-words text-xl font-black sm:text-3xl">
                {item.role}
              </h3>

              <h4 className="mt-2 break-words text-base text-gray-300 sm:text-xl">
                {item.company}
              </h4>

              <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:text-lg">
                {item.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-400 sm:px-4 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}