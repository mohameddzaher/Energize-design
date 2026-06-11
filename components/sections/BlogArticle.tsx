"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { BlogPost, localizeBlogPost } from "@/lib/blog";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { formatDate } from "@/lib/formatDate";

export default function BlogArticle({
  post: rawPost,
  related: rawRelated,
}: {
  post: BlogPost;
  related: BlogPost[];
}) {
  const { lang, t } = useLanguage();
  const post = localizeBlogPost(rawPost, lang);
  const related = rawRelated.map((p) => localizeBlogPost(p, lang));

  return (
    <>
      {/* Hero */}
      <section className="relative h-56 lg:h-72 flex items-end overflow-hidden mt-20 lg:mt-18">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#283b4a] via-[#283b4a]/70 to-[#283b4a]/40" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10 pb-6 lg:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#e4ba8b] text-[#283b4a] text-[10px] font-semibold rounded-full mb-3">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <h1 className="text-xl lg:text-3xl font-playfair font-bold text-white leading-snug mb-3">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/80">
              <span>{post.author}</span>
              <span>{formatDate(rawPost.date, lang)}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {t(`${rawPost.readTime} دقائق قراءة`, `${rawPost.readTime} min read`)}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#283b4a] hover:text-[#e4ba8b] transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4 me-2 rtl:rotate-180" />
              {t("العودة إلى المدوّنة", "Back to Blog")}
            </Link>
          </div>

          {/* Intro / lead */}
          <p className="text-base lg:text-lg text-[#283b4a]/90 leading-relaxed font-medium mb-8 border-s-4 border-[#e4ba8b] ps-4">
            {post.intro}
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {post.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-lg lg:text-xl font-bold text-[#283b4a] mb-3">
                  {section.heading}
                </h2>
                <div className="space-y-3">
                  {section.body.map((para, j) => (
                    <p
                      key={j}
                      className="text-sm lg:text-base text-[#283b4a]/80 leading-relaxed text-justify"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {post.keywords.map((kw) => (
              <span
                key={kw}
                className="text-[10px] px-2.5 py-1 bg-[#fff9f2] text-[#283b4a]/70 rounded-full ring-1 ring-[#e4ba8b]/20"
              >
                {kw}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl bg-[#283b4a] p-6 lg:p-8 text-center">
            <h3 className="text-lg lg:text-xl font-playfair font-bold text-white mb-2">
              {t("هل لديك مشروع في ذهنك؟", "Have a Project in Mind?")}
            </h3>
            <p className="text-sm text-white/80 mb-5 max-w-xl mx-auto">
              {t(
                "دع فريق Energize Design يحوّل رؤيتك إلى مساحة استثنائية. تواصل معنا اليوم لاستشارة مجانية.",
                "Let the Energize Design team turn your vision into an exceptional space. Get in touch today for a free consultation.",
              )}
            </p>
            <Button href="/contact" variant="secondary" size="md">
              {t("تواصل معنا", "Get In Touch")}
            </Button>
          </div>
        </div>
      </Section>

      {/* Related posts */}
      <Section background="light">
        <h2 className="text-xl lg:text-2xl font-playfair font-bold text-[#283b4a] mb-6 text-center">
          {t("مقالات ذات صلة", "Related Articles")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {related.map((rp, i) => (
            <Link key={rawRelated[i].slug} href={`/blog/${rawRelated[i].slug}`}>
              <article className="group bg-white rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={rp.image}
                    alt={rp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <span className="text-[10px] text-[#e4ba8b] font-semibold mb-1">
                    {rp.category}
                  </span>
                  <h3 className="text-sm font-bold text-[#283b4a] leading-snug line-clamp-2">
                    {rp.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
