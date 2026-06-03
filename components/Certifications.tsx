"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "MERN Stack Development Internship",
    issuer: "Regex Software Services",
    year: "2025",
    image: "/images/cert1.png",
    skills: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "Full Stack Developer Bootcamp",
    issuer: "GeeksforGeeks",
    year: "2025",
    image: "/images/cert2.png",
    skills: ["Frontend", "Backend", "JavaScript", "Projects"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 overflow-x-hidden px-4 py-32 sm:px-6 md:py-40">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-16 break-words text-center text-4xl font-black md:mb-24 md:text-7xl"
      >
        CERTIFICATIONS
      </motion.h2>

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:gap-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ y: -10, scale: 1.01 }}
            className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] md:rounded-[35px]"
          >
            <div className="relative h-[230px] overflow-hidden bg-white sm:h-[280px]">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute right-4 top-4 rounded-full border border-cyan-400/20 bg-black/50 px-4 py-2 text-xs font-semibold text-cyan-400 backdrop-blur-xl">
                {cert.year}
              </div>
              <div className="absolute bottom-4 left-4 rounded-full border border-green-400/20 bg-black/50 px-4 py-2 text-xs font-semibold text-green-400 backdrop-blur-xl">
                Verified Certificate
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="break-words text-2xl font-black">{cert.title}</h3>
              <p className="mt-3 text-gray-400">Issued by {cert.issuer}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-cyan-400 px-5 py-3 text-sm font-semibold tracking-[0.18em] text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black sm:w-auto"
              >
                VIEW CERTIFICATE
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
