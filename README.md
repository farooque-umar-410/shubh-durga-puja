# 🌺 शुभ दुर्गा पूजा — Shubh Durga Puja

> **A Premium Interactive Devotional Website Dedicated to Maa Durga**  
> **Presented with Love & Devotion by Atiqur Rahman (सप्रेम — अतीकुर रहमान)**

[![Framework: Next.js 14](https://img.shields.io/badge/Framework-Next.js%2014%20App%20Router-maroon)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-gold)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📖 Overview

**Shubh Durga Puja** is a production-quality, deeply emotional, and interactive devotional web experience crafted for the auspicious festival of Sharadiya Durga Puja. The site transports visitors into a radiant pandal at night: glowing brass diyas, marigold garlands, traditional Bengali Alpona motifs, temple arches, divine hymns, and heartfelt Hindi greetings presented by **Atiqur Rahman**.

---

## ✨ Key Features & Experiences

### 1. 🪔 Festive Opening Experience (Section A)
- Regal deep maroon background with an ethereal, slowly rotating golden mandala.
- Auspicious glowing brass diya with flickering flame.
- Sacred Hindi proclamation: **"जय माता दी — माँ दुर्गा का आशीर्वाद आप सभी पर बना रहे"**.
- Single-click entrance: **"पूजा अनुभव में प्रवेश करें"** with smooth exit transitions and sessionStorage remembrance.

### 2. 📿 Sticky Navigation with Temple Bell Audio (Section B)
- Translucent backdrop blur with antique gold borders.
- Real-time active section indicator tracking scroll position.
- Quick navigation to: मुख्य पृष्ठ, शुभकामनाएँ, माँ दुर्गा के नौ रूप, दीप जलाएँ, डिजिटल आरती, पूजा परंपराएँ, संदेश बनाएँ, दर्शन गैलरी.
- Opt-in temple audio toggle with Web Audio API synthesizer.
- Accessible mobile drawer menu with smooth animations.

### 3. 👑 Hero: The Heart of the Website (Section C & Section 4)
- **Focal Custom Asset**: `durga-puja-atiqur-rahman.png` seamlessly integrated within an ornate antique gold temple pavilion frame.
- **Composition**: **Atiqur Rahman** in respectful pranam (namaste) on the left side, **Maa Durga** centered in all her divine splendor, accompanied by hanging brass bells and ambient golden particles.
- **Three Functional Action Buttons**:
  1. *शुभकामनाएँ पढ़ें* — Smooth scroll to blessings.
  2. *डिजिटल आरती करें* — Smooth scroll to Aarti experience.
  3. *शुभकामना साझा करें* — Smooth scroll to personal card generator.
- Fullscreen Darshan Modal for viewing intricate idol and artwork details.

### 4. ⏳ Festival Countdown (Section I)
- Live Days, Hours, Minutes, and Seconds countdown to Sharadiya Durga Puja.
- Configurable Panchang target date in `lib/festival-config.ts` or via environment variables.
- Joyous celebration fallback state when the festival is underway.

### 5. 📜 Festive Blessings (Section D)
- Presented on a warm ivory/parchment background (`#FFF4DD`).
- Four cards with custom handcrafted SVG motifs:
  1. **सुख और शांति** (Lotus motif)
  2. **सुख-समृद्धि** (Mangal Kalash motif)
  3. **शक्ति और साहस** (Trishul motif)
  4. **प्रेम और एकता** (Dual Diya motif)

### 6. 🔱 Navdurga — Interactive 9 Forms of Maa Durga (Section E)
- Nine sacred forms with verified Sanskrit mantras, planetary associations, and mounts:
  1. माँ शैलपुत्री (प्रतिपदा - वृषभ)
  2. माँ ब्रह्मचारिणी (द्वितीया - श्वेत वस्त्र)
  3. माँ चंद्रघंटा (तृतीया - सिंह)
  4. माँ कूष्मांडा (चतुर्थी - सिंह)
  5. माँ स्कंदमाता (पंचमी - सिंह/कमल)
  6. माँ कात्यायनी (षष्ठी - सिंह)
  7. माँ कालरात्रि (सप्तमी - गर्दभ)
  8. माँ महागौरी (अष्टमी - श्वेत वृषभ)
  9. माँ सिद्धिदात्री (नवमी - कमल/सिंह)
- Accessible detail dialog with full spiritual significance, dhyana mantras, and keyboard `Escape` dismissal.

### 7. 🪔 Digital Diya Experience (Section F)
- Interactive brass diya with realistic CSS flame flickering and glowing radiant aura.
- Celebratory burst of golden particles and marigold confetti (`canvas-confetti`).
- **सप्त दीप पंक्ति (Row of 7 Auspicious Diyas)**: Light individual lamps one by one.
- Local session counter tracking diyas lit during the visit.

### 8. 🔔 Digital Aarti Experience (Section G)
- Authentic brass aarti thali with camphor flame, fresh marigold ring, and fragrant incense smoke.
- Click **"आरती आरंभ करें"** to activate a smooth circular *parikrama* motion with floating flower petals (*pushpanjali*).
- Start, Pause, and Reset controls.
- **Interactive Brass Temple Bell**: Click to ring a realistic brass bell chime synthesized via pure Web Audio API.

### 9. 🌺 Durga Puja Traditions (Section H)
- Editorial timeline covering:
  - **महालया** (Chokkhudan & Agomoni)
  - **महा षष्ठी** (Bilva Nimantran & Kalparambha)
  - **महा सप्तमी** (Navapatrika Snan / Kola Bou)
  - **महा अष्टमी** (Sandhi Puja & Kumari Puja)
  - **महानवमी** (Maha Homa & Dhunuchi Naach)
  - **विजयादशमी** (Sindoor Khela & Visarjan)
- Detailed accordion cards and regional cultural notes.

### 10. ✍️ Personalized Hindi Greeting Generator (Section J)
- Input: Sender's Name (Default: **अतीकुर रहमान**) & Optional Recipient's Name.
- Four Greeting Styles: *पारंपरिक (Traditional)*, *भक्तिमय (Devotional)*, *संक्षिप्त (Concise)*, *परिवार के लिए (Family)*.
- Live card preview with ornate gold and maroon borders.
- **Direct Actions**:
  - **संदेश कॉपी करें** — One-tap clipboard copy with toast feedback.
  - **WhatsApp पर साझा करें** — Formatted URL-encoded WhatsApp link.
  - **कार्ड डाउनलोड करें (PNG)** — Renders high-resolution image directly via HTML5 Canvas for offline sharing!

### 11. 🎨 Greeting Gallery (Section K)
- Six pre-crafted cards in distinct artistic styles:
  1. पारंपरिक लाल एवं स्वर्णिम (Red & Gold)
  2. हाथीदांत एवं पुरातन स्वर्ण (Ivory & Antique Gold)
  3. बंगाली ढाक व शंख उत्सव (Bengali Pandal & Dhak)
  4. सूक्ष्म भक्तिमय (Minimal Devotional)
  5. पारिवारिक शुभाशीष (Family Blessings)
  6. पुष्प व कमल अलंकृत (Floral Garland)

### 12. 🖼️ Festive Visual Gallery with Accessible Lightbox (Section L)
- Curated high-resolution visual assets:
  - *भव्य आलोकित पूजा पंडाल* (Illuminated Pandal Architecture)
  - *त्रिनयनी माँ दुर्गा मुखारविंद दर्शन* (Divine Idol Darshan)
  - *पारंपरिक धुनाची नृत्य* (Dhunuchi Dance Celebration)
  - *मंगल दीप एवं गेंदे के पुष्प* (Brass Diyas & Marigold Flowers)
  - *पवित्र अल्पना लोक कला* (Traditional Floor Art)
  - *कुमारतुली के मूर्तिकार व चक्षुदान* (Clay Sculptor Heritage)
- Accessible lightbox with Next/Previous arrows, keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), and image alt descriptions.

### 13. 📲 Share Section & Closing Blessing (Sections M, N, O)
- WhatsApp sharing, canonical link copy, and native Web Share API.
- Devotional closing prayer signed by **अतीकुर रहमान**.
- Scroll-to-top button and dynamic copyright year.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14 (App Router)** | Modern React Server & Client Components framework |
| **TypeScript** | Type-safe enterprise code |
| **Tailwind CSS** | Custom Indian festive design tokens & utilities |
| **Framer Motion** | Silky smooth animations & entrance reveals |
| **Lucide React** | Clean, accessible iconography |
| **Google Fonts** | `Noto Sans Devanagari`, `Rozha One`, and `Cinzel` |
| **Web Audio API** | Pure synthetic temple bell & diya chimes (0 audio file dependencies) |
| **Canvas Confetti** | Golden particles and flower petal bursts |
| **HTML5 Canvas** | Client-side PNG greeting card generation and download |

---

## 🎨 Cultural Color Palette

- **Deep Vermilion**: `#8F1018`
- **Rich Maroon**: `#4A0710`
- **Maroon Deep**: `#240307`
- **Festive Red**: `#C62828`
- **Antique Gold**: `#D4AF57`
- **Warm Saffron**: `#E9A23B`
- **Ivory Parchment**: `#FFF4DD`
- **Dark Text**: `#451B13`

---

## 💻 Local Development Instructions

### Prerequisites
- Node.js `v18+` or `v20+` (compatible up to `v26+`)
- npm `v9+` or `v10+`

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification
```bash
npm run build
npm run start
```

---

## 🚀 Vercel Deployment Guide

Follow these exact steps to deploy this website to Vercel:

1. **Verify Local Build**:
   Ensure the production build succeeds locally:
   ```bash
   npm run build
   ```
2. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "feat: complete production-ready Shubh Durga Puja interactive website"
   ```
3. **Push to GitHub**:
   - Create a new public or private repository on [GitHub](https://github.com/new) named `shubh-durga-puja`.
   - Push your code:
     ```bash
     git remote add origin https://github.com/<your-username>/shubh-durga-puja.git
     git branch -M main
     git push -u origin main
     ```
4. **Import into Vercel**:
   - Log in to your [Vercel Dashboard](https://vercel.com/).
   - Click **"Add New..."** -> **"Project"**.
   - Select your GitHub repository `shubh-durga-puja`.
5. **Configure Environment Variables**:
   In the Vercel Project Settings under **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL`: Set to your expected production URL (e.g., `https://shubh-durga-puja.vercel.app`).
   - `NEXT_PUBLIC_FESTIVAL_TARGET_DATE`: Optional countdown target date (e.g., `2026-10-21T06:00:00+05:30`).
6. **Deploy**:
   - Click **Deploy**. Vercel will build the Next.js App Router application in under 60 seconds.
7. **Verify Production URL**:
   - Open your deployed Vercel URL.
   - Verify that all images load, the opening intro functions, audio triggers on user click, the greeting generator downloads cards, and social metadata renders properly.

---

## 🌸 Dedication & Greetings

**"माँ दुर्गा की कृपा आप सभी के जीवन में सुख, शांति, समृद्धि और सकारात्मक ऊर्जा का संचार करे।"**

**सप्रेम शुभकामनाओं सहित,**  
**अतीकुर रहमान (Atiqur Rahman)**
