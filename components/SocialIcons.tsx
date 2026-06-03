"use client";

import { motion } from "framer-motion";

const links = [
  { name: "GitHub", href: "https://github.com/ronaksaini8090" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ronak-saini-649bb3320/" },
  { name: "Instagram", href: "https://www.instagram.com/ronaksaini773/" },
  { name: "Email", href: "mailto:ronaksaini773@gmail.com" },
];

export default function SocialIcons() {
  return (
    <div className="relative z-[999] grid w-full grid-cols-2 gap-3 sm:flex sm:flex-wrap">
      {links.map((item, index) => (
        <motion.a
          key={item.name}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          className="relative z-[999] inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-black/40 px-4 py-2 text-center text-sm font-medium text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
        >
          {item.name}
        </motion.a>
      ))}
    </div>
  );
}
