"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const links = [
  "About",
  "Projects",
  "Skills",
  "Experience",
  "Contact",
];

export default function MobileMenu({
  open,
  setOpen,
}: Props) {
  return (
    <AnimatePresence>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl"
        >

          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-8 top-8 text-5xl text-white"
          >
            ×
          </button>

          {/* Links */}
          <div className="flex h-full flex-col items-center justify-center gap-10">

            {links.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                }}
                className="text-4xl font-black uppercase tracking-[0.3em] text-white transition hover:text-cyan-400"
              >
                {item}
              </motion.a>
            ))}

          </div>

        </motion.div>
      )}

    </AnimatePresence>
  );
}