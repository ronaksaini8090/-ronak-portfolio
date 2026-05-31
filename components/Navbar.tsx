"use client";

import { motion } from "framer-motion";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="
      fixed
      top-5
      left-1/2
      z-50
      hidden
      -translate-x-1/2
      md:flex
      gap-8
      rounded-full
      border
      border-white/10
      bg-black/40
      px-8
      py-4
      backdrop-blur-xl
      "
    >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="
          text-sm
          uppercase
          tracking-[0.25em]
          text-gray-300
          transition-all
          duration-300
          hover:text-cyan-400
          "
        >
          {link.name}
        </a>
      ))}
    </motion.nav>
  );
}