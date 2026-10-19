"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { LotusMotif, MandapaDivider } from "./DecorativeMotifs";

interface GalleryImageItem {
  id: string;
  src: string;
  title: string;
  category: string;
  alt: string;
  description: string;
}

const galleryImages: GalleryImageItem[] = [
  {
    id: "pandal",
    src: "/images/gallery-pandal.jpg",
    title: "भव्य आलोकित पूजा पंडाल",
    category: "पंडाल स्थापत्य",
    alt: "स्वर्णिम प्रकाश से जगमगाता हुआ विशाल दुर्गा पूजा पंडाल",
    description: "रात्रि के समय रोशनी से नहाया हुआ भव्य पंडाल, जहाँ आस्था और कला का अद्भुत संगम देखने को मिलता है।",
  },
  {
    id: "durga-face",
    src: "/images/gallery-durga-face.jpg",
    title: "त्रिनयनी माँ दुर्गा मुखारविंद दर्शन",
    category: "दिव्य दर्शन",
    alt: "माँ दुर्गा के त्रिनेत्र एवं स्वर्णिम मुकुट से सुशोभित दिव्य मुखारविंद",
    description: "माँ दुर्गा के नयनों में ममता, तेज और अभय का वास है। उनका मुखारविंद भक्तों को समस्त भयों से मुक्त करता है।",
  },
  {
    id: "dhunuchi",
    src: "/images/gallery-dhunuchi.jpg",
    title: "पारंपरिक धुनाची नृत्य",
    category: "उत्सव परंपरा",
    alt: "धुनाची हाथ में लिए ढाक की लय पर नृत्य करती हुई श्रद्धालु",
    description: "महा नवमी की शाम को सुगंधित धूप और धुएँ से भरी धुनाची के साथ ढाक की थाप पर किया जाने वाला उल्लासमय भक्ति नृत्य।",
  },
  {
    id: "diyas",
    src: "/images/gallery-diyas.jpg",
    title: "मंगल दीप एवं गेंदे के पुष्प",
    category: "पूजा सामग्री",
    alt: "गेंदे के पीले-नारंगी फूलों के बीच प्रज्वलित पीतल के दीपक",
    description: "माँ दुर्गा के चरणों में अर्पित सुगंधित पुष्पमालाएँ और अंधकार को मिटाते हुए पावन घी के दीपक।",
  },
  {
    id: "alpona",
    src: "/images/gallery-alpona.jpg",
    title: "पवित्र अल्पना लोक कला",
    category: "पारंपरिक कला",
    alt: "चावल के आटे से फर्श पर बनाई गई पारंपरिक बंगाली अल्पना",
    description: "चावल के पिठार (लेप) से बनाई जाने वाली गोलाकार अल्पना माँ के स्वागत हेतु आँगन में उकेरी जाती है।",
  },
  {
    id: "kumartuli",
    src: "/images/gallery-kumartuli.jpg",
    title: "कुमारतुली के मूर्तिकार व चक्षुदान",
    category: "शिल्प साधना",
    alt: "कुमारतुली में मिट्टी की माँ दुर्गा प्रतिमा की आँखें रंगते वरिष्ठ शिल्पी",
    description: "पीढ़ियों से माँ की मिट्टी की प्रतिमाओं को अपने हाथों से जीवंत रूप देने वाले समर्पित कलाकारों की साधना।",
  },
];

export default function ImageGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? galleryImages.length - 1 : prev! - 1));
    }
  }, [lightboxIndex]);

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === galleryImages.length - 1 ? 0 : prev! + 1));
    }
  }, [lightboxIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    },
    [lightboxIndex, prevImage, nextImage]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [lightboxIndex, handleKeyDown]);

  return (
    <section id="gallery" className="relative py-24 bg-maroon-deep text-parchment overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-halo opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-vermilion-dark/80 border border-antiqueGold/50 text-antiqueGold-light font-devanagari text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-antiqueGold" />
            <span>उत्सव छटा एवं पावन दर्शन</span>
            <Sparkles className="w-4 h-4 text-antiqueGold" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-devanagari font-bold gold-gradient-text tracking-tight">
            शारदीय दुर्गा पूजा दर्शन गैलरी
          </h2>

          <p className="mt-3 text-sm sm:text-base text-parchment-card/85 font-devanagari leading-relaxed">
            पंडालों की मनमोहक छटा, माँ का करुणामयी स्वरूप, भक्तिमय नृत्य और भारतीय सांस्कृतिक विरासत के अनूठे दृश्य
          </p>

          <MandapaDivider className="mt-4 max-w-xs mx-auto" />
        </div>

        {/* 6 Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setLightboxIndex(index)}
              className="relative rounded-2xl overflow-hidden border-2 border-antiqueGold/50 bg-maroon-card shadow-cardFestive cursor-pointer group"
            >
              {/* Image Aspect ratio container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay for Caption Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-maroon-deep/80 backdrop-blur-sm border border-antiqueGold/40 text-[10px] sm:text-xs text-antiqueGold-light font-devanagari font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-maroon-deep/70 text-antiqueGold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-3 inset-x-3 text-left">
                  <h3 className="text-base sm:text-lg font-devanagari font-bold text-parchment-light group-hover:text-antiqueGold-light transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-parchment/80 font-devanagari line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="छवि दर्शन"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-maroon border border-antiqueGold/50 text-parchment hover:bg-vermilion focus:outline-none focus:ring-2 focus:ring-antiqueGold"
              aria-label="दर्शन बंद करें"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-maroon/80 border border-antiqueGold/50 text-parchment hover:bg-vermilion focus:outline-none focus:ring-2 focus:ring-antiqueGold"
              aria-label="पिछली छवि देखें"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-maroon/80 border border-antiqueGold/50 text-parchment hover:bg-vermilion focus:outline-none focus:ring-2 focus:ring-antiqueGold"
              aria-label="अगली छवि देखें"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image & Caption Box */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[65vh] sm:h-[72vh] rounded-2xl overflow-hidden border-2 border-antiqueGold shadow-2xl">
                <Image
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Lightbox Caption */}
              <div className="mt-4 p-4 rounded-xl bg-maroon-card/90 border border-antiqueGold/40 w-full text-center">
                <span className="text-xs text-antiqueGold uppercase tracking-wider font-devanagari font-semibold">
                  {galleryImages[lightboxIndex].category} • छवि {lightboxIndex + 1} / {galleryImages.length}
                </span>
                <h4 className="text-lg sm:text-xl font-devanagari font-bold text-parchment-light mt-0.5">
                  {galleryImages[lightboxIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-parchment/80 font-devanagari mt-1 max-w-2xl mx-auto">
                  {galleryImages[lightboxIndex].description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
