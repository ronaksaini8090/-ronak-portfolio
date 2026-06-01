"use client";
"use client";
import Quote from "@/components/Quote";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";

import ScrollProgress from "@/components/ScrollProgress";
import FloatingDock from "@/components/FloatingDock";
import Loader from "@/components/Loader";

import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

import ParticleBackground from "@/components/Particles";
import Aurora from "@/components/Aurora";
import Hero from "@/components/Hero";
import About from "@/components/About";

import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Stats from "@/components/Stats";
import Terminal from "@/components/Terminal";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
<main className="relative overflow-hidden bg-black text-white pb-40">
      {/* Systems */}
      <ScrollProgress />
      <Loader />
      <Cursor />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />
      <FloatingDock />

      {/* Background */}
      <ParticleBackground />
      <Aurora />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Hero */}
      <div className="relative z-10">
        <Hero />
      </div>

      <div className="relative z-10">
  <About />
      </div>

      <div className="relative z-10">
  <Education />
</div>

<div className="relative z-10">
  <Certifications />
</div>
      {/* Expertise */}
      <div className="relative z-10">
        <Expertise />
      </div>

      {/* Projects */}
      <div className="relative z-10">
        <Projects />
      </div>

      {/* Skills */}
      <div className="relative z-10">
        <Skills />
      </div>

      {/* Experience */}
      <div className="relative z-10">
        <Experience />
      </div>
    
      {/* Stats */}
      <div className="relative z-10">
        <Stats />
      </div>

      {/* Terminal */}
      <div className="relative z-10">
        <Terminal />
      </div>

      <Quote />

      {/* Contact */}
      <div className="relative z-10">
        <Contact />
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

    </main>
  );
}