"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
<section
  id="contact"
  className="relative z-10 px-6 py-40"
>
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl"
      >

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

        <div className="relative z-10">

          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-cyan-400">
            CONTACT
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
            LET’S BUILD
            <br />
            SOMETHING
            <span className="text-cyan-400"> AMAZING</span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
            I’m always interested in futuristic projects, AI products,
            cinematic interfaces, and full stack systems.
            Let’s create something extraordinary together.
          </p>

          {/* Contact Grid */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                Email
              </p>

              <h3 className="mt-4 text-lg font-semibold break-all">
              <a href="mailto:ronaksaini773@gmail.com">
  ronaksaini773@gmail.com
</a>              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                Phone
              </p>

              <h3 className="mt-4 text-lg font-semibold">
              <a href="tel:+918890025024">
  +91 8890025024
</a>
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                Location
              </p>

              <h3 className="mt-4 text-lg font-semibold">
                Rajasthan, India
              </h3>
            </div>

          </div>

          {/* Button */}
          <div className="mt-12">

            <a
              href="mailto:ronaksaini773@gmail.com"
              className="inline-flex rounded-full border border-cyan-400 px-10 py-4 text-sm font-bold tracking-[0.3em] text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
            >
LET'S CONNECT            </a>

          </div>

        </div>

      </motion.div>

    </section>
  );
}