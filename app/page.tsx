"use client";

import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Aurora from "@/components/Aurora";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import FloatingDock from "@/components/FloatingDock";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/Particles";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import ResumeCTA from "@/components/ResumeCTA";
import ScrollProgress from "@/components/ScrollProgress";
import Skills from "@/components/Skills";
import SmoothScroll from "@/components/SmoothScroll";
import Stats from "@/components/Stats";
import TechMarquee from "@/components/TechMarquee";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <ScrollProgress />
      <Loader />
      <Cursor />
      <SmoothScroll />
      <Navbar />
      <FloatingDock />

      <ParticleBackground />
      <Aurora />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.08),transparent_30%)]" />

      <div className="relative z-10">
        <Hero />
        <About />
        <Stats />
        <Education />
        <Certifications />
        <Achievements />
        <Projects />
        <Skills />
        <Experience />

        <ResumeCTA />
        <Terminal />
        <TechMarquee />
        <Quote />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
