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
    value: "Connect Professionally",
    href: "https://www.linkedin.com/in/ronak-saini-649bb3320/",
  },
  {
    label: "GitHub",
    value: "View Repositories",
    href: "https://github.com/ronaksaini8090",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 overflow-x-hidden px-4 py-24 sm:px-6 md:py-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-8 md:rounded-[40px] md:p-12"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

        <div className="relative z-10">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan-400 sm:text-sm sm:tracking-[0.5em]">
            CONTACT
          </p>

          <h2 className="text-[34px] font-black leading-none sm:text-5xl md:text-7xl">
            LET'S BUILD
            <br />
            SOMETHING{" "}
            <span className="text-cyan-400">
              AMAZING
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-gray-400 sm:mt-8 sm:text-lg">
            I'm currently open to internships, freelance work,
            collaborations and innovative software projects.
            If you have an opportunity or simply want to connect,
            feel free to reach out.
          </p>

          {/* Contact Cards */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  card.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  flex min-h-[130px] flex-col justify-between
                  rounded-3xl border border-white/10
                  bg-black/30 p-5
                  transition-all duration-300
                  hover:border-cyan-400
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                "
              >
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
                  {card.label}
                </p>

                <h3 className="break-all text-sm font-semibold text-white sm:text-lg">
                  {card.value}
                </h3>
              </a>
            ))}
          </div>

          {/* Availability Box */}
          <div className="mt-8 rounded-3xl border border-green-400/20 bg-green-400/10 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-green-400 sm:text-sm">
              AVAILABILITY
            </p>

            <h3 className="mt-3 text-lg font-semibold text-green-300 sm:text-xl">
              Open to internships, freelance projects and collaborations.
            </h3>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:ronaksaini773@gmail.com"
              className="
                inline-flex w-full items-center justify-center
                rounded-full border border-cyan-400
                px-8 py-4
                text-sm font-bold tracking-[0.2em]
                text-cyan-400
                transition-all duration-300
                hover:bg-cyan-400 hover:text-black
                sm:w-auto sm:px-10
              "
            >
              LET'S CONNECT
            </a>

            <a
              href="https://www.linkedin.com/in/ronak-saini-649bb3320/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex w-full items-center justify-center
                rounded-full border border-white/20
                px-8 py-4
                text-sm font-bold tracking-[0.2em]
                text-white
                transition-all duration-300
                hover:bg-white hover:text-black
                sm:w-auto sm:px-10
              "
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}