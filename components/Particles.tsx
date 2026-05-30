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
        fpsLimit: 120,
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: "#00ffff",
          },
          links: {
            enable: true,
            color: "#00ffff",
            distance: 150,
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
}