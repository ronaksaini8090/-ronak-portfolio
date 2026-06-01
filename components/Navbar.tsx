"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Certificates",
    href: "#certifications",
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
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
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
        md:flex
        -translate-x-1/2
        gap-8
        rounded-full
        border
        border-white/10
        bg-black/40
        px-8
        py-4
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(34,211,238,0.08)]
        "
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="
            text-sm
            uppercase
            tracking-[0.2em]
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

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
        fixed
        top-5
        right-5
        z-[60]
        md:hidden
        rounded-xl
        border
        border-white/10
        bg-black/40
        px-4
        py-3
        text-cyan-400
        backdrop-blur-xl
        "
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="
            fixed
            top-20
            left-4
            right-4
            z-50
            md:hidden
            rounded-3xl
            border
            border-white/10
            bg-black/90
            p-6
            backdrop-blur-xl
            "
          >
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                  text-center
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}