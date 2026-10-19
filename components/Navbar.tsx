"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Menu, X, Sparkles } from "lucide-react";
import { LotusMotif } from "./DecorativeMotifs";
import { soundManager } from "@/lib/sound";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "मुख्य पृष्ठ", href: "#hero" },
  { id: "blessings", label: "शुभकामनाएँ", href: "#blessings" },
  { id: "navdurga", label: "माँ दुर्गा के नौ रूप", href: "#navdurga" },
  { id: "diya-experience", label: "दीप जलाएँ", href: "#diya-experience" },
  { id: "aarti", label: "डिजिटल आरती", href: "#aarti" },
  { id: "traditions", label: "पूजा परंपराएँ", href: "#traditions" },
  { id: "greeting-generator", label: "संदेश बनाएँ", href: "#greeting-generator" },
  { id: "gallery", label: "दर्शन गैलरी", href: "#gallery" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    setSoundEnabled(soundManager.isEnabled());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Active section observer based on scroll position
      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    soundManager.setEnabled(next);
    setSoundEnabled(next);
    if (next) {
      soundManager.playTempleBell();
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-maroon-deep/95 backdrop-blur-md border-b border-antiqueGold/30 shadow-lg py-2.5"
            : "bg-gradient-to-b from-maroon-deep/90 via-maroon-deep/70 to-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center space-x-2.5 group focus:outline-none focus:ring-2 focus:ring-antiqueGold rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-vermilion to-maroon flex items-center justify-center border border-antiqueGold/60 shadow-sm group-hover:scale-105 transition-transform">
              <LotusMotif className="w-5 h-5 text-antiqueGold" />
            </div>
            <div className="flex flex-col">
              <span className="font-devanagari font-bold text-lg md:text-xl text-parchment group-hover:text-antiqueGold-light transition-colors leading-tight">
                शुभ दुर्गा पूजा
              </span>
              <span className="text-[10px] md:text-xs text-antiqueGold/80 font-devanagari tracking-wider">
                अतीकुर रहमान
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5" aria-label="मुख्य नेविगेशन">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-md font-devanagari text-sm font-medium transition-all relative ${
                    isActive
                      ? "text-antiqueGold font-semibold"
                      : "text-parchment/85 hover:text-parchment hover:bg-maroon/60"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-antiqueGold/40 via-antiqueGold to-antiqueGold/40 rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Sound Toggle + Decorative "जय माँ दुर्गा" */}
          <div className="flex items-center space-x-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              type="button"
              className={`p-2 rounded-full border transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-antiqueGold ${
                soundEnabled
                  ? "bg-antiqueGold/20 border-antiqueGold text-antiqueGold shadow-goldGlow"
                  : "bg-maroon/60 border-antiqueGold/30 text-parchment/70 hover:text-parchment hover:border-antiqueGold/60"
              }`}
              title={soundEnabled ? "ध्वनि बंद करें" : "भक्ति ध्वनि चालू करें (घंटी व शंख)"}
              aria-label={soundEnabled ? "ध्वनि बंद करें" : "भक्ति ध्वनि चालू करें"}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Sacred Emblem badge (Desktop only) */}
            <div className="hidden md:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-vermilion-dark to-maroon border border-antiqueGold/50 text-xs font-devanagari text-antiqueGold-light shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-antiqueGold animate-pulse" />
              <span>जय माँ दुर्गा</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="xl:hidden p-2 rounded-lg bg-maroon/80 border border-antiqueGold/40 text-parchment hover:text-antiqueGold focus:outline-none focus:ring-2 focus:ring-antiqueGold"
              aria-expanded={mobileMenuOpen}
              aria-label="नेविगेशन मेनू खोलें या बंद करें"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-maroon-deep/98 backdrop-blur-xl border-b border-antiqueGold/40 px-6 py-6 shadow-2xl xl:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-3 font-devanagari">
              <div className="flex items-center justify-between pb-3 border-b border-antiqueGold/20">
                <span className="text-xs text-antiqueGold uppercase tracking-widest font-semibold">
                  नेविगेशन मेनू
                </span>
                <span className="text-xs text-parchment/70">सप्रेम अतीकुर रहमान</span>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                    activeSection === item.id
                      ? "bg-vermilion text-parchment-light border border-antiqueGold/60 shadow-sm"
                      : "text-parchment/90 hover:bg-maroon hover:text-antiqueGold"
                  }`}
                >
                  <span>{item.label}</span>
                  <LotusMotif className="w-4 h-4 text-antiqueGold opacity-80" />
                </a>
              ))}

              <div className="pt-4 border-t border-antiqueGold/20 flex items-center justify-between text-xs text-parchment/70">
                <span>मंदिर ध्वनि प्रभाव</span>
                <button
                  onClick={toggleSound}
                  className="px-3 py-1.5 rounded-full bg-antiqueGold/20 border border-antiqueGold text-antiqueGold flex items-center space-x-1"
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                  <span>{soundEnabled ? "ध्वनि चालू है" : "ध्वनि बंद है"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
