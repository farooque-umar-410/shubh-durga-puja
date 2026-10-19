import type { Metadata, Viewport } from "next";
import { Noto_Sans_Devanagari, Rozha_One, Cinzel } from "next/font/google";
import "./globals.css";

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-devanagari",
  display: "swap",
});

const rozhaOne = Rozha_One({
  subsets: ["devanagari", "latin"],
  weight: "400",
  variable: "--font-rozha",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shubh-durga-puja.vercel.app";

export const metadata: Metadata = {
  title: "शुभ दुर्गा पूजा | अतीकुर रहमान की ओर से हार्दिक शुभकामनाएँ",
  description:
    "माँ दुर्गा के पावन पर्व शारदीय दुर्गा पूजा पर अतीकुर रहमान की ओर से सप्रेम शुभकामनाएँ। डिजिटल आरती करें, दीप जलाएँ, माँ के नौ रूपों के दर्शन करें और अपनों के लिए सुंदर हिंदी शुभकामना संदेश बनाएँ।",
  keywords: [
    "शुभ दुर्गा पूजा",
    "Durga Puja Greetings",
    "अतीकुर रहमान",
    "Atiqur Rahman",
    "नवदुर्गा",
    "डिजिटल आरती",
    "दुर्गा पूजा शुभकामनाएँ",
    "Shubh Durga Puja 2026",
    "Hindi Greetings",
  ],
  authors: [{ name: "अतीकुर रहमान (Atiqur Rahman)" }],
  creator: "अतीकुर रहमान",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "शुभ दुर्गा पूजा | अतीकुर रहमान की ओर से हार्दिक शुभकामनाएँ",
    description:
      "माँ दुर्गा की कृपा आप सभी के जीवन में सुख, शांति, समृद्धि और सकारात्मक ऊर्जा का संचार करे। अतीकुर रहमान की ओर से सप्रेम दुर्गा पूजा शुभकामनाएँ।",
    url: siteUrl,
    siteName: "शुभ दुर्गा पूजा — अतीकुर रहमान",
    images: [
      {
        url: "/images/durga-puja-atiqur-rahman.png",
        width: 1536,
        height: 1024,
        alt: "शुभ दुर्गा पूजा — अतीकुर रहमान एवं माँ दुर्गा का दिव्य दर्शन",
      },
    ],
    locale: "hi_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "शुभ दुर्गा पूजा | अतीकुर रहमान",
    description:
      "माँ दुर्गा के पावन पर्व पर अतीकुर रहमान की ओर से हार्दिक शुभकामनाएँ। दीप जलाएँ, डिजिटल आरती करें और शुभकामनाएँ साझा करें।",
    images: ["/images/durga-puja-atiqur-rahman.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#4A0710",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${notoSansDevanagari.variable} ${rozhaOne.variable} ${cinzel.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-maroon-deep text-parchment antialiased selection:bg-vermilion selection:text-parchment">
        {children}
      </body>
    </html>
  );
}
