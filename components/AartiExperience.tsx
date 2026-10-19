"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Square, Volume2, VolumeX, Bell, Sparkles, Info } from "lucide-react";
import { LotusMotif, MandapaDivider } from "./DecorativeMotifs";
import { soundManager } from "@/lib/sound";

export default function AartiExperience() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [bellRinging, setBellRinging] = useState(false);
  const bellIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setSoundEnabled(soundManager.isEnabled());
    return () => {
      if (bellIntervalRef.current) {
        clearInterval(bellIntervalRef.current);
      }
    };
  }, []);

  const handleStartAarti = () => {
    setIsPlaying(true);
    if (soundEnabled) {
      soundManager.playTempleBell();
      // Periodically ring bell during aarti if sound is on
      if (!bellIntervalRef.current) {
        bellIntervalRef.current = setInterval(() => {
          soundManager.playTempleBell();
        }, 4000);
      }
    }
  };

  const handlePauseAarti = () => {
    setIsPlaying(false);
    if (bellIntervalRef.current) {
      clearInterval(bellIntervalRef.current);
      bellIntervalRef.current = null;
    }
  };

  const handleResetAarti = () => {
    setIsPlaying(false);
    if (bellIntervalRef.current) {
      clearInterval(bellIntervalRef.current);
      bellIntervalRef.current = null;
    }
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    soundManager.setEnabled(next);
    setSoundEnabled(next);
    if (next) {
      soundManager.playTempleBell();
    }
  };

  const ringBellManually = () => {
    setBellRinging(true);
    soundManager.playTempleBell();
    setTimeout(() => setBellRinging(false), 800);
  };

  return (
    <section id="aarti" className="relative py-24 bg-maroon-deep text-parchment overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-halo opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-vermilion-dark/80 border border-antiqueGold/50 text-antiqueGold-light font-devanagari text-xs sm:text-sm font-semibold mb-3">
          <Sparkles className="w-4 h-4 text-antiqueGold" />
          <span>भक्तिमय डिजिटल वंदना</span>
          <Sparkles className="w-4 h-4 text-antiqueGold" />
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-devanagari font-bold gold-gradient-text tracking-tight">
          माँ दुर्गा की आराधना
        </h2>

        <p className="mt-3 text-sm sm:text-base text-parchment-card/85 font-devanagari max-w-2xl mx-auto leading-relaxed">
          पारंपरिक पीतल की आरती थाली, कर्पूर ज्योत एवं पुष्पार्पण के साथ डिजिटल आरती का सात्विक अनुभव
        </p>

        <MandapaDivider className="mt-4 max-w-xs mx-auto" />

        {/* Interactive Aarti Stage Area */}
        <div className="relative my-10 py-6 flex flex-col items-center justify-center min-h-[380px]">
          {/* Ambient Aarti Glow Circle */}
          <div
            className={`absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-saffron/20 via-antiqueGold/30 to-festiveRed/20 blur-3xl pointer-events-none transition-opacity duration-1000 ${
              isPlaying ? "opacity-100 scale-110" : "opacity-30 scale-95"
            }`}
          />

          {/* Floating Flower Petals when Aarti is Active */}
          <AnimatePresence>
            {isPlaying && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      x: Math.random() * 400 - 200,
                      y: 120,
                      opacity: 0,
                      rotate: 0,
                    }}
                    animate={{
                      y: -140,
                      opacity: [0, 1, 1, 0],
                      rotate: 360,
                      x: (i % 2 === 0 ? 1 : -1) * (40 + Math.random() * 60),
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeOut",
                    }}
                    className="absolute left-1/2 bottom-1/2"
                  >
                    <LotusMotif className="w-5 h-5 text-saffron opacity-80" />
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* The Aarti Thali Component with Circular Motion */}
          <div
            className={`relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center transition-transform duration-500 ${
              isPlaying ? "animate-aarti" : ""
            }`}
            style={{ transformOrigin: "center center" }}
          >
            {/* Handcrafted Brass Aarti Thali SVG */}
            <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-aartiThali">
              <defs>
                <radialGradient id="thaliBrass" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF4DD" />
                  <stop offset="40%" stopColor="#F5DE93" />
                  <stop offset="75%" stopColor="#D4AF57" />
                  <stop offset="100%" stopColor="#8A671A" />
                </radialGradient>
                <radialGradient id="camphorGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF9EB" />
                  <stop offset="50%" stopColor="#F6B85E" />
                  <stop offset="100%" stopColor="#C62828" />
                </radialGradient>
              </defs>

              {/* Thali Outer Rim with Filigree dots */}
              <circle cx="120" cy="120" r="114" fill="#8A671A" stroke="#F5DE93" strokeWidth="3" />
              <circle cx="120" cy="120" r="106" fill="url(#thaliBrass)" />
              <circle cx="120" cy="120" r="95" fill="#4A0710" stroke="#D4AF57" strokeWidth="2" />
              <circle cx="120" cy="120" r="90" fill="url(#thaliBrass)" opacity="0.9" />

              {/* 12 Auspicious Edge Pearls */}
              {Array.from({ length: 12 }).map((_, i) => (
                <circle
                  key={i}
                  cx={120 + 100 * Math.cos((i * 30 * Math.PI) / 180)}
                  cy={120 + 100 * Math.sin((i * 30 * Math.PI) / 180)}
                  r="3.5"
                  fill="#FFF4DD"
                />
              ))}

              {/* Central Diya Stand on Thali */}
              <circle cx="120" cy="120" r="28" fill="#8F1018" stroke="#D4AF57" strokeWidth="2" />
              <circle cx="120" cy="120" r="22" fill="#E9A23B" />

              {/* Fresh Marigold Garland Ring on Thali */}
              {Array.from({ length: 8 }).map((_, i) => (
                <circle
                  key={i}
                  cx={120 + 58 * Math.cos((i * 45 * Math.PI) / 180)}
                  cy={120 + 58 * Math.sin((i * 45 * Math.PI) / 180)}
                  r="9"
                  fill={i % 2 === 0 ? "#E9A23B" : "#C62828"}
                  stroke="#FFF4DD"
                  strokeWidth="1"
                />
              ))}

              {/* Sacred Kumkum & Chandan Vati */}
              <circle cx="95" cy="85" r="7" fill="#C62828" stroke="#D4AF57" strokeWidth="1" />
              <circle cx="145" cy="85" r="7" fill="#F5DE93" stroke="#D4AF57" strokeWidth="1" />
            </svg>

            {/* Glowing Central Camphor / Diya Flame */}
            <div className="absolute flex flex-col items-center justify-center pointer-events-none">
              <div className="relative w-8 h-14 mb-[-4px] flex items-center justify-center">
                <div className="w-6 h-12 rounded-full bg-gradient-to-t from-festiveRed via-saffron to-parchment animate-flame shadow-diyaGlow" />
                <div className="absolute -top-2 w-10 h-10 rounded-full bg-saffron/40 blur-md pointer-events-none" />
              </div>
            </div>

            {/* Incense Stick (अगरबत्ती) with Fragrant Smoke */}
            <div className="absolute bottom-12 right-12 flex flex-col items-center pointer-events-none">
              <div className="w-1 h-3 rounded-full bg-orange-400 animate-pulse" />
              <div className="w-10 h-14 border-l border-parchment/40 animate-smoke blur-[1px]" />
            </div>
          </div>

          {/* Status Label */}
          <div className="mt-6 flex items-center space-x-2 text-xs sm:text-sm font-devanagari">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isPlaying ? "bg-green-500 animate-ping" : "bg-antiqueGold/60"
              }`}
            />
            <span className="text-antiqueGold-light font-medium">
              {isPlaying
                ? "आरती गतिमान है: ॐ जय अम्बे गौरी, मैया जय श्यामा गौरी..."
                : "आरती आरंभ करने के लिए नीचे दिए गए बटन पर क्लिक करें"}
            </span>
          </div>

          {/* Controls Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {!isPlaying ? (
              <button
                onClick={handleStartAarti}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-vermilion via-festiveRed to-vermilion text-parchment font-devanagari font-bold text-base border-2 border-antiqueGold shadow-goldGlow hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
              >
                <Play className="w-4 h-4 fill-parchment" />
                <span>आरती आरंभ करें</span>
              </button>
            ) : (
              <button
                onClick={handlePauseAarti}
                className="px-7 py-3 rounded-full bg-maroon-card border-2 border-antiqueGold text-parchment font-devanagari font-bold text-base hover:bg-maroon hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
              >
                <Pause className="w-4 h-4 fill-parchment" />
                <span>विराम दें (Pause)</span>
              </button>
            )}

            <button
              onClick={handleResetAarti}
              className="px-5 py-3 rounded-full bg-maroon-deep border border-antiqueGold/40 text-parchment/80 hover:text-parchment text-sm font-devanagari transition-all flex items-center space-x-1.5"
            >
              <Square className="w-3.5 h-3.5" />
              <span>रोकें (Stop)</span>
            </button>

            {/* Interactive Bell Ring Button */}
            <button
              onClick={ringBellManually}
              className={`px-5 py-3 rounded-full border text-sm font-devanagari transition-all flex items-center space-x-1.5 ${
                bellRinging
                  ? "bg-antiqueGold text-maroon-deep border-parchment scale-110 shadow-goldGlow"
                  : "bg-maroon-card/80 border-antiqueGold/60 text-antiqueGold-light hover:bg-vermilion hover:text-parchment"
              }`}
              title="मंदिर की पावन घंटी बजाएँ"
            >
              <Bell className={`w-4 h-4 ${bellRinging ? "animate-bounce" : ""}`} />
              <span>घंटी बजाएँ</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className={`p-3 rounded-full border text-sm transition-all flex items-center justify-center ${
                soundEnabled
                  ? "bg-antiqueGold/20 border-antiqueGold text-antiqueGold"
                  : "bg-maroon-deep border-antiqueGold/30 text-parchment/60 hover:text-parchment"
              }`}
              title={soundEnabled ? "ध्वनि बंद करें" : "ध्वनि चालू करें"}
              aria-label={soundEnabled ? "ध्वनि बंद करें" : "ध्वनि चालू करें"}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>

          {/* Devotional Note */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-xs text-parchment/60 font-devanagari max-w-md mx-auto">
            <Info className="w-4 h-4 text-antiqueGold/70 shrink-0" />
            <span>
              यह सुविधा एक प्रतीकात्मक डिजिटल विजुअल अनुभव है। ध्वनि पूर्णतः वैकल्पिक है।
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
