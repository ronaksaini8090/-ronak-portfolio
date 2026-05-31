"use client";

import { motion } from "framer-motion";

const items = [
  {
    name: "GitHub",
    link: "https://github.com/ronaksaini8090",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ronak-saini-649bb3320/",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ronaksaini773/",
  },
  {
    name: "Email",
    link: "mailto:ronaksaini773@gmail.com",
  },
];

export default function FloatingDock() {
  return (
    <div
    className="
    hidden md:flex
    fixed bottom-6 left-1/2 z-50
    -translate-x-1/2 gap-4
    rounded-full border border-white/10
    bg-black/30 px-5 py-3
    shadow-[0_0_40px_rgba(34,211,238,0.15)]
    backdrop-blur-xl
    "
    >
      {items.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/5
            px-4
            py-2
            text-xs
            sm:text-sm
            font-semibold
            text-cyan-400
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-cyan-400/10
            hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
          "
        >
          {item.name}
        </motion.a>
      ))}
    </div>
  );
}