"use client";

import React, { useState, useEffect } from "react";
import { Clock, Calendar, Sparkles } from "lucide-react";
import { defaultFestivalConfig } from "@/lib/festival-config";
import { LotusMotif } from "./DecorativeMotifs";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export default function FestivalCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(defaultFestivalConfig.targetDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isExpired: false,
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative -mt-8 mb-12 z-20 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="rounded-2xl bg-gradient-to-r from-maroon-card via-maroon to-maroon-card border-2 border-antiqueGold/70 p-6 sm:p-8 shadow-cardFestive text-center relative overflow-hidden">
        {/* Corner Lotus Ornaments */}
        <div className="absolute top-2 left-2 opacity-50 hidden sm:block">
          <LotusMotif className="w-5 h-5 text-antiqueGold" />
        </div>
        <div className="absolute top-2 right-2 opacity-50 hidden sm:block">
          <LotusMotif className="w-5 h-5 text-antiqueGold" />
        </div>

        {/* Badge & Target info */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-vermilion/50 border border-antiqueGold/40 text-antiqueGold-light text-xs font-devanagari font-semibold flex items-center space-x-1">
            <Calendar className="w-3.5 h-3.5 text-antiqueGold" />
            <span>{defaultFestivalConfig.festivalName}</span>
          </span>
          <span className="text-xs text-parchment/70 font-devanagari flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-antiqueGold" />
            <span>लक्ष्य: {defaultFestivalConfig.milestoneTitle}</span>
          </span>
        </div>

        {/* Status Heading */}
        <h3 className="text-lg sm:text-2xl font-devanagari font-bold gold-gradient-text mb-4">
          {timeLeft.isExpired
            ? defaultFestivalConfig.fallbackMessage
            : "माँ दुर्गा के पावन पर्व का उल्टी गिनती समय"}
        </h3>

        {!timeLeft.isExpired ? (
          /* Live Countdown Digits */
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
            {/* Days */}
            <div className="p-3 sm:p-4 rounded-xl bg-maroon-deep/90 border border-antiqueGold/50 shadow-inner flex flex-col items-center">
              <span className="text-2xl sm:text-4xl font-devanagari font-bold text-parchment-light">
                {timeLeft.days.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-antiqueGold uppercase tracking-wider font-devanagari mt-1">
                दिन (Days)
              </span>
            </div>

            {/* Hours */}
            <div className="p-3 sm:p-4 rounded-xl bg-maroon-deep/90 border border-antiqueGold/50 shadow-inner flex flex-col items-center">
              <span className="text-2xl sm:text-4xl font-devanagari font-bold text-parchment-light">
                {timeLeft.hours.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-antiqueGold uppercase tracking-wider font-devanagari mt-1">
                घंटे (Hours)
              </span>
            </div>

            {/* Minutes */}
            <div className="p-3 sm:p-4 rounded-xl bg-maroon-deep/90 border border-antiqueGold/50 shadow-inner flex flex-col items-center">
              <span className="text-2xl sm:text-4xl font-devanagari font-bold text-parchment-light">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-antiqueGold uppercase tracking-wider font-devanagari mt-1">
                मिनट (Mins)
              </span>
            </div>

            {/* Seconds */}
            <div className="p-3 sm:p-4 rounded-xl bg-maroon-deep/90 border border-antiqueGold/50 shadow-inner flex flex-col items-center">
              <span className="text-2xl sm:text-4xl font-devanagari font-bold text-saffron animate-pulse">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-antiqueGold uppercase tracking-wider font-devanagari mt-1">
                सेकंड (Secs)
              </span>
            </div>
          </div>
        ) : (
          /* Celebratory Fallback when festival is happening */
          <div className="p-4 rounded-xl bg-vermilion-dark/60 border border-antiqueGold/40 max-w-lg mx-auto">
            <p className="text-sm sm:text-base font-devanagari text-parchment-light font-medium">
              ✨ माँ दुर्गा के आगमन की हार्दिक प्रतीक्षा एवं उत्सव का उल्लास आप सभी के जीवन को सुखमय बनाए!
            </p>
          </div>
        )}

        <div className="mt-3 text-[11px] text-antiqueGold/70 font-devanagari">
          पंचांग आधार: {defaultFestivalConfig.tradition} • विन्यास योग्य (Configurable)
        </div>
      </div>
    </section>
  );
}
