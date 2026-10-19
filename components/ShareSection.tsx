"use client";

import React, { useState } from "react";
import { Share2, MessageCircle, Copy, Check, Link, Heart, Sparkles } from "lucide-react";
import { copyToClipboard, getWhatsAppShareUrl, shareNative, getCanonicalUrl } from "@/lib/share";
import { LotusMotif, MandapaDivider } from "./DecorativeMotifs";
import { soundManager } from "@/lib/sound";

export default function ShareSection() {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const defaultGreetingMessage = `शुभ दुर्गा पूजा! 🌺\n\nमाँ दुर्गा की कृपा से आपके जीवन में सुख, शांति, समृद्धि और सकारात्मक ऊर्जा का संचार हो।\n\nसप्रेम शुभकामनाओं सहित,\n— अतीकुर रहमान`;

  const handleShareWhatsApp = () => {
    soundManager.playDiyaChime();
    const siteUrl = getCanonicalUrl();
    const url = getWhatsAppShareUrl(defaultGreetingMessage, siteUrl);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCopyLink = async () => {
    const siteUrl = getCanonicalUrl();
    const success = await copyToClipboard(siteUrl);
    if (success) {
      soundManager.playDiyaChime();
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleCopyText = async () => {
    const siteUrl = getCanonicalUrl();
    const textToCopy = `${defaultGreetingMessage}\n\nवेबसाइट देखें: ${siteUrl}`;
    const success = await copyToClipboard(textToCopy);
    if (success) {
      soundManager.playDiyaChime();
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    soundManager.playDiyaChime();
    const siteUrl = getCanonicalUrl();
    await shareNative({
      title: "शुभ दुर्गा पूजा — अतीकुर रहमान",
      text: defaultGreetingMessage,
      url: siteUrl,
    });
  };

  return (
    <section id="share-section" className="relative py-20 bg-parchment text-darkText overflow-hidden">
      {/* Top transition shadow */}
      <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-maroon-deep/20 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-vermilion/10 border border-vermilion/30 text-vermilion font-devanagari text-xs sm:text-sm font-semibold mb-3">
          <Heart className="w-4 h-4 text-vermilion fill-vermilion" />
          <span>शुभकामना प्रसार</span>
          <Heart className="w-4 h-4 text-vermilion fill-vermilion" />
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-devanagari font-bold text-maroon tracking-tight">
          खुशियाँ बाँटें, शुभकामनाएँ फैलाएँ
        </h2>

        <p className="mt-3 text-sm sm:text-base text-darkText-muted font-devanagari max-w-2xl mx-auto leading-relaxed">
          इस पावन पर्व पर अपने परिजनों, मित्रों और शुभचिंतकों तक माँ दुर्गा का दिव्य आशीर्वाद और अतीकुर रहमान की शुभकामनाएँ पहुँचाएँ
        </p>

        <MandapaDivider className="mt-4 max-w-xs mx-auto" />

        {/* Share Action Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {/* Action 1: WhatsApp */}
          <button
            onClick={handleShareWhatsApp}
            className="p-5 rounded-2xl bg-gradient-to-br from-green-700 to-green-800 hover:from-green-600 hover:to-green-700 text-white shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex flex-col items-center justify-center text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 fill-white" />
            </div>
            <span className="font-devanagari font-bold text-base block">
              WhatsApp पर भेजें
            </span>
            <span className="text-xs text-white/80 font-devanagari mt-1">
              सीधे चैट व स्टेटस पर
            </span>
          </button>

          {/* Action 2: Copy Link */}
          <button
            onClick={handleCopyLink}
            className="p-5 rounded-2xl bg-parchment-light border-2 border-antiqueGold hover:border-vermilion text-maroon shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex flex-col items-center justify-center text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-antiqueGold/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              {copiedLink ? <Check className="w-6 h-6 text-green-600" /> : <Link className="w-6 h-6 text-antiqueGold-dark" />}
            </div>
            <span className="font-devanagari font-bold text-base block">
              {copiedLink ? "लिंक कॉपी हो गया!" : "वेबसाइट लिंक कॉपी करें"}
            </span>
            <span className="text-xs text-darkText-muted font-devanagari mt-1">
              क्लिपबोर्ड पर सेव करें
            </span>
          </button>

          {/* Action 3: Copy Text Greeting */}
          <button
            onClick={handleCopyText}
            className="p-5 rounded-2xl bg-parchment-light border-2 border-antiqueGold hover:border-vermilion text-maroon shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex flex-col items-center justify-center text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-vermilion/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              {copiedText ? <Check className="w-6 h-6 text-green-600" /> : <Copy className="w-6 h-6 text-vermilion" />}
            </div>
            <span className="font-devanagari font-bold text-base block">
              {copiedText ? "संदेश कॉपी हो गया!" : "हिंदी संदेश कॉपी करें"}
            </span>
            <span className="text-xs text-darkText-muted font-devanagari mt-1">
              एसएमएस या सोशल मीडिया हेतु
            </span>
          </button>

          {/* Action 4: Native Share */}
          <button
            onClick={handleNativeShare}
            className="p-5 rounded-2xl bg-gradient-to-br from-vermilion to-maroon hover:from-festiveRed hover:to-vermilion text-parchment shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex flex-col items-center justify-center text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Share2 className="w-6 h-6 text-antiqueGold-light" />
            </div>
            <span className="font-devanagari font-bold text-base block">
              अन्य ऐप्स पर साझा करें
            </span>
            <span className="text-xs text-parchment/80 font-devanagari mt-1">
              डिवाइस शेयर मेनू
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
