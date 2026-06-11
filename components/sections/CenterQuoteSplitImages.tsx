'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function CenterQuoteSplitImages({
  leftImage,
  rightImage,
  ctaHref = '/contact',
}: {
  leftImage: string;
  rightImage: string;
  ctaHref?: string;
}) {
  const { isAr, t } = useLanguage();
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          {/* Left Image */}
          <div className="lg:col-span-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
              <Image src={leftImage} alt="Left" fill className="object-cover" loading="lazy" />
            </div>
          </div>

          {/* Center Quote */}
          <div className="lg:col-span-6 text-center">
            <h2 className="mx-auto max-w-xl font-playfair text-xl sm:text-2xl lg:text-3xl leading-tight text-[#283b4a] mb-3">
              {isAr ? (
                <>
                  إن استطعت أن <span className="text-[#e4ba8b]">تحلم</span> بها، فنحن قادرون على{' '}
                  <span className="text-[#e4ba8b]">بنائها</span>.
                </>
              ) : (
                <>
                  If you can <span className="italic text-[#e4ba8b]">dream</span> it, we can{' '}
                  <span className="italic text-[#e4ba8b]">build</span> it.
                </>
              )}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs lg:text-sm leading-relaxed text-[#283b4a]/70 mb-5">
              {t(
                'نتبنّى رؤية شخصية فريدة لكل مشروع لنقدّم مساحات مبهرة بأداء مثالي.',
                'We adapt a uniquely personalised perspective to each project to deliver stunning spaces of optimal function.',
              )}
            </p>
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-xl bg-[#283b4a] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[#1f2d38] hover:shadow-md"
            >
              {t('تواصل معنا', 'Get in touch')}
            </Link>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
              <Image src={rightImage} alt="Right" fill className="object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
