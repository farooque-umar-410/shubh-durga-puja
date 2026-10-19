"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, MessageCircle, Sparkles, Heart } from "lucide-react";
import { galleryGreetingCards, GalleryGreetingCard } from "@/lib/greetings";
import { copyToClipboard, getWhatsAppShareUrl } from "@/lib/share";
import { LotusMotif, MandapaDivider } from "./DecorativeMotifs";
import { soundManager } from "@/lib/sound";

export default function GreetingGallery() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (card: GalleryGreetingCard) => {
    const textToCopy = `${card.shloka ? card.shloka + "\n\n" : ""}${card.message}\n\n— सप्रेम, ${card.sender}`;
    const success = await copyToClipboard(textToCopy);
    if (success) {
      soundManager.playDiyaChime();
      setCopiedId(card.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleShareWhatsApp = (card: GalleryGreetingCard) => {
    soundManager.playDiyaChime();
    const textToShare = `${card.shloka ? card.shloka + "\n\n" : ""}${card.message}\n\n— सप्रेम, ${card.sender}`;
    const url = getWhatsAppShareUrl(textToShare);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="greeting-gallery" className="relative py-24 bg-parchment text-darkText overflow-hidden">
      {/* Top transition shadow */}
      <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-maroon-deep/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-vermilion/10 border border-vermilion/30 text-vermilion font-devanagari text-xs sm:text-sm font-semibold mb-3">
            <Heart className="w-4 h-4 text-vermilion fill-vermilion" />
            <span>शुभकामना संग्रह</span>
            <Heart className="w-4 h-4 text-vermilion fill-vermilion" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-devanagari font-bold text-maroon tracking-tight">
            शारदीय शुभकामना कार्ड संग्रह
          </h2>

          <p className="mt-3 text-sm sm:text-base text-darkText-muted font-devanagari leading-relaxed">
            छह विभिन्न पारंपरिक शैलियों में तैयार किए गए विशेष दुर्गा पूजा संदेश, जिन्हें आप सीधे कॉपी व साझा कर सकते हैं
          </p>

          <MandapaDivider className="mt-4 max-w-xs mx-auto" />
        </div>

        {/* 6 Greeting Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryGreetingCards.map((card, index) => {
            const isCopied = copiedId === card.id;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl bg-gradient-to-b ${card.bgClass} border-2 ${card.borderClass} p-6 sm:p-7 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all overflow-hidden group`}
              >
                {/* Top Badge & Tag */}
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-antiqueGold/20">
                    <span className="text-[11px] font-devanagari px-2.5 py-0.5 rounded-full bg-antiqueGold/20 text-antiqueGold-light font-bold border border-antiqueGold/40">
                      {card.tag}
                    </span>
                    <span className="text-xs text-parchment/60 font-devanagari">
                      अतीकुर रहमान
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-devanagari font-bold text-parchment-light mb-1">
                    {card.title}
                  </h3>
                  <span className="text-xs text-antiqueGold/80 font-devanagari block mb-4">
                    {card.subtitle}
                  </span>

                  {/* Shloka Quote if present */}
                  {card.shloka && (
                    <div className="p-3 rounded-xl bg-black/25 border border-antiqueGold/30 mb-4 text-xs font-devanagari text-antiqueGold-light italic leading-relaxed text-center">
                      {card.shloka}
                    </div>
                  )}

                  {/* Message Body */}
                  <p className="text-sm font-devanagari text-parchment/90 leading-relaxed mb-6">
                    {card.message}
                  </p>
                </div>

                {/* Bottom Signature & Action Buttons */}
                <div className="pt-4 border-t border-antiqueGold/20">
                  <div className="flex items-center justify-between text-xs text-antiqueGold-light font-devanagari mb-4">
                    <span>सप्रेम शुभकामनाओं सहित</span>
                    <strong className="font-semibold text-parchment">— {card.sender}</strong>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(card)}
                      className="py-2 px-3 rounded-lg bg-black/40 hover:bg-black/60 border border-antiqueGold/50 text-parchment text-xs font-devanagari font-semibold transition-all flex items-center justify-center space-x-1.5"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-green-300">कॉपी!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-antiqueGold" />
                          <span>कॉपी करें</span>
                        </>
                      )}
                    </button>

                    {/* WhatsApp Share Button */}
                    <button
                      onClick={() => handleShareWhatsApp(card)}
                      className="py-2 px-3 rounded-lg bg-green-700/80 hover:bg-green-700 border border-green-500/50 text-white text-xs font-devanagari font-semibold transition-all flex items-center justify-center space-x-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
