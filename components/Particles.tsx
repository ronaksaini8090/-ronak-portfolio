"use client";

import Particles from "@tsparticles/react";

export default function ParticleBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 45,
          },
          color: {
            value: "#00ffff",
          },
          links: {
            enable: true,
            color: "#00ffff",
            distance: 140,
            opacity: 0.12,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: { min: 1, max: 2.5 },
          },
        },
        detectRetina: true,
      }}
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
