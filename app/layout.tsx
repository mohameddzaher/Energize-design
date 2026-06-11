import type { Metadata } from "next";
import { Inter, Playfair_Display, Cairo } from "next/font/google";
import "./globals.css";
import HeaderPill from "@/components/ui/HeaderPill";
import Footer from "@/components/ui/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://energize-design.com"),
  title: {
    default: "Energize Design | Premium Interior Design & Construction",
    template: "%s | Energize Design",
  },
  description:
    "Raising design and execution standards by merging refined craftsmanship with modern innovation. Premium interior design and construction services in Jeddah, Saudi Arabia.",
  keywords: [
    "interior design",
    "construction",
    "architecture",
    "design studio",
    "renovation",
    "fit-out",
    "interior design Jeddah",
    "construction Jeddah",
    "architectural design",
    "space planning",
    "project management",
    "luxury interior design",
    "commercial design",
    "residential design",
  ],
  authors: [{ name: "Energize Design" }],
  creator: "Energize Design",
  publisher: "Energize Design",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://energize-design.com",
    siteName: "Energize Design",
    title: "Energize Design | Premium Interior Design & Construction",
    description:
      "Raising design and execution standards by merging refined craftsmanship with modern innovation. Premium interior design and construction services.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Energize Design Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Energize Design | Premium Interior Design & Construction",
    description:
      "Raising design and execution standards by merging refined craftsmanship with modern innovation.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "https://energize-design.com",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/images/logo.png",
    apple: "/apple-icon.png",
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://assets.mixkit.co" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://assets.mixkit.co" />
        {/* Apply saved language direction before paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem('energize-lang');if(l==='en'){document.documentElement.lang='en';document.documentElement.dir='ltr';}else{document.documentElement.lang='ar';document.documentElement.dir='rtl';}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${cairo.variable} antialiased`}
      >
        <LanguageProvider>
          <HeaderPill />
          <main className="pt-0 w-full overflow-x-hidden">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
