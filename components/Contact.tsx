"use client";

import { motion } from "framer-motion";

const contactCards = [
  {
    label: "Email",
    value: "ronaksaini773@gmail.com",
    href: "mailto:ronaksaini773@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 8890025024",
    href: "tel:+918890025024",
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/ronak-saini-649bb3320/",
  },
  {
    label: "GitHub",
    value: "View repositories",
    href: "https://github.com/ronaksaini8090",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 overflow-x-hidden px-4 py-32 sm:px-6 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

        <div className="relative z-10">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-cyan-400">
            CONTACT
          </p>
          <h2 className="break-words text-4xl font-black leading-tight md:text-7xl">
            LET'S BUILD
            <br />
            SOMETHING <span className="text-cyan-400">AMAZING</span>
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg">
            I'm currently open to internships, freelance work, collaborations
            and innovative software projects. If you have an opportunity or
            simply want to connect, feel free to reach out.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-3xl border border-white/10 bg-black/30 p-6 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                  {card.label}
                </p>
                <h3 className="mt-4 break-words text-lg font-semibold">
                  {card.value}
                </h3>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-green-400/20 bg-green-400/10 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-green-400">
              Availability
            </p>
            <h3 className="mt-3 text-xl font-semibold text-green-300">
              Open to internships, freelance projects and collaborations.
            </h3>
          </div>

          <div className="mt-12 grid gap-4 sm:flex sm:flex-wrap">
            <a
              href="mailto:ronaksaini773@gmail.com"
              className="inline-flex w-full items-center justify-center rounded-full border border-cyan-400 px-8 py-4 text-sm font-bold tracking-[0.22em] text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black sm:w-auto sm:px-10 sm:tracking-[0.3em]"
            >
              LET'S CONNECT
            </a>
            <a
              href="https://www.linkedin.com/in/ronak-saini-649bb3320/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-bold tracking-[0.22em] text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto sm:px-10 sm:tracking-[0.3em]"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
