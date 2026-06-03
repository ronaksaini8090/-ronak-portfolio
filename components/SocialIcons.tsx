"use client";

import { motion } from "framer-motion";

export default function SocialIcons() {
  const links = [
    {
      name: "GitHub",
      href: "https://github.com/ronaksaini8090",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ronak-saini-649bb3320/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ronaksaini773/",
    },
    {
      name: "Email",
      href: "mailto:ronaksaini773@gmail.com",
    },
  ];

  return (
    <div className="relative z-[999] flex flex-wrap gap-3">
      {links.map((item, index) => (
        <motion.a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
          }}
          whileHover={{
            y: -3,
          }}
          className="
          relative
          z-[999]
          rounded-full
          border
          border-cyan-400/20
          bg-black/40
          px-5
          py-2
          text-sm
          text-gray-300
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400
          hover:text-cyan-400
          hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
          "
        >
          {item.name}
        </motion.a>
      ))}
    </div>
  );
}