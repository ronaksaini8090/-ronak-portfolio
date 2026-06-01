"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="px-6 py-40">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-5xl text-center"
      >
        <h2 className="text-4xl md:text-6xl font-black leading-tight">
          "Great software is built by people who never stop learning."
        </h2>

        <p className="mt-8 text-cyan-400">
          — Ronak Saini
        </p>
      </motion.div>
    </section>
  );
}