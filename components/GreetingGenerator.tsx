"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Share2, Download, Sparkles, MessageCircle, RefreshCw } from "lucide-react";
import { greetingStyles, generateGreetingText, GreetingStyle } from "@/lib/greetings";
import { copyToClipboard, getWhatsAppShareUrl } from "@/lib/share";
import { LotusMotif, MandapaDivider } from "./DecorativeMotifs";
import { soundManager } from "@/lib/sound";

export default function GreetingGenerator() {
  const [senderName, setSenderName] = useState("अतीकुर रहमान");
  const [recipientName, setRecipientName] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<GreetingStyle>("traditional");
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const currentMessage = generateGreetingText(senderName, recipientName, selectedStyle);

  const handleCopy = async () => {
    const success = await copyToClipboard(currentMessage);
    if (success) {
      soundManager.playDiyaChime();
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsApp = () => {
    soundManager.playDiyaChime();
    const url = getWhatsAppShareUrl(currentMessage);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Generate PNG image on HTML5 Canvas and download
  const handleDownloadCard = () => {
    setIsDownloading(true);
    soundManager.playDiyaChime();

    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = 1000;
      canvas.height = 700;

      // Draw Maroon Gradient Background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, 700);
      bgGrad.addColorStop(0, "#4A0710");
      bgGrad.addColorStop(0.5, "#240307");
      bgGrad.addColorStop(1, "#3E060D");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1000, 700);

      // Gold Ornate Borders
      ctx.strokeStyle = "#D4AF57";
      ctx.lineWidth = 6;
      ctx.strokeRect(30, 30, 940, 640);

      ctx.strokeStyle = "#9B7829";
      ctx.lineWidth = 2;
      ctx.strokeRect(42, 42, 916, 616);

      // Top Sacred Header
      ctx.fillStyle = "#F5DE93";
      ctx.font = "bold 26px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("॥ शुभ शारदीय दुर्गा पूजा ॥", 500, 95);

      // Main Headline
      ctx.fillStyle = "#FFF4DD";
      ctx.font = "bold 44px sans-serif";
      ctx.fillText("शुभ दुर्गा पूजा", 500, 155);

      // Shubh Chintak line
      ctx.fillStyle = "#E9A23B";
      ctx.font = "20px sans-serif";
      ctx.fillText("माँ जगदंबा की असीम अनुकंपा आप पर सदैव बनी रहे", 500, 195);

      // Divider line
      ctx.strokeStyle = "rgba(212, 175, 87, 0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(250, 220);
      ctx.lineTo(750, 220);
      ctx.stroke();

      // Recipient if provided
      let startY = 265;
      if (recipientName.trim()) {
        ctx.fillStyle = "#F5DE93";
        ctx.font = "bold 24px sans-serif";
        ctx.textAlign = "left";
        ctx.fillText(`प्रिय ${recipientName.trim()},`, 90, startY);
        startY += 40;
      }

      // Message lines wrapping
      ctx.fillStyle = "#FFF4DD";
      ctx.font = "20px sans-serif";
      ctx.textAlign = "left";

      // Break current message into readable lines
      const cleanText = currentMessage.replace(
        new RegExp(`— ${senderName.trim()}|प्रिय ${recipientName.trim()},|\n\n—.*`, "g"),
        ""
      );
      const paragraphs = cleanText.split("\n").filter((p) => p.trim());

      let currentLineY = startY;
      paragraphs.forEach((para) => {
        const words = para.split(" ");
        let line = "";
        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + " ";
          const metrics = ctx.measureText(testLine);
          if (metrics.width > 820 && n > 0) {
            ctx.fillText(line, 90, currentLineY);
            line = words[n] + " ";
            currentLineY += 32;
          } else {
            line = testLine;
          }
        }
        ctx.fillText(line, 90, currentLineY);
        currentLineY += 36;
      });

      // Signature at bottom
      ctx.textAlign = "right";
      ctx.fillStyle = "#F5DE93";
      ctx.font = "italic 20px sans-serif";
      ctx.fillText("सप्रेम शुभकामनाओं सहित,", 910, 580);
      ctx.font = "bold 26px sans-serif";
      ctx.fillStyle = "#FFF4DD";
      ctx.fillText(`— ${senderName.trim() || "अतीकुर रहमान"}`, 910, 615);

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (!blob) return;
        const link = document.createElement("a");
        link.download = `durga-puja-shubhkaamna-${Date.now()}.png`;
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
        setIsDownloading(false);
      }, "image/png");
    } catch (err) {
      console.error("Canvas export failed:", err);
      setIsDownloading(false);
      window.print();
    }
  };

  return (
    <section id="greeting-generator" className="relative py-24 bg-maroon-deep text-parchment overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-halo opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-vermilion-dark/80 border border-antiqueGold/50 text-antiqueGold-light font-devanagari text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-antiqueGold" />
            <span>व्यक्तिगत संदेश रचना</span>
            <Sparkles className="w-4 h-4 text-antiqueGold" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-devanagari font-bold gold-gradient-text tracking-tight">
            अपनों के लिए शुभकामना संदेश बनाएँ
          </h2>

          <p className="mt-3 text-sm sm:text-base text-parchment-card/85 font-devanagari leading-relaxed">
            अपना एवं अपने स्नेहीजन का नाम जोड़ें, अपनी मनपसंद शैली चुनें और तुरंत सुंदर हिंदी शुभकामना कार्ड तैयार करें
          </p>

          <MandapaDivider className="mt-4 max-w-xs mx-auto" />
        </div>

        {/* Generator Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-maroon-card via-maroon to-maroon-deep border border-antiqueGold/50 p-6 sm:p-7 shadow-cardFestive">
            <h3 className="text-lg font-devanagari font-bold text-parchment-light mb-5 flex items-center space-x-2 border-b border-antiqueGold/20 pb-3">
              <LotusMotif className="w-5 h-5 text-antiqueGold" />
              <span>संदेश विवरण भरें</span>
            </h3>

            {/* Sender Name Input (Default: अतीकुर रहमान) */}
            <div className="mb-4">
              <label htmlFor="sender-name" className="block text-xs font-devanagari font-semibold text-antiqueGold-light mb-1.5">
                भेजने वाले का नाम (प्रेषक):
              </label>
              <input
                id="sender-name"
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="उदा. अतीकुर रहमान"
                maxLength={40}
                className="w-full px-4 py-2.5 rounded-xl bg-maroon-deep border border-antiqueGold/40 text-parchment placeholder-parchment/40 font-devanagari text-sm focus:outline-none focus:ring-2 focus:ring-antiqueGold"
              />
            </div>

            {/* Recipient Name Input (Optional) */}
            <div className="mb-5">
              <label htmlFor="recipient-name" className="block text-xs font-devanagari font-semibold text-antiqueGold-light mb-1.5">
                पाने वाले का नाम (वैकल्पिक):
              </label>
              <input
                id="recipient-name"
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="उदा. रमेश जी, सपरिवार, मित्रगण..."
                maxLength={40}
                className="w-full px-4 py-2.5 rounded-xl bg-maroon-deep border border-antiqueGold/40 text-parchment placeholder-parchment/40 font-devanagari text-sm focus:outline-none focus:ring-2 focus:ring-antiqueGold"
              />
            </div>

            {/* Greeting Style Selector */}
            <div className="mb-6">
              <label className="block text-xs font-devanagari font-semibold text-antiqueGold-light mb-2">
                शुभकामना शैली चुनें:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {greetingStyles.map((style) => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setSelectedStyle(style.id)}
                    className={`p-3 rounded-xl border text-left font-devanagari transition-all ${
                      selectedStyle === style.id
                        ? "bg-vermilion border-antiqueGold text-parchment shadow-md ring-1 ring-antiqueGold/50"
                        : "bg-maroon-deep/70 border-antiqueGold/30 text-parchment/80 hover:border-antiqueGold/60 hover:text-parchment"
                    }`}
                  >
                    <span className="text-xs font-bold block">{style.label}</span>
                    <span className="text-[10px] text-parchment/70 block mt-0.5 line-clamp-1">
                      {style.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Reset */}
            <div className="pt-4 border-t border-antiqueGold/20 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setSenderName("अतीकुर रहमान");
                  setRecipientName("");
                  setSelectedStyle("traditional");
                }}
                className="text-xs text-parchment/70 hover:text-antiqueGold font-devanagari flex items-center space-x-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>डिफ़ॉल्ट सेट करें</span>
              </button>
              <span className="text-[11px] text-antiqueGold/80 font-devanagari">
                लाइव कार्ड तैयार है
              </span>
            </div>
          </div>

          {/* Right Column: Live Card Preview & Action Bar */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* The Live Card Preview */}
            <motion.div
              ref={cardRef}
              key={`${senderName}-${recipientName}-${selectedStyle}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full rounded-2xl bg-gradient-to-b from-maroon-card via-maroon to-maroon-deep border-2 border-antiqueGold p-6 sm:p-8 shadow-cardFestive relative overflow-hidden"
            >
              {/* Inner Fine Gold Border Line */}
              <div className="absolute inset-2 sm:inset-3 border border-antiqueGold/40 rounded-xl pointer-events-none" />

              {/* Decorative Card Top Header */}
              <div className="text-center relative z-10 mb-4 pb-3 border-b border-antiqueGold/20">
                <div className="flex items-center justify-center space-x-2 text-antiqueGold mb-1">
                  <LotusMotif className="w-5 h-5 text-antiqueGold" />
                  <span className="text-xs font-devanagari uppercase tracking-widest font-semibold">
                    ॥ शुभ शारदीय दुर्गा पूजा ॥
                  </span>
                  <LotusMotif className="w-5 h-5 text-antiqueGold" />
                </div>
                <h4 className="text-xl sm:text-2xl font-devanagari font-bold gold-gradient-text">
                  शुभ दुर्गा पूजा
                </h4>
              </div>

              {/* Message Content */}
              <div className="relative z-10 py-2">
                <p className="text-sm sm:text-base font-devanagari text-parchment-light whitespace-pre-line leading-relaxed">
                  {currentMessage}
                </p>
              </div>

              {/* Footer Stamp on Card */}
              <div className="relative z-10 mt-6 pt-3 border-t border-antiqueGold/20 flex items-center justify-between text-xs font-devanagari text-antiqueGold/80">
                <span>माँ दुर्गा सदैव मंगल करें</span>
                <span className="text-parchment/60 text-[10px]">डिजिटल पावन संदेश</span>
              </div>
            </motion.div>

            {/* Action Buttons Row */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 w-full">
              {/* Copy Message Button */}
              <button
                onClick={handleCopy}
                className="px-5 py-3 rounded-full bg-maroon-card hover:bg-maroon border border-antiqueGold/70 text-parchment font-devanagari font-semibold text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-300">कॉपी हो गया!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-antiqueGold" />
                    <span>संदेश कॉपी करें</span>
                  </>
                )}
              </button>

              {/* WhatsApp Share Button */}
              <button
                onClick={handleWhatsApp}
                className="px-5 py-3 rounded-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-devanagari font-semibold text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp पर साझा करें</span>
              </button>

              {/* Download PNG Card Button */}
              <button
                onClick={handleDownloadCard}
                disabled={isDownloading}
                className="px-5 py-3 rounded-full bg-gradient-to-r from-vermilion to-festiveRed hover:from-festiveRed hover:to-vermilion text-parchment font-devanagari font-semibold text-xs sm:text-sm border border-antiqueGold shadow-md hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 disabled:opacity-60"
              >
                <Download className="w-4 h-4 text-parchment" />
                <span>{isDownloading ? "डाउनलोड हो रहा है..." : "कार्ड डाउनलोड करें (PNG)"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
