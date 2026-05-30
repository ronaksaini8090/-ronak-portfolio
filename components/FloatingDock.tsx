"use client";

import { motion } from "framer-motion";

const items = [
  {
    name: "GH",
    link: "https://github.com/ronaksaini8090",
  },
  {
    name: "IN",
    link: "https://linkedin.com",
  },
  {
    name: "IG",
    link: "https://instagram.com/its_perfect.__",
  },
  {
    name: "@",
    link: "mailto:ronaksaini773@gmail.com",
  },
];

export default function FloatingDock() {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-4 rounded-full border border-white/10 bg-black/30 px-5 py-3 shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-xl">

      {items.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          whileHover={{
            y: -8,
            scale: 1.12,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 text-sm font-bold tracking-widest text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
        >
          {item.name}
        </motion.a>
      ))}

    </div>
  );
}