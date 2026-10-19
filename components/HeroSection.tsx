"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Flame, Share2, Maximize2, Sparkles, Heart } from "lucide-react";
import { HangingBrassBell, LotusMotif, MandalaBackdrop } from "./DecorativeMotifs";
import { soundManager } from "@/lib/sound";

export default function HeroSection() {
  const [isZoomed, setIsZoomed] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAartiClick = () => {
    soundManager.playTempleBell();
    scrollTo("aarti");
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center pt-4 pb-14 overflow-hidden">
      {/* Decorative Parallax Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep via-maroon to-maroon-deep opacity-90 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
        <MandalaBackdrop className="w-[850px] h-[850px] text-antiqueGold" />
      </div>

      {/* Hanging Brass Bells along top banner */}
      <div className="w-full max-w-6xl px-6 flex justify-between items-start pointer-events-none z-10 -mt-2 mb-2">
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer pointer-events-auto"
          onClick={() => soundManager.playTempleBell()}
          title="घंटी बजाएँ"
        >
          <HangingBrassBell className="w-8 h-16 md:w-10 md:h-20" />
        </motion.div>
        <div className="flex items-center space-x-2 text-antiqueGold/80 text-xs md:text-sm font-devanagari px-4 py-1 rounded-full bg-maroon-card/60 border border-antiqueGold/30">
          <Sparkles className="w-4 h-4 text-antiqueGold animate-pulse" />
          <span>शारदीय उत्सव एवं पावन देवी वंदना</span>
          <Sparkles className="w-4 h-4 text-antiqueGold animate-pulse" />
        </div>
        <motion.div
          animate={{ rotate: [2, -2, 2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer pointer-events-auto"
          onClick={() => soundManager.playTempleBell()}
          title="घंटी बजाएँ"
        >
          <HangingBrassBell className="w-8 h-16 md:w-10 md:h-20" />
        </motion.div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Top Devotional Headline */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-vermilion/40 border border-antiqueGold/40 text-antiqueGold-light text-xs sm:text-sm font-devanagari mb-2.5 shadow-sm">
            <LotusMotif className="w-4 h-4 text-antiqueGold" />
            <span>माँ दुर्गा की कृपा से आलोकित जीवन</span>
            <LotusMotif className="w-4 h-4 text-antiqueGold" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-devanagari font-bold tracking-tight gold-gradient-text drop-shadow-lg">
            शुभ दुर्गा पूजा
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-parchment-card/90 font-devanagari max-w-2xl mx-auto leading-relaxed">
            माँ दुर्गा की कृपा से आपके जीवन में सुख, शांति, समृद्धि और नई ऊर्जा का संचार हो।
          </p>
        </motion.div>

        {/* Masterpiece Poster Presentation with Ornate Golden Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full rounded-2xl p-1.5 sm:p-2.5 bg-gradient-to-b from-antiqueGold via-[#A6822B] to-antiqueGold shadow-2xl shadow-black/80"
        >
          {/* Inner Maroon Inset Frame */}
          <div className="relative w-full rounded-xl overflow-hidden bg-maroon-deep border border-antiqueGold/60 shadow-inner">
            {/* The Master Visual Poster */}
            <div className="relative w-full aspect-[3/2] max-h-[72vh]">
              <Image
                src="/images/durga-puja-atiqur-rahman.png"
                alt="शुभ दुर्गा पूजा — अतीकुर रहमान एवं माँ दुर्गा का दिव्य आशीर्वाद"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-contain sm:object-cover sm:object-center transition-transform duration-700 hover:scale-[1.01]"
              />

              {/* Fullscreen Darshan Button */}
              <button
                onClick={() => setIsZoomed(true)}
                className="absolute top-3 right-3 p-2 rounded-full bg-maroon-deep/80 hover:bg-vermilion border border-antiqueGold/60 text-antiqueGold hover:text-parchment transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-antiqueGold"
                title="पूर्ण दर्शन (Full Screen)"
                aria-label="प्रतिमा का पूर्ण दर्शन देखें"
              >
                <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Subtle corner golden filigree SVG accents */}
              <div className="absolute bottom-2 left-2 pointer-events-none opacity-80 hidden sm:block">
                <span className="text-xs text-antiqueGold-light font-devanagari bg-maroon-deep/80 px-2.5 py-1 rounded border border-antiqueGold/40 backdrop-blur-sm">
                  सप्रेम — अतीकुर रहमान
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Signature & Subtext below poster */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl px-2 text-center sm:text-left gap-2">
          <div className="flex items-center space-x-2 text-parchment-card/90 font-devanagari text-xs sm:text-sm">
            <Heart className="w-4 h-4 text-festiveRed fill-festiveRed" />
            <span>सप्रेम शुभकामनाओं सहित: <strong className="text-antiqueGold-light font-semibold">अतीकुर रहमान</strong></span>
          </div>
          <div className="text-xs text-antiqueGold/80 font-devanagari">
            माँ दुर्गा की पावन छत्रछाया आप पर सदैव बनी रहे
          </div>
        </div>

        {/* 3 Main Functional Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full"
        >
          {/* Button 1: Read Greetings */}
          <button
            onClick={() => scrollTo("blessings")}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-maroon via-vermilion-dark to-maroon text-parchment font-devanagari font-semibold text-sm sm:text-base border border-antiqueGold/70 shadow-md hover:shadow-goldGlow hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
          >
            <BookOpen className="w-4 h-4 text-antiqueGold" />
            <span>शुभकामनाएँ पढ़ें</span>
          </button>

          {/* Button 2: Digital Aarti */}
          <button
            onClick={handleAartiClick}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-vermilion via-festiveRed to-vermilion text-parchment font-devanagari font-bold text-sm sm:text-base border border-antiqueGold shadow-goldGlow hover:shadow-goldGlowLg hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
          >
            <Flame className="w-4 h-4 text-saffron fill-saffron animate-bounce" />
            <span>डिजिटल आरती करें</span>
          </button>

          {/* Button 3: Share Greeting */}
          <button
            onClick={() => scrollTo("greeting-generator")}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#59390D] via-antiqueGold to-[#59390D] text-maroon-deep font-devanagari font-bold text-sm sm:text-base border border-parchment/60 shadow-md hover:shadow-goldGlow hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
          >
            <Share2 className="w-4 h-4 text-maroon-deep" />
            <span>शुभकामना साझा करें</span>
          </button>
        </motion.div>
      </div>

      {/* Fullscreen Darshan Modal */}
      {isZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-5xl w-full h-[88vh]">
            <Image
              src="/images/durga-puja-atiqur-rahman.png"
              alt="माँ दुर्गा एवं अतीकुर रहमान — पूर्ण दर्शन"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-parchment/80 font-devanagari text-sm">
            कहीं भी क्लिक करें या बंद करने के लिए टैप करें
          </p>
        </div>
      )}
    </section>
  );
}
