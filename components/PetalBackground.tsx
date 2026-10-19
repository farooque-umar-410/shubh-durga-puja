"use client";

import React, { useEffect, useState } from "react";

export default function PetalBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only mount if user doesn't prefer reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mediaQuery.matches) {
      setMounted(true);
    }
  }, []);

  if (!mounted) return null;

  // 10 subtle floating petals
  const petals = [
    { left: "8%", delay: "0s", duration: "16s", size: "w-3 h-4" },
    { left: "18%", delay: "4s", duration: "19s", size: "w-2.5 h-3.5" },
    { left: "28%", delay: "8s", duration: "15s", size: "w-3 h-4" },
    { left: "42%", delay: "2s", duration: "18s", size: "w-2 h-3" },
    { left: "55%", delay: "7s", duration: "21s", size: "w-3.5 h-4.5" },
    { left: "68%", delay: "3s", duration: "17s", size: "w-2.5 h-3.5" },
    { left: "78%", delay: "9s", duration: "20s", size: "w-3 h-4" },
    { left: "88%", delay: "5s", duration: "16s", size: "w-2.5 h-3" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {petals.map((p, idx) => (
        <div
          key={idx}
          className={`absolute rounded-full opacity-60 bg-gradient-to-br from-saffron to-festiveRed ${p.size}`}
          style={{
            left: p.left,
            top: "-20px",
            animation: `floatPetal ${p.duration} infinite linear`,
            animationDelay: p.delay,
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes floatPetal {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(35px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
