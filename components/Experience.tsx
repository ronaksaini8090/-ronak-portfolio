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
    <section id="experience" className="relative z-10 px-6 py-40">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-24 text-center text-5xl font-black md:text-7xl"
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
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ x: 8 }}
            className="group relative mb-14 border-l border-cyan-400/20 pl-10"
          >
            <div className="absolute left-[-10px] top-2 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.9)] transition-all duration-500 group-hover:scale-125" />

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/30 group-hover:bg-white/[0.07]">
              <p className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-400">
                {item.year}
              </p>
              <h3 className="mt-5 text-3xl font-black">{item.role}</h3>
              <h4 className="mt-2 text-xl text-gray-300">{item.company}</h4>
              <p className="mt-5 text-lg leading-relaxed text-gray-400">
                {item.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400"
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
