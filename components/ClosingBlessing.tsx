"use client";

import React from "react";
import { ArrowUp, Sparkles, Heart } from "lucide-react";
import { LotusMotif, MandalaBackdrop, MandapaDivider } from "./DecorativeMotifs";
import { soundManager } from "@/lib/sound";

export default function ClosingBlessing() {
  const scrollToTop = () => {
    soundManager.playDiyaChime();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-maroon via-maroon-deep to-[#180204] text-parchment text-center overflow-hidden">
      {/* Background Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-15">
        <MandalaBackdrop className="w-[600px] h-[600px] text-antiqueGold" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        {/* Sacred Glowing Diya */}
        <div className="relative mb-6 flex flex-col items-center">
          <div className="relative w-8 h-12 mb-[-6px] flex items-center justify-center">
            <div className="absolute w-12 h-12 rounded-full bg-saffron/30 blur-md pointer-events-none" />
            <div className="w-5 h-9 rounded-full bg-gradient-to-t from-festiveRed via-saffron to-parchment-light animate-flame shadow-diyaGlow" />
          </div>

          <svg viewBox="0 0 100 45" className="w-20 h-10 text-antiqueGold">
            <path
              d="M10 10 C30 35 70 35 90 10 C92 24 72 38 50 40 C28 38 8 24 10 10 Z"
              fill="#D4AF57"
            />
            <ellipse cx="50" cy="12" rx="40" ry="6" fill="#8F1018" />
          </svg>
        </div>

        {/* Lotus Emblem */}
        <div className="flex items-center space-x-3 text-antiqueGold mb-4">
          <LotusMotif className="w-6 h-6 text-antiqueGold" />
          <span className="text-xs uppercase tracking-widest font-devanagari font-bold text-antiqueGold-light">
            ॥ पावन समापन आशीष ॥
          </span>
          <LotusMotif className="w-6 h-6 text-antiqueGold" />
        </div>

        {/* Main Blessing Quote */}
        <blockquote className="text-xl sm:text-3xl font-devanagari font-bold gold-gradient-text leading-relaxed mb-6 max-w-2xl">
          &ldquo;माँ दुर्गा का आशीर्वाद आपके घर-आँगन को सुख, शांति और खुशियों से भर दे।&rdquo;
        </blockquote>

        {/* Signature Box */}
        <div className="p-6 rounded-2xl bg-maroon-card/80 border border-antiqueGold/50 max-w-md w-full shadow-cardFestive mb-8">
          <p className="text-sm sm:text-base font-devanagari text-parchment-light font-medium mb-1">
            आप सभी को दुर्गा पूजा की हार्दिक शुभकामनाएँ
          </p>
          <div className="h-[1px] w-24 bg-antiqueGold/40 mx-auto my-2" />
          <p className="text-lg sm:text-xl font-devanagari font-bold text-antiqueGold-light">
            सप्रेम — अतीकुर रहमान
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="group px-7 py-3 rounded-full bg-gradient-to-r from-vermilion via-festiveRed to-vermilion text-parchment font-devanagari font-semibold text-sm sm:text-base border border-antiqueGold shadow-goldGlow hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
        >
          <ArrowUp className="w-4 h-4 text-parchment group-hover:-translate-y-1 transition-transform" />
          <span>फिर से शुरुआत करें</span>
        </button>
      </div>
    </section>
  );
}
