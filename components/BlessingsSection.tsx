"use client";

import React from "react";
import { motion } from "framer-motion";
import { festiveBlessingsData } from "@/lib/festival-config";
import { LotusMotif, KalashMotif, TrishulMotif, MandapaDivider } from "./DecorativeMotifs";

export default function BlessingsSection() {
  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case "peace":
        return <LotusMotif className="w-10 h-10 text-vermilion" />;
      case "wealth":
        return <KalashMotif className="w-10 h-10 text-saffron-dark" />;
      case "strength":
        return <TrishulMotif className="w-10 h-10 text-festiveRed" />;
      case "unity":
      default:
        return (
          <div className="relative flex items-center justify-center w-10 h-10 text-vermilion">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              {/* Sacred Diya with dual flame / unity motif */}
              <path d="M50 8 C40 22 42 35 50 42 C58 35 60 22 50 8 Z" fill="#E9A23B" />
              <path d="M20 52 C30 75 70 75 80 52 C70 65 30 65 20 52 Z" fill="#9B7829" />
              <ellipse cx="50" cy="52" rx="30" ry="6" fill="#8F1018" />
              <circle cx="50" cy="22" r="4" fill="#F5DE93" />
            </svg>
          </div>
        );
    }
  };

  return (
    <section id="blessings" className="relative py-20 bg-parchment text-darkText overflow-hidden">
      {/* Decorative top transition curve */}
      <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-maroon-deep/30 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-vermilion/10 border border-vermilion/30 text-vermilion font-devanagari text-xs sm:text-sm font-semibold mb-3">
            <LotusMotif className="w-4 h-4 text-vermilion" />
            <span>शुभकामना संदेश</span>
            <LotusMotif className="w-4 h-4 text-vermilion" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-devanagari font-bold text-maroon tracking-tight">
            माँ दुर्गा की कृपा आप सभी पर बनी रहे
          </h2>

          <p className="mt-3 text-sm sm:text-base text-darkText-muted font-devanagari leading-relaxed">
            इस पावन शारदीय महोत्सव में अतीकुर रहमान की ओर से आपके और आपके पूरे परिवार के लिए चार पावन आशीर्वाद
          </p>

          <MandapaDivider className="mt-4 max-w-xs mx-auto" />
        </div>

        {/* 4 Blessings Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {festiveBlessingsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative rounded-2xl bg-parchment-light border-2 border-antiqueGold/50 p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group overflow-hidden"
            >
              {/* Corner Traditional Decorative Accent */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-antiqueGold/15 group-hover:scale-125 transition-transform pointer-events-none" />

              <div>
                {/* Custom SVG Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-parchment-card border border-antiqueGold/60 flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform">
                  {getCardIcon(item.iconName)}
                </div>

                {/* Subtitle tag */}
                <span className="text-[11px] font-devanagari font-medium text-vermilion uppercase tracking-wider block mb-1">
                  {item.subtitle}
                </span>

                {/* Card Title */}
                <h3 className="text-xl font-devanagari font-bold text-maroon group-hover:text-vermilion transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Card Text */}
                <p className="text-darkText font-devanagari text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-antiqueGold/30 flex items-center justify-between text-xs text-darkText-muted font-devanagari">
                <span>शुभ दुर्गा पूजा</span>
                <LotusMotif className="w-4 h-4 text-antiqueGold group-hover:text-vermilion transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
