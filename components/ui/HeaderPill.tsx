"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function HeaderPill({
  brandName = "Energize Design",
  logoSrc = "/images/logo.png",
  ctaHref = "/contact",
}: {
  brandName?: string;
  logoSrc?: string;
  ctaHref?: string;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();

  const nav = [
    { label: t("الرئيسية", "Home"), href: "/" },
    { label: t("من نحن", "About"), href: "/about" },
    { label: t("خدماتنا", "Services"), href: "/services" },
    { label: t("الجولات الافتراضية", "Virtual Tours"), href: "/vr-real-estate" },
    { label: t("أعمالنا", "Projects"), href: "/projects" },
    { label: t("المدوّنة", "Blog"), href: "/blog" },
  ];
  const ctaLabel = t("تواصل معنا", "Contact");

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  const LangToggle = ({ className = "" }: { className?: string }) => (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      title={lang === "ar" ? "English" : "العربية"}
      className={`inline-flex items-center gap-1.5 rounded-full border border-[#283b4a]/15 bg-white px-3 py-2 text-xs font-bold text-[#283b4a] shadow-sm transition-all duration-200 hover:bg-[#e4ba8b]/20 hover:border-[#e4ba8b]/40 ${className}`}
    >
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {lang === "ar" ? "EN" : "ع"}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-8 py-2 lg:py-2.5">
        <div className="bg-[#fff9f2]/95 backdrop-blur-sm shadow-sm rounded-full px-2 sm:px-4 lg:px-6 py-1.5 lg:py-2">
          <div className="flex items-center justify-between gap-3 lg:gap-4 relative">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-14 w-44 lg:h-16 lg:w-52"
              >
                <Image
                  src={logoSrc}
                  alt={brandName}
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation - Center Pill */}
            <nav className="hidden lg:flex items-center justify-center flex-1 absolute left-1/2 transform -translate-x-1/2">
              <div className="rounded-full bg-[#fff9f2] px-2 py-2 shadow-sm ring-1 ring-[#e4ba8b]/20">
                <ul className="flex items-center gap-1">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={[
                          "inline-flex items-center rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 whitespace-nowrap",
                          isActive(item.href)
                            ? "bg-[#283b4a] text-white shadow-sm"
                            : "text-[#283b4a] hover:bg-[#e4ba8b]/20 hover:text-[#283b4a]",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* CTA + Language - Right */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <LangToggle />
              <Link
                href={ctaHref}
                className="inline-flex items-center rounded-full bg-[#283b4a] px-5 py-2.5 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#1f2d38] hover:shadow-md whitespace-nowrap"
              >
                {ctaLabel}
              </Link>
            </div>

            {/* Mobile: Language + Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <LangToggle />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#283b4a] p-2"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Pill Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 lg:hidden"
              >
                <div className="rounded-xl bg-[#fff9f2] p-3 ring-1 ring-[#e4ba8b]/20">
                  <div className="flex flex-wrap gap-2">
                    {nav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={[
                          "rounded-full px-4 py-2 text-xs font-medium transition-all duration-200",
                          isActive(item.href)
                            ? "bg-[#283b4a] text-white shadow-sm"
                            : "text-[#283b4a] hover:bg-[#e4ba8b]/20",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href={ctaHref}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="rounded-full bg-[#283b4a] px-4 py-2 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#1f2d38]"
                    >
                      {ctaLabel}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
