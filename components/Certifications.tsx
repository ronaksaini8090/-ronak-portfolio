"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "MERN Stack Development Internship",
    issuer: "Regex Software Services",
    year: "2025",
    image: "/images/cert1.png",
  },
  {
    title: "Full Stack Developer Bootcamp",
    issuer: "GeeksforGeeks",
    year: "2025",
    image: "/images/cert2.png",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative z-10 px-6 py-40"
    >
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
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl"
          >

            <div className="relative h-[280px]">

              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />

            </div>

            <div className="p-8">

              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-cyan-400">
                {cert.year}
              </p>

              <h3 className="text-2xl font-black">
                {cert.title}
              </h3>

              <p className="mt-3 text-gray-400">
                Issued by {cert.issuer}
              </p>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}