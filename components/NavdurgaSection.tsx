"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Compass, Shield, Heart } from "lucide-react";
import { navdurgaForms, NavdurgaForm } from "@/lib/festival-config";
import { LotusMotif, TrishulMotif, MandapaDivider } from "./DecorativeMotifs";
import { soundManager } from "@/lib/sound";

export default function NavdurgaSection() {
  const [selectedForm, setSelectedForm] = useState<NavdurgaForm | null>(null);

  // Close modal with Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedForm(null);
      }
    },
    [setSelectedForm]
  );

  useEffect(() => {
    if (selectedForm) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedForm, handleKeyDown]);

  const openModal = (form: NavdurgaForm) => {
    soundManager.playDiyaChime();
    setSelectedForm(form);
  };

  return (
    <section id="navdurga" className="relative py-24 bg-maroon-deep text-parchment overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-halo opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-vermilion-dark/80 border border-antiqueGold/50 text-antiqueGold-light font-devanagari text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-antiqueGold" />
            <span>नवरात्र पावन आराधना</span>
            <Sparkles className="w-4 h-4 text-antiqueGold" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-devanagari font-bold gold-gradient-text tracking-tight">
            नवदुर्गा — शक्ति के नौ दिव्य स्वरूप
          </h2>

          <p className="mt-3 text-sm sm:text-base text-parchment-card/85 font-devanagari leading-relaxed">
            माँ जगदंबा के नौ पावन रूपों का शास्त्रीय दर्शन, उनके वाहन, अमोघ मंत्र एवं आध्यात्मिक महत्व
          </p>

          <MandapaDivider className="mt-4 max-w-xs mx-auto" />
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {navdurgaForms.map((form, index) => (
            <motion.div
              key={form.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative rounded-2xl bg-gradient-to-b from-maroon-card via-maroon to-maroon-deep border border-antiqueGold/40 p-6 flex flex-col justify-between shadow-cardFestive hover:shadow-goldGlow hover:border-antiqueGold transition-all group overflow-hidden"
            >
              {/* Subtle Day Number Badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-antiqueGold/20">
                <span className="text-xs font-devanagari px-2.5 py-0.5 rounded-full bg-vermilion/50 border border-antiqueGold/40 text-antiqueGold-light font-semibold">
                  {form.day}
                </span>
                <span className="text-xs text-parchment/60 font-devanagari">
                  {form.tithi}
                </span>
              </div>

              <div>
                {/* Form Icon / Decorative Emblem */}
                <div className="w-12 h-12 rounded-xl bg-maroon-deep border border-antiqueGold/50 flex items-center justify-center mb-4 text-antiqueGold group-hover:scale-105 group-hover:border-antiqueGold transition-all shadow-inner">
                  <TrishulMotif className="w-7 h-7 text-antiqueGold" />
                </div>

                {/* Form Name */}
                <h3 className="text-xl sm:text-2xl font-devanagari font-bold text-parchment-light group-hover:text-antiqueGold-light transition-colors mb-1">
                  {form.hindiName}
                </h3>

                <p className="text-xs text-antiqueGold/90 font-devanagari italic mb-3">
                  {form.sanskritTitle}
                </p>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-parchment/80 font-devanagari leading-relaxed line-clamp-3 mb-4">
                  {form.shortDesc}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-antiqueGold/20 flex items-center justify-between">
                <span className="text-xs text-antiqueGold/70 font-devanagari">
                  वाहन: {form.vahana.split(" ")[0]}
                </span>

                <button
                  onClick={() => openModal(form)}
                  className="px-4 py-1.5 rounded-full bg-maroon border border-antiqueGold/60 hover:bg-vermilion hover:border-antiqueGold text-parchment text-xs font-devanagari font-semibold transition-all flex items-center space-x-1 group-hover:shadow-sm"
                >
                  <span>और जानें</span>
                  <span className="text-xs text-antiqueGold group-hover:translate-x-0.5 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accessible Detail Modal */}
      <AnimatePresence>
        {selectedForm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="navdurga-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-gradient-to-b from-maroon-card via-maroon-deep to-maroon-deep border-2 border-antiqueGold rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedForm(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-maroon-deep/80 hover:bg-vermilion text-parchment border border-antiqueGold/40 focus:outline-none focus:ring-2 focus:ring-antiqueGold"
                aria-label="विवरण बंद करें"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center space-x-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-vermilion text-xs font-devanagari font-bold text-parchment border border-antiqueGold/40">
                  {selectedForm.day} ({selectedForm.tithi})
                </span>
                <span className="text-xs text-antiqueGold font-devanagari">
                  ग्रह: {selectedForm.governingPlanet}
                </span>
              </div>

              <h3 id="navdurga-modal-title" className="text-2xl sm:text-3xl font-devanagari font-bold gold-gradient-text">
                {selectedForm.hindiName}
              </h3>
              <p className="text-sm text-antiqueGold font-devanagari italic mb-4">
                {selectedForm.sanskritTitle}
              </p>

              {/* Sacred Mantra Box */}
              <div className="p-4 rounded-xl bg-maroon-deep/90 border border-antiqueGold/50 mb-5 text-center shadow-inner">
                <span className="text-xs uppercase tracking-wider text-antiqueGold-light font-devanagari font-semibold block mb-1">
                  ॥ पावन ध्यान मंत्र ॥
                </span>
                <p className="text-base sm:text-lg font-devanagari font-bold text-parchment-light">
                  {selectedForm.mantra}
                </p>
              </div>

              {/* Attributes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-xs sm:text-sm font-devanagari">
                <div className="p-3 rounded-lg bg-maroon/60 border border-antiqueGold/20 flex items-start space-x-2">
                  <Compass className="w-4 h-4 text-antiqueGold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-antiqueGold-light block">वाहन एवं आसन:</strong>
                    <span className="text-parchment/90">{selectedForm.vahana}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-maroon/60 border border-antiqueGold/20 flex items-start space-x-2">
                  <Shield className="w-4 h-4 text-antiqueGold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-antiqueGold-light block">स्वरूप एवं आयुध:</strong>
                    <span className="text-parchment/90">{selectedForm.attributes}</span>
                  </div>
                </div>
              </div>

              {/* Detailed Explanation */}
              <div className="mb-5">
                <h4 className="text-sm font-devanagari font-bold text-antiqueGold-light mb-2 flex items-center space-x-2">
                  <LotusMotif className="w-4 h-4 text-antiqueGold" />
                  <span>पौराणिक एवं आध्यात्मिक महत्व</span>
                </h4>
                <p className="text-sm sm:text-base text-parchment/90 font-devanagari leading-relaxed">
                  {selectedForm.fullDesc}
                </p>
              </div>

              {/* Divine Blessing */}
              <div className="p-4 rounded-xl bg-vermilion-dark/50 border border-antiqueGold/40 flex items-start space-x-3">
                <Heart className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs text-saffron font-devanagari uppercase tracking-wider block">
                    आशीर्वाद एवं फलश्रुति
                  </strong>
                  <p className="text-sm text-parchment font-devanagari font-medium mt-0.5">
                    {selectedForm.blessing}
                  </p>
                </div>
              </div>

              {/* Close Action in Modal */}
              <div className="mt-6 pt-4 border-t border-antiqueGold/30 flex justify-end">
                <button
                  onClick={() => setSelectedForm(null)}
                  className="px-6 py-2 rounded-full bg-antiqueGold text-maroon-deep font-devanagari font-bold text-sm hover:bg-parchment transition-colors"
                >
                  दर्शन संपन्न
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
