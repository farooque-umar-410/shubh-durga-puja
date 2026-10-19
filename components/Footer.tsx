"use client";

import React from "react";
import { Share2, Sparkles, Heart } from "lucide-react";
import { LotusMotif } from "./DecorativeMotifs";
import { shareNative, getCanonicalUrl } from "@/lib/share";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleShare = async () => {
    const siteUrl = getCanonicalUrl();
    await shareNative({
      title: "शुभ दुर्गा पूजा — अतीकुर रहमान",
      text: "माँ दुर्गा के पावन पर्व शारदीय दुर्गा पूजा पर अतीकुर रहमान की ओर से सप्रेम शुभकामनाएँ।",
      url: siteUrl,
    });
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem("durga_puja_intro_seen");
    window.location.reload();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#140203] text-parchment-card border-t border-antiqueGold/30 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-antiqueGold/20">
          {/* Brand & Signature */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2.5 mb-1.5">
              <LotusMotif className="w-5 h-5 text-antiqueGold" />
              <span className="font-devanagari font-bold text-xl text-parchment-light">
                शुभ दुर्गा पूजा
              </span>
            </div>
            <p className="text-sm text-antiqueGold-light font-devanagari">
              सप्रेम शुभकामनाएँ — <strong className="font-semibold text-parchment">अतीकुर रहमान</strong>
            </p>
            <p className="text-xs text-parchment/60 font-devanagari mt-1 max-w-sm">
              माँ दुर्गा की असीम अनुकंपा आप सभी के जीवन को सुख, शांति और समृद्धि से परिपूर्ण रखे।
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-devanagari text-parchment/80">
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-antiqueGold transition-colors"
            >
              मुख्य पृष्ठ
            </button>
            <span>•</span>
            <button
              onClick={() => scrollToSection("blessings")}
              className="hover:text-antiqueGold transition-colors"
            >
              शुभकामनाएँ
            </button>
            <span>•</span>
            <button
              onClick={() => scrollToSection("navdurga")}
              className="hover:text-antiqueGold transition-colors"
            >
              नवदुर्गा दर्शन
            </button>
            <span>•</span>
            <button
              onClick={() => scrollToSection("diya-experience")}
              className="hover:text-antiqueGold transition-colors"
            >
              दीप प्रज्वलन
            </button>
            <span>•</span>
            <button
              onClick={() => scrollToSection("aarti")}
              className="hover:text-antiqueGold transition-colors"
            >
              डिजिटल आरती
            </button>
            <span>•</span>
            <button
              onClick={() => scrollToSection("greeting-generator")}
              className="hover:text-antiqueGold transition-colors"
            >
              संदेश रचना
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleShare}
              className="px-4 py-2 rounded-full bg-vermilion-dark/80 hover:bg-vermilion border border-antiqueGold/40 text-xs font-devanagari text-parchment flex items-center space-x-1.5 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-antiqueGold-light" />
              <span>वेबसाइट साझा करें</span>
            </button>

            <button
              onClick={handleReplayIntro}
              className="px-3.5 py-2 rounded-full bg-maroon-card/60 hover:bg-maroon border border-antiqueGold/30 text-xs font-devanagari text-parchment/80 hover:text-parchment transition-colors"
              title="स्वागत प्रस्तावना पुनः देखें"
            >
              प्रस्तावना देखें
            </button>
          </div>
        </div>

        {/* Bottom copyright and respect note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-parchment/60 font-devanagari gap-2 text-center sm:text-left">
          <div>
            © {currentYear} शुभ दुर्गा पूजा • सप्रेम प्रस्तुति: <strong>अतीकुर रहमान</strong>
          </div>
          <div className="flex items-center space-x-1">
            <span>आस्था, सद्भाव और सांस्कृतिक एकता को समर्पित</span>
            <Sparkles className="w-3.5 h-3.5 text-antiqueGold/60" />
          </div>
        </div>
      </div>
    </footer>
  );
}
