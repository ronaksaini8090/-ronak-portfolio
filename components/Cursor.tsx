"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 40,
  });

  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 40,
  });

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-6 w-6 rounded-full border border-cyan-400 bg-cyan-400/20 backdrop-blur-sm"
      />

      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-20 w-20 rounded-full bg-cyan-400/10 blur-3xl"
      />
    </>
  );
}