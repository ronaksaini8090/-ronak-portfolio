"use client";

import { useState } from "react";

export default function Spotlight({
  children,
}: {
  children: React.ReactNode;
}) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="group relative overflow-hidden rounded-[30px]"
    >

      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            300px circle at ${position.x}px ${position.y}px,
            rgba(34,211,238,0.15),
            transparent 40%
          )`,
        }}
      />

      {children}

    </div>
  );
}