"use client";

const links = [
  { name: "GitHub", href: "https://github.com/ronaksaini8090" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ronak-saini-649bb3320/" },
  { name: "Instagram", href: "https://www.instagram.com/ronaksaini773/" },
  { name: "Email", href: "mailto:ronaksaini773@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 px-6 pb-32 pt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="break-words text-4xl font-black tracking-wide sm:text-5xl">
            RONAK<span className="text-cyan-400"> SAINI</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
            Full Stack Developer • Computer Science Engineering Student •
            Building scalable web applications, AI-powered solutions and
            immersive digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-gray-400 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-12 h-px w-full max-w-4xl bg-white/10" />
          <p className="mt-8 text-sm text-gray-500">
            © 2026 Ronak Saini. All Rights Reserved.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-cyan-400">
            Built with Next.js • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
