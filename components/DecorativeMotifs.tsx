import React from "react";

export function LotusMotif({ className = "w-8 h-8 text-antiqueGold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 80" fill="currentColor" className={className} aria-hidden="true">
      {/* Central petal */}
      <path d="M50 5 C45 25 35 48 50 70 C65 48 55 25 50 5 Z" opacity="0.95" />
      {/* Left inner petal */}
      <path d="M50 70 C30 55 18 35 25 15 C35 30 42 52 50 70 Z" opacity="0.85" />
      {/* Right inner petal */}
      <path d="M50 70 C70 55 82 35 75 15 C65 30 58 52 50 70 Z" opacity="0.85" />
      {/* Left outer petal */}
      <path d="M50 70 C20 62 5 45 8 28 C20 40 32 58 50 70 Z" opacity="0.7" />
      {/* Right outer petal */}
      <path d="M50 70 C80 62 95 45 92 28 C80 40 68 58 50 70 Z" opacity="0.7" />
      {/* Base curve */}
      <path d="M30 70 Q50 78 70 70 Q50 74 30 70 Z" />
      {/* Pollen dot */}
      <circle cx="50" cy="18" r="3" fill="#FFF9EB" />
    </svg>
  );
}

export function KalashMotif({ className = "w-10 h-10 text-antiqueGold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
      {/* Coconut atop */}
      <path d="M50 8 C40 16 38 28 50 34 C62 28 60 16 50 8 Z" opacity="0.9" fill="#E9A23B" />
      {/* Mango leaves */}
      <path d="M50 32 C35 22 22 25 18 32 C28 36 40 34 50 32 Z" opacity="0.8" fill="#5A8C2B" />
      {/* Right mango leaf */}
      <path d="M50 32 C65 22 78 25 82 32 C72 36 60 34 50 32 Z" opacity="0.8" fill="#5A8C2B" />
      {/* Center upright leaf */}
      <path d="M50 32 C45 18 48 10 50 6 C52 10 55 18 50 32 Z" opacity="0.9" fill="#6B9D33" />
      {/* Rim of pot */}
      <rect x="35" y="32" width="30" height="6" rx="3" fill="#D4AF57" />
      {/* Pot body */}
      <path
        d="M38 38 C25 45 20 62 26 78 C30 86 70 86 74 78 C80 62 75 45 62 38 Z"
        fill="currentColor"
        opacity="0.95"
      />
      {/* Swastika / Auspicious mark on kalash */}
      <path
        d="M48 50 H52 V66 H48 Z M40 56 H58 V60 H40 Z"
        fill="#8F1018"
      />
      {/* Base */}
      <path d="M34 85 Q50 92 66 85 Q50 88 34 85 Z" fill="#D4AF57" />
    </svg>
  );
}

export function TrishulMotif({ className = "w-10 h-10 text-antiqueGold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
      {/* Central sharp spear */}
      <path d="M50 5 L55 25 L53 60 L47 60 L45 25 Z" opacity="0.95" />
      {/* Left trident crescent prong */}
      <path d="M47 50 C32 48 20 38 18 20 C22 25 32 36 47 42 Z" opacity="0.9" />
      <path d="M18 20 C22 18 26 24 24 28 C20 30 16 26 18 20 Z" />
      {/* Right trident crescent prong */}
      <path d="M53 50 C68 48 80 38 82 20 C78 25 68 36 53 42 Z" opacity="0.9" />
      <path d="M82 20 C78 18 74 24 76 28 C80 30 84 26 82 20 Z" />
      {/* Shaft */}
      <rect x="47" y="60" width="6" height="35" rx="3" opacity="0.95" />
      {/* Damru binding / node */}
      <circle cx="50" cy="62" r="6" fill="#F5DE93" />
    </svg>
  );
}

export function MandapaDivider({ className = "w-full my-6" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center space-x-3 opacity-90 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-antiqueGold/60 to-antiqueGold" />
      <div className="flex items-center space-x-2 text-antiqueGold">
        <span className="w-1.5 h-1.5 rounded-full bg-antiqueGold" />
        <LotusMotif className="w-6 h-6 text-antiqueGold" />
        <span className="w-1.5 h-1.5 rounded-full bg-antiqueGold" />
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-antiqueGold/60 to-antiqueGold" />
    </div>
  );
}

export function MandalaBackdrop({ className = "w-96 h-96 text-antiqueGold/15" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="95" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="82" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="65" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="48" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="30" strokeWidth="1" />
      <circle cx="100" cy="100" r="12" fill="currentColor" fillOpacity="0.2" strokeWidth="1" />

      {/* 8 Petal spokes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          <path d="M100 18 Q90 55 100 70 Q110 55 100 18 Z" strokeWidth="1" fill="currentColor" fillOpacity="0.08" />
          <path d="M100 70 Q92 85 100 90 Q108 85 100 70 Z" strokeWidth="0.75" />
          <circle cx="100" cy="22" r="2.5" fill="currentColor" fillOpacity="0.6" />
        </g>
      ))}

      {/* 16 Outer serrations */}
      {Array.from({ length: 16 }).map((_, i) => (
        <circle
          key={i}
          cx={100 + 82 * Math.cos((i * 22.5 * Math.PI) / 180)}
          cy={100 + 82 * Math.sin((i * 22.5 * Math.PI) / 180)}
          r="2"
          fill="currentColor"
          fillOpacity="0.5"
        />
      ))}
    </svg>
  );
}

export function HangingBrassBell({ className = "w-8 h-14" }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className}`} style={{ transformOrigin: "top center" }}>
      <svg viewBox="0 0 50 90" fill="currentColor" className="w-full h-full text-antiqueGold drop-shadow-md">
        {/* Hanging rope / chain link */}
        <line x1="25" y1="0" x2="25" y2="30" stroke="#9B7829" strokeWidth="2.5" strokeDasharray="2 3" />
        {/* Ring on top of bell */}
        <circle cx="25" cy="33" r="5" fill="none" stroke="#D4AF57" strokeWidth="2.5" />
        {/* Bell dome */}
        <path d="M25 36 C18 45 14 55 10 68 C8 74 6 78 4 80 L46 80 C44 78 42 74 40 68 C36 55 32 45 25 36 Z" fill="#D4AF57" />
        {/* Bell rim lip */}
        <rect x="2" y="78" width="46" height="5" rx="2.5" fill="#F5DE93" />
        {/* Clapper tip */}
        <circle cx="25" cy="85" r="4.5" fill="#9B7829" />
      </svg>
    </div>
  );
}
