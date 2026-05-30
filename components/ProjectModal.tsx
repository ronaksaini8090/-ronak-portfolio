"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Props {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    desc: string;
    image: string;
    tech: string[];
  };
}

export default function ProjectModal({
  open,
  onClose,
  project,
}: Props) {
  return (
    <AnimatePresence>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-xl"
        >

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[40px] border border-white/10 bg-[#0a0a0a] p-8"
          >

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-3xl text-white/60 transition hover:text-cyan-400"
            >
              ×
            </button>

            {/* Image */}
            <div className="relative mb-10 h-[400px] overflow-hidden rounded-[30px]">

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />

            </div>

            {/* Content */}
            <h2 className="mb-6 text-5xl font-black">
              {project.title}
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-400">
              {project.desc}
            </p>

            {/* Tech */}
            <div className="mb-10 flex flex-wrap gap-4">

              {project.tech.map((item, index) => (
                <div
                  key={index}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm uppercase tracking-[0.2em] text-cyan-300"
                >
                  {item}
                </div>
              ))}

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5">

              <button className="rounded-full border border-cyan-400 px-8 py-4 text-sm font-semibold tracking-[0.2em] text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black">
                LIVE DEMO
              </button>

              <button className="rounded-full border border-white/10 px-8 py-4 text-sm font-semibold tracking-[0.2em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black">
                GITHUB
              </button>

            </div>

          </motion.div>

        </motion.div>
      )}

    </AnimatePresence>
  );
}