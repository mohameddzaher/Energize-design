"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import PageIntro from "@/components/sections/PageIntro";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  blogPosts,
  localizeBlogPost,
  getBlogCategories,
} from "@/lib/blog";
import { formatDate } from "@/lib/formatDate";

export default function BlogPage() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = getBlogCategories(lang);
  const localized = blogPosts.map((p) => ({
    raw: p,
    post: localizeBlogPost(p, lang),
  }));

  const filtered =
    activeCategory === "all"
      ? localized
      : localized.filter(({ raw }) => raw.category === activeCategory);

  const [featured, ...rest] =
    activeCategory === "all" ? localized : filtered;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-40 lg:h-34 flex items-center justify-center overflow-hidden mt-20 lg:mt-18">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
            alt={t("مدوّنة Energize Design", "Energize Design Blog")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#283b4a]/90 via-[#283b4a]/80 to-[#283b4a]/90" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xl lg:text-2xl font-bold text-white mb-2"
          >
            {t("المدوّنة", "Blog & Insights")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-xs lg:text-sm text-white/90 max-w-2xl mx-auto"
          >
            {t(
              "رؤى وأفكار في التصميم والإنشاء والسوق العقاري السعودي",
              "Insights on design, construction, and the Saudi real estate market",
            )}
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <PageIntro
        title={t("أفكار تصنع المساحات", "Ideas That Shape Spaces")}
        description={t(
          "نشارك خبرتنا في التصميم الداخلي والإنشاء والابتكار، مع تركيز خاص على السوق السعودي ورؤية 2030 — لمساعدتك على اتخاذ قرارات أفضل لمساحتك القادمة.",
          "We share our expertise in interior design, construction, and innovation — with a special focus on the Saudi market and Vision 2030 — to help you make better decisions for your next space.",
        )}
      />

      {/* Category Filter */}
      <Section background="light">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={[
              "rounded-full px-4 py-2 text-xs font-medium transition-all duration-200",
              activeCategory === "all"
                ? "bg-[#283b4a] text-white shadow-sm"
                : "bg-white text-[#283b4a] ring-1 ring-[#e4ba8b]/30 hover:bg-[#e4ba8b]/15",
            ].join(" ")}
          >
            {t("الكل", "All")}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.en}
              type="button"
              onClick={() => setActiveCategory(cat.en)}
              className={[
                "rounded-full px-4 py-2 text-xs font-medium transition-all duration-200",
                activeCategory === cat.en
                  ? "bg-[#283b4a] text-white shadow-sm"
                  : "bg-white text-[#283b4a] ring-1 ring-[#e4ba8b]/30 hover:bg-[#e4ba8b]/15",
              ].join(" ")}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featured && (
          <motion.div
            key={featured.raw.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-10"
          >
            <Link href={`/blog/${featured.raw.slug}`}>
              <div className="group grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-56 lg:h-80 overflow-hidden">
                  <Image
                    src={featured.post.image}
                    alt={featured.post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 start-4 px-3 py-1 bg-[#e4ba8b] text-[#283b4a] text-[10px] font-semibold rounded-full">
                    {featured.post.category}
                  </span>
                </div>
                <div className="p-6 lg:pe-10">
                  <div className="flex items-center gap-3 text-[11px] text-[#283b4a]/60 mb-3">
                    <span>{formatDate(featured.raw.date, lang)}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {t(`${featured.raw.readTime} دقائق قراءة`, `${featured.raw.readTime} min read`)}
                    </span>
                  </div>
                  <h2 className="text-lg lg:text-2xl font-playfair font-bold text-[#283b4a] mb-3 leading-snug">
                    {featured.post.title}
                  </h2>
                  <p className="text-sm text-[#283b4a]/70 leading-relaxed mb-4 line-clamp-3">
                    {featured.post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#283b4a] group-hover:text-[#e4ba8b] transition-colors">
                    {t("اقرأ المقال", "Read Article")}
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid of remaining posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(({ raw, post }, index) => (
            <motion.div
              key={raw.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={`/blog/${raw.slug}`}>
                <article className="group bg-white rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 start-3 px-2.5 py-1 bg-[#e4ba8b] text-[#283b4a] text-[10px] font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-[11px] text-[#283b4a]/60 mb-2">
                      <span>{formatDate(raw.date, lang)}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {t(`${raw.readTime} د`, `${raw.readTime} min`)}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#283b4a] mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#283b4a]/70 leading-relaxed line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#283b4a] group-hover:text-[#e4ba8b] transition-colors">
                      {t("اقرأ المزيد", "Read More")}
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
