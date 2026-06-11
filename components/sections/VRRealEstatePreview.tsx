'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Glasses, Paintbrush, Move3D, Eye } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function VRRealEstatePreview({ background = 'dark' }: { background?: 'white' | 'light' | 'dark' | 'beige' }) {
  const isDark = background === 'dark';
  const { t } = useLanguage();

  const vrFeatures = [
    {
      icon: Glasses,
      title: t('تجربة واقع افتراضي غامرة', 'Immersive VR Experience'),
      description: t(
        'تجوّل في مساحتك المستقبلية بنظارات الواقع الافتراضي قبل بدء الإنشاء.',
        'Walk through your future space using VR glasses before construction begins.',
      ),
    },
    {
      icon: Move3D,
      title: t('حركة حرّة', 'Free Movement'),
      description: t(
        'استكشف كل ركن من شقتك الافتراضية بحرية كاملة.',
        'Explore every corner of your virtual apartment with complete freedom.',
      ),
    },
    {
      icon: Paintbrush,
      title: t('تخصيص لحظي', 'Real-Time Customization'),
      description: t(
        'غيّر الألوان والخامات والإضاءة والأثاث والتوزيع فورًا.',
        'Change colors, materials, lighting, furniture, and layouts instantly.',
      ),
    },
    {
      icon: Eye,
      title: t('معاينة واقعية', 'Realistic Preview'),
      description: t(
        'شاهد النتيجة النهائية الواقعية قبل أي أعمال إنشاء.',
        'See the final photorealistic result before any construction work starts.',
      ),
    },
  ];

  return (
    <Section background={background}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="mb-3 inline-flex w-fit rounded-full bg-[#e4ba8b] px-3.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#283b4a] shadow-lg">
              {t('خدمة جديدة', 'New Service')}
            </div>
            <h2
              className={`text-2xl lg:text-3xl font-playfair mb-4 ${
                isDark ? 'text-white' : 'text-[#283b4a]'
              }`}
            >
              {t('جولات', 'Immersive')}
              <br />
              <span className={`italic ${isDark ? 'text-[#e4ba8b]' : 'text-[#e4ba8b]'}`}>
                {t('افتراضية غامرة', 'Virtual Tours')}
              </span>
            </h2>
            <p
              className={`text-sm lg:text-base leading-relaxed mb-6 ${
                isDark ? 'text-white/80' : 'text-[#283b4a]/80'
              }`}
            >
              {t(
                'ادخل إلى منزلك المستقبلي قبل أن يُبنى. بفضل تقنية الواقع الافتراضي المتطورة، يمكنك التجوّل في شقتك، وتغيير ألوان الجدران، وتبديل الخامات، وضبط الإضاءة، وإعادة ترتيب الأثاث، ورؤية نتائج واقعية — كل ذلك قبل بدء الإنشاء.',
                'Step into your future home before it exists. Using cutting-edge VR technology, you can walk through your apartment, change wall colors, switch materials, adjust lighting, rearrange furniture, and see realistic results — all before construction begins.',
              )}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {vrFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    className={`rounded-xl p-4 ${
                      isDark ? 'bg-white/10' : 'bg-white shadow-md ring-1 ring-black/5'
                    }`}
                  >
                    <div className="text-[#e4ba8b] mb-2">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3
                      className={`font-semibold text-xs mb-1 ${
                        isDark ? 'text-white' : 'text-[#283b4a]'
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-[10px] leading-relaxed ${
                        isDark ? 'text-white/70' : 'text-[#283b4a]/70'
                      }`}
                    >
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <Link
              href="/vr-real-estate"
              className="inline-flex items-center justify-center rounded-full bg-[#e4ba8b] px-6 py-2.5 text-xs sm:text-sm font-medium text-[#283b4a] shadow-lg transition-all duration-200 hover:bg-[#d4a97a] hover:shadow-xl hover:scale-[1.02]"
            >
              {t('اكتشف تجربة الواقع الافتراضي', 'Explore VR Experience')}
            </Link>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80"
                alt={t('تجربة جولة افتراضية', 'Virtual Tour Experience')}
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* VR Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#e4ba8b]/20 flex items-center justify-center">
                      <Glasses className="w-5 h-5 text-[#283b4a]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#283b4a]">
                        {t('جرّب قبل أن تبني', 'Experience Before You Build')}
                      </p>
                      <p className="text-[10px] text-[#283b4a]/70">
                        {t('تخصيص حيّ في الواقع الافتراضي', 'Live customization in virtual reality')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#e4ba8b]/10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[#283b4a]/10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
