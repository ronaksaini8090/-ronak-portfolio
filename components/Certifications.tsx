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
    <section id="certifications" className="relative z-10 px-6 py-40">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-24 text-center text-5xl font-black md:text-7xl"
      >
        CERTIFICATIONS
      </motion.h2>

      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="group overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
          >
            <div className="relative h-[280px] overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute right-5 top-5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-400 backdrop-blur-xl">
                {cert.year}
              </div>
              <div className="absolute bottom-5 left-5 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-semibold text-green-400 backdrop-blur-xl">
                Verified Certificate
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-black">{cert.title}</h3>
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
