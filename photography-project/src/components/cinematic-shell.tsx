"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CinematicShell() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 180, damping: 24 });
  const smoothY = useSpring(y, { stiffness: 180, damping: 24 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 12);
      y.set(event.clientY - 12);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-cinema" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:72px_72px]" />
        {Array.from({ length: 32 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-gold-200/70"
            initial={{ x: `${(index * 37) % 100}vw`, y: `${(index * 19) % 100}vh`, opacity: 0.15 }}
            animate={{ y: ["0vh", "-16vh", "0vh"], opacity: [0.1, 0.8, 0.1] }}
            transition={{ duration: 8 + (index % 7), repeat: Infinity, delay: index * 0.22 }}
          />
        ))}
      </div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-6 w-6 rounded-full border border-gold-200/70 mix-blend-difference md:block"
        style={{ x: smoothX, y: smoothY }}
      />
    </>
  );
}
