"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 items-center gap-6 rounded-full border border-white/10 bg-black/40 px-7 py-4 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl md:flex"
      >
        <a href="/" className="text-lg font-black text-cyan-400">
          RS.
        </a>
        {links.slice(1).map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xs uppercase tracking-[0.18em] text-gray-300 transition-all duration-300 hover:text-cyan-400"
          >
            {link.name}
          </a>
        ))}
      </motion.nav>

      <button
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle menu"
        className="fixed right-5 top-5 z-[60] rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-cyan-400 backdrop-blur-xl md:hidden"
      >
        {open ? "×" : "☰"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-4 right-4 top-20 z-50 rounded-3xl border border-white/10 bg-black/90 p-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-center text-sm uppercase tracking-[0.25em] text-gray-300 transition-all duration-300 hover:text-cyan-400"
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
