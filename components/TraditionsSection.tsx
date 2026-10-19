"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { durgaPujaTraditions, TraditionItem } from "@/lib/festival-config";
import { LotusMotif, KalashMotif, MandapaDivider } from "./DecorativeMotifs";

export default function TraditionsSection() {
  const [expandedId, setExpandedId] = useState<string>("ashtami");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="traditions" className="relative py-24 bg-parchment text-darkText overflow-hidden">
      {/* Top transition shadow */}
      <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-maroon-deep/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-vermilion/10 border border-vermilion/30 text-vermilion font-devanagari text-xs sm:text-sm font-semibold mb-3">
            <BookOpen className="w-4 h-4 text-vermilion" />
            <span>सांस्कृतिक धरोहर</span>
            <BookOpen className="w-4 h-4 text-vermilion" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-devanagari font-bold text-maroon tracking-tight">
            दुर्गा पूजा: आस्था, परंपरा और उत्सव
          </h2>

          <p className="mt-3 text-sm sm:text-base text-darkText-muted font-devanagari leading-relaxed">
            महालया के चक्षुदान से लेकर विजयादशमी के सिंदूर खेला तक — शारदीय उत्सव की अमर वैदिक एवं लोक परंपराएँ
          </p>

          <MandapaDivider className="mt-4 max-w-xs mx-auto" />
        </div>

        {/* Traditions Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {durgaPujaTraditions.map((item: TraditionItem, index: number) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md ${
                  isExpanded
                    ? "bg-parchment-light border-vermilion shadow-lg ring-1 ring-vermilion/30"
                    : "bg-parchment-card border-antiqueGold/40 hover:border-antiqueGold"
                }`}
              >
                <div className="p-6">
                  {/* Tithi & Day Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-devanagari px-2.5 py-0.5 rounded-full bg-vermilion/10 text-vermilion font-bold border border-vermilion/30">
                      तिथि: {item.tithi}
                    </span>
                    <span className="text-xs text-darkText-subtle font-devanagari">
                      {item.dayNumber}
                    </span>
                  </div>

                  {/* Header Title */}
                  <h3 className="text-xl sm:text-2xl font-devanagari font-bold text-maroon mb-1">
                    {item.title}
                  </h3>
                  <span className="text-xs text-antiqueGold-dark font-devanagari block mb-3 font-medium">
                    {item.englishTitle}
                  </span>

                  {/* Short Significance */}
                  <p className="text-xs sm:text-sm text-darkText font-devanagari leading-relaxed mb-4">
                    {item.significance}
                  </p>

                  {/* Expandable Rituals & Cultural Notes */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="pt-3 border-t border-antiqueGold/30"
                      >
                        <strong className="text-xs text-vermilion font-devanagari uppercase tracking-wider block mb-2">
                          मुख्य अनुष्ठान व विधि:
                        </strong>
                        <ul className="space-y-1.5 mb-4 text-xs font-devanagari text-darkText">
                          {item.rituals.map((r, rIdx) => (
                            <li key={rIdx} className="flex items-start space-x-2">
                              <span className="text-vermilion font-bold">•</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="p-3 rounded-lg bg-parchment border border-antiqueGold/40 text-xs font-devanagari text-darkText-muted">
                          <strong className="text-maroon block mb-0.5">सांस्कृतिक विशेषता:</strong>
                          <span>{item.culturalNote}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Toggle Button */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className={`w-full py-2.5 px-6 border-t text-xs font-devanagari font-semibold flex items-center justify-between transition-colors ${
                    isExpanded
                      ? "bg-vermilion/10 border-vermilion/30 text-vermilion"
                      : "bg-parchment border-antiqueGold/30 text-darkText-muted hover:text-maroon hover:bg-parchment-light"
                  }`}
                  aria-expanded={isExpanded}
                >
                  <span>{isExpanded ? "संक्षिप्त करें" : "अनुष्ठान एवं परंपरा विवरण"}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Regional Diversity Note */}
        <div className="mt-14 max-w-3xl mx-auto p-5 rounded-2xl bg-parchment-light border border-antiqueGold/50 shadow-sm flex items-start space-x-3 text-xs sm:text-sm font-devanagari text-darkText-muted">
          <MapPin className="w-5 h-5 text-vermilion shrink-0 mt-0.5" />
          <div>
            <strong className="text-maroon block mb-1">क्षेत्रीय एवं पारिवारिक विविधता संबंधी सूचना:</strong>
            <p className="leading-relaxed">
              दुर्गा पूजा और शारदीय नवरात्र के रीति-रिवाज, भोग की परंपराएँ और पूजन तिथियाँ विभिन्न राज्यों (पश्चिम बंगाल, बिहार, उत्तर प्रदेश, झारखंड, असम, ओडिशा) और स्थानीय पंचांगों के अनुसार थोड़े भिन्न हो सकते हैं। यह प्रस्तुति पारंपरिक सर्वमान्य वैदिक व लोक मान्यताओं पर आधारित है।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
