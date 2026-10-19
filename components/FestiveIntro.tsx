"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MandalaBackdrop, LotusMotif } from "./DecorativeMotifs";
import { soundManager } from "@/lib/sound";

interface FestiveIntroProps {
  onEnter?: () => void;
}

export default function FestiveIntro({ onEnter }: FestiveIntroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasSeenIntro = sessionStorage.getItem("durga_puja_intro_seen");
    if (!hasSeenIntro) {
      setIsOpen(true);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("durga_puja_intro_seen", "true");
    soundManager.playDiyaChime();
    setIsOpen(false);
    if (onEnter) onEnter();
  };

  if (!mounted || !isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="festive-intro-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-maroon-deep px-4 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="दुर्गा पूजा स्वागत"
      >
        {/* Animated Radial Background Glow */}
        <div className="absolute inset-0 bg-radial-halo opacity-70 pointer-events-none" />

        {/* Slowly Rotating Golden Mandala */}
        <div className="absolute flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          >
            <MandalaBackdrop className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] text-antiqueGold/20" />
          </motion.div>
        </div>

        {/* Content Container */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center"
        >
          {/* Glowing Sacred Diya */}
          <div className="relative mb-6 flex flex-col items-center">
            {/* Diya Flame */}
            <div className="relative w-8 h-12 mb-[-8px] flex items-center justify-center">
              <div className="absolute w-14 h-14 rounded-full bg-saffron/40 blur-lg animate-halo-pulse" />
              <div className="w-5 h-9 rounded-full bg-gradient-to-t from-festiveRed via-saffron to-parchment-light animate-flame shadow-diyaGlow" />
            </div>

            {/* Brass Diya Bowl SVG */}
            <svg viewBox="0 0 100 45" className="w-24 h-12 text-antiqueGold drop-shadow-md">
              <path
                d="M10 10 C30 35 70 35 90 10 C92 24 72 38 50 40 C28 38 8 24 10 10 Z"
                fill="url(#goldGradIntro)"
              />
              <ellipse cx="50" cy="12" rx="40" ry="6" fill="#8F1018" />
              <ellipse cx="50" cy="12" rx="35" ry="4" fill="#C57B14" />
              <defs>
                <linearGradient id="goldGradIntro" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5DE93" />
                  <stop offset="50%" stopColor="#D4AF57" />
                  <stop offset="100%" stopColor="#9B7829" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Hindi Holy Greeting */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex items-center space-x-3 mb-2"
          >
            <LotusMotif className="w-6 h-6 text-antiqueGold" />
            <h2 className="text-3xl md:text-5xl font-devanagari font-bold gold-gradient-text tracking-wide">
              जय माता दी
            </h2>
            <LotusMotif className="w-6 h-6 text-antiqueGold" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-lg md:text-2xl text-parchment-card font-devanagari font-medium mt-3 mb-2 leading-relaxed"
          >
            माँ दुर्गा का आशीर्वाद आप सभी पर बना रहे
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-sm md:text-base text-antiqueGold-light/90 font-devanagari mb-8"
          >
            अतीकुर रहमान की ओर से हार्दिक शारदीय शुभकामनाएँ
          </motion.div>

          {/* Explicit Enter Button */}
          <motion.button
            onClick={handleEnter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-vermilion via-festiveRed to-vermilion text-parchment font-devanagari font-bold text-lg shadow-goldGlow hover:shadow-goldGlowLg border border-antiqueGold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-antiqueGold"
          >
            <span className="relative flex items-center space-x-3">
              <span>पूजा अनुभव में प्रवेश करें</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">✨</span>
            </span>
          </motion.button>

          <button
            onClick={handleEnter}
            className="mt-6 text-xs text-parchment/60 hover:text-antiqueGold underline underline-offset-4 font-devanagari transition-colors"
          >
            सीधे मुख्य पृष्ठ पर जाएँ
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
