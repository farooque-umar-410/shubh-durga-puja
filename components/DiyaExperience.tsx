"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Flame, RotateCcw, Sparkles } from "lucide-react";
import { LotusMotif, MandapaDivider } from "./DecorativeMotifs";
import { soundManager } from "@/lib/sound";

export default function DiyaExperience() {
  const [litCount, setLitCount] = useState(0);
  const [activeDiyas, setActiveDiyas] = useState<boolean[]>([false, false, false, false, false, false, false]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Read session counter
    const storedCount = sessionStorage.getItem("durga_puja_diyas_lit");
    if (storedCount) {
      const parsed = parseInt(storedCount, 10);
      if (!isNaN(parsed) && parsed > 0) {
        setLitCount(parsed);
        setShowMessage(true);
        // Turn on diyas up to 7
        const newDiyas = [false, false, false, false, false, false, false];
        for (let i = 0; i < Math.min(parsed, 7); i++) {
          newDiyas[i] = true;
        }
        setActiveDiyas(newDiyas);
      }
    }
  }, []);

  const handleLightDiya = () => {
    soundManager.playDiyaChime();

    // Trigger golden particles & petals burst
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#D4AF57", "#F5DE93", "#E9A23B", "#C62828", "#FFF4DD"],
      shapes: ["circle"],
      gravity: 0.8,
      scalar: 1.1,
    });

    const nextCount = litCount + 1;
    setLitCount(nextCount);
    sessionStorage.setItem("durga_puja_diyas_lit", nextCount.toString());
    setShowMessage(true);

    // Light next lamp in the row of 7
    setActiveDiyas((prev) => {
      const nextArr = [...prev];
      const nextIndex = nextArr.findIndex((v) => !v);
      if (nextIndex !== -1) {
        nextArr[nextIndex] = true;
      } else {
        // If all 7 are already lit, cycle and keep all lit
        return prev;
      }
      return nextArr;
    });
  };

  const handleReset = () => {
    setLitCount(0);
    setActiveDiyas([false, false, false, false, false, false, false]);
    setShowMessage(false);
    sessionStorage.removeItem("durga_puja_diyas_lit");
  };

  return (
    <section id="diya-experience" className="relative py-24 bg-gradient-to-b from-maroon-deep via-maroon to-maroon-deep text-parchment overflow-hidden">
      {/* Background warm radial aura */}
      <div className="absolute inset-0 bg-radial-flame opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-saffron/20 border border-antiqueGold/50 text-antiqueGold-light font-devanagari text-xs sm:text-sm font-semibold mb-3">
          <Sparkles className="w-4 h-4 text-saffron" />
          <span>शुभ दीप प्रज्वलन अनुभव</span>
          <Sparkles className="w-4 h-4 text-saffron" />
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-devanagari font-bold gold-gradient-text tracking-tight">
          आइए, शुभकामनाओं का एक दीप जलाएँ
        </h2>

        <p className="mt-3 text-sm sm:text-base text-parchment-card/85 font-devanagari max-w-2xl mx-auto leading-relaxed">
          माँ दुर्गा के चरणों में अपने और अपने प्रियजनों के कल्याण हेतु पावन दीप प्रज्वलित करें
        </p>

        <MandapaDivider className="mt-4 max-w-xs mx-auto" />

        {/* Central Master Diya Display */}
        <div className="my-10 flex flex-col items-center">
          <div className="relative flex flex-col items-center justify-center p-8">
            {/* Diya Flame */}
            <div className="relative w-16 h-24 mb-[-12px] flex items-center justify-center transition-all duration-700">
              {litCount > 0 ? (
                <>
                  {/* Outer radiant aura */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute w-36 h-36 rounded-full bg-saffron/30 blur-2xl pointer-events-none"
                  />
                  {/* Core flame */}
                  <div className="w-8 h-16 rounded-full bg-gradient-to-t from-festiveRed via-saffron to-parchment-light animate-flame shadow-diyaGlow" />
                  {/* Flame inner blue cone */}
                  <div className="absolute bottom-2 w-3 h-5 rounded-full bg-blue-300/60 blur-[1px]" />
                </>
              ) : (
                <div className="w-2 h-4 rounded-full bg-darkText/50 mb-1" title="दीप अभी प्रज्वलित नहीं है" />
              )}
            </div>

            {/* Handcrafted Pure Brass Diya SVG */}
            <svg viewBox="0 0 160 70" className="w-48 sm:w-60 h-24 text-antiqueGold drop-shadow-2xl">
              <defs>
                <linearGradient id="brassGradMaster" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF4DD" />
                  <stop offset="30%" stopColor="#F5DE93" />
                  <stop offset="70%" stopColor="#D4AF57" />
                  <stop offset="100%" stopColor="#9B7829" />
                </linearGradient>
                <linearGradient id="oilGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8F1018" />
                  <stop offset="50%" stopColor="#C57B14" />
                  <stop offset="100%" stopColor="#8F1018" />
                </linearGradient>
              </defs>

              {/* Diya Base Ring */}
              <ellipse cx="80" cy="58" rx="45" ry="10" fill="#9B7829" />
              {/* Diya Bowl Outer Curve */}
              <path
                d="M20 22 C35 60 125 60 140 22 C146 38 116 58 80 60 C44 58 14 38 20 22 Z"
                fill="url(#brassGradMaster)"
              />
              {/* Diya Bowl Rim */}
              <ellipse cx="80" cy="22" rx="60" ry="12" fill="url(#brassGradMaster)" stroke="#9B7829" strokeWidth="1" />
              {/* Diya Oil Well */}
              <ellipse cx="80" cy="22" rx="52" ry="9" fill="url(#oilGrad)" />
              {/* Diya Spout Beak */}
              <path d="M74 15 Q80 8 86 15 Z" fill="#F5DE93" />
            </svg>

            {/* Radiant floor reflection */}
            <div
              className={`w-44 h-8 rounded-full bg-saffron/20 blur-xl mt-[-10px] transition-opacity duration-700 ${
                litCount > 0 ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Devotional Blessing Line */}
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 px-6 py-3 rounded-2xl bg-maroon-card/90 border border-antiqueGold/60 max-w-xl mx-auto shadow-md"
            >
              <p className="text-base sm:text-lg text-parchment-light font-devanagari font-semibold">
                &ldquo;प्रेम, शांति और सद्भाव का प्रकाश आपके जीवन में बना रहे।&rdquo;
              </p>
              <span className="text-xs text-antiqueGold-light font-devanagari mt-1 block">
                — माँ जगदंबा की कृपा आप पर सदा रहे
              </span>
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleLightDiya}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-vermilion via-festiveRed to-vermilion text-parchment font-devanagari font-bold text-base sm:text-lg border-2 border-antiqueGold shadow-diyaGlow hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
            >
              <Flame className="w-5 h-5 text-saffron fill-saffron animate-bounce" />
              <span>दीप जलाएँ</span>
            </button>

            {litCount > 0 && (
              <button
                onClick={handleReset}
                className="px-5 py-3 rounded-full bg-maroon-card/80 hover:bg-maroon border border-antiqueGold/40 text-parchment/80 hover:text-parchment text-xs sm:text-sm font-devanagari transition-all flex items-center space-x-1.5"
                title="सत्र के दीप रीसेट करें"
              >
                <RotateCcw className="w-4 h-4" />
                <span>रीसेट करें</span>
              </button>
            )}
          </div>

          {/* Session Counter (Honest local session tracking) */}
          <div className="mt-5 text-xs sm:text-sm text-antiqueGold/90 font-devanagari">
            <span>आपने इस वर्तमान सत्र में </span>
            <strong className="text-parchment-light font-bold text-base px-1">
              {litCount}
            </strong>
            <span> दीप प्रज्वलित किए हैं। (स्थानीय सत्र गणना)</span>
          </div>
        </div>

        {/* Row of 7 Auspicious Diyas (सप्त दीप पंक्ति) */}
        <div className="mt-12 pt-8 border-t border-antiqueGold/20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <LotusMotif className="w-4 h-4 text-antiqueGold" />
            <h3 className="text-sm sm:text-base font-devanagari font-semibold text-antiqueGold-light">
              सप्त दीप मंगल पंक्ति (क्लिक कर प्रत्येक दीप प्रज्वलित करें)
            </h3>
            <LotusMotif className="w-4 h-4 text-antiqueGold" />
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {activeDiyas.map((isLit, i) => (
              <button
                key={i}
                onClick={() => {
                  if (!isLit) {
                    handleLightDiya();
                  }
                }}
                className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all ${
                  isLit
                    ? "bg-maroon-card/90 border-antiqueGold shadow-diyaGlow scale-105"
                    : "bg-maroon-deep/60 border-antiqueGold/30 opacity-70 hover:opacity-100 hover:border-antiqueGold/60"
                }`}
                aria-label={`दीप क्रमांक ${i + 1} ${isLit ? "प्रज्वलित है" : "जलाने हेतु क्लिक करें"}`}
              >
                {/* Flame indicator */}
                <div className="h-6 flex items-center justify-center mb-1">
                  {isLit ? (
                    <div className="w-3.5 h-6 rounded-full bg-gradient-to-t from-festiveRed via-saffron to-parchment animate-flame shadow-sm" />
                  ) : (
                    <div className="w-1.5 h-2 rounded-full bg-darkText/60" />
                  )}
                </div>

                {/* Mini Diya Icon */}
                <svg viewBox="0 0 50 25" className="w-8 h-4 text-antiqueGold">
                  <path d="M5 8 C12 20 38 20 45 8 C48 14 36 22 25 22 C14 22 2 14 5 8 Z" fill="#D4AF57" />
                  <ellipse cx="25" cy="8" rx="20" ry="4" fill="#8F1018" />
                </svg>

                <span className="text-[10px] text-antiqueGold/80 font-devanagari mt-1">
                  दीप {i + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
