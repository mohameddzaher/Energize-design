"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import PageIntro from "@/components/sections/PageIntro";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  Glasses,
  Paintbrush,
  Move3D,
  Eye,
  Lightbulb,
  Sofa,
  Palette,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function VRRealEstatePage() {
  const { t } = useLanguage();

  const processSteps = [
    {
      step: "01",
      title: t("التصميم المبدئي", "Initial Design"),
      description: t(
        "ننشئ تصاميم تفصيلية ثنائية وثلاثية الأبعاد بناءً على متطلباتك وتفضيلاتك.",
        "We create detailed 2D and 3D designs based on your requirements and preferences.",
      ),
      icon: Lightbulb,
    },
    {
      step: "02",
      title: t("النمذجة ثلاثية الأبعاد", "3D Modeling"),
      description: t(
        "تُحوَّل مساحتك إلى نموذج ثلاثي الأبعاد واقعي بأبعاد وخامات دقيقة.",
        "Your space is transformed into a photorealistic 3D model with accurate dimensions and materials.",
      ),
      icon: Move3D,
    },
    {
      step: "03",
      title: t("تجربة الواقع الافتراضي", "VR Experience"),
      description: t(
        "ارتدِ نظارات الواقع الافتراضي وادخل إلى شقتك الافتراضية في جولة غامرة بالكامل.",
        "Put on VR glasses and step into your virtual apartment for a fully immersive walkthrough.",
      ),
      icon: Glasses,
    },
    {
      step: "04",
      title: t("التخصيص المباشر", "Live Customization"),
      description: t(
        "غيّر ألوان الجدران والخامات والإضاءة والأثاث والتوزيع لحظيًّا داخل الواقع الافتراضي.",
        "Change wall colors, materials, lighting, furniture, and layouts in real-time within VR.",
      ),
      icon: Paintbrush,
    },
    {
      step: "05",
      title: t("الاعتماد النهائي", "Final Approval"),
      description: t(
        "راجع التصميم النهائي واعتمد كل تفصيلة قبل بدء الإنشاء.",
        "Review the finalized design and approve every detail before construction begins.",
      ),
      icon: CheckCircle,
    },
  ];

  const benefits = [
    {
      icon: Eye,
      title: t("شاهد قبل أن تبني", "See Before You Build"),
      description: t(
        "عِش مساحتك المستقبلية بتفاصيل واقعية قبل بدء أي أعمال إنشاء. لا مزيد من التخمين أو الاعتماد على الخيال.",
        "Experience your future space in photorealistic detail before any construction work starts. No more guessing or relying on imagination.",
      ),
    },
    {
      icon: Palette,
      title: t("خيارات تصميم لا محدودة", "Unlimited Design Options"),
      description: t(
        "جرّب أنظمة ألوان وخامات وتوزيعات مختلفة فورًا. اختبر تركيبات لا حصر لها دون أي تكلفة واقعية.",
        "Try different color schemes, materials, and layouts instantly. Experiment with countless combinations without any real-world cost.",
      ),
    },
    {
      icon: Sofa,
      title: t("توزيع مثالي للأثاث", "Perfect Furniture Placement"),
      description: t(
        "اختبر ترتيبات الأثاث وشاهد بدقة كيف تتناسب القطع مع مساحتك. تأكّد من مثالية النسب والانسيابية.",
        "Test furniture arrangements and see exactly how pieces fit in your space. Ensure proportions and flow are perfect.",
      ),
    },
    {
      icon: Lightbulb,
      title: t("محاكاة الإضاءة", "Lighting Simulation"),
      description: t(
        "عايِن كيف تؤثّر الإضاءة الطبيعية والصناعية على مساحتك على مدار اليوم. حسّنها للراحة والأجواء.",
        "Experience how natural and artificial lighting affects your space throughout the day. Optimize for comfort and ambiance.",
      ),
    },
    {
      icon: CheckCircle,
      title: t("قرارات بثقة", "Confident Decisions"),
      description: t(
        "اتخذ قرارات مدروسة بثقة بصرية كاملة. تجنّب التعديلات المكلفة أثناء الإنشاء.",
        "Make informed decisions with full visual confidence. Eliminate costly changes during construction.",
      ),
    },
    {
      icon: Move3D,
      title: t("فهم المساحة", "Spatial Understanding"),
      description: t(
        "تجوّل في المساحات لتفهم الأبعاد والنسب حقًّا. عِش الانسيابية بين الغرف بنفسك.",
        "Walk through spaces to truly understand dimensions and proportions. Experience the flow between rooms firsthand.",
      ),
    },
  ];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", alt: t("تصور ثلاثي الأبعاد لغرفة معيشة", "3D living room visualization") },
    { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", alt: t("تصميم داخلي عصري ثلاثي الأبعاد", "Modern interior 3D render") },
    { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", alt: t("جولة تصور معماري", "Architectural visualization walkthrough") },
    { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: t("معاينة تصميم غرفة نوم ثلاثية الأبعاد", "3D bedroom design preview") },
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: t("جولة افتراضية في مطبخ", "Virtual kitchen tour") },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: t("تجربة مساحة ثلاثية الأبعاد غامرة", "Immersive 3D space experience") },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-40 lg:h-34 flex items-center justify-center overflow-hidden mt-20 lg:mt-18">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=1920&q=80"
            alt={t("واجهة الجولات الافتراضية", "Virtual Tours Hero")}
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
            {t("جولات افتراضية غامرة", "Immersive Virtual Tours")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-xs text-white/90 max-w-2xl mx-auto"
          >
            {t(
              "عِش مساحة أحلامك بتقنية ثلاثية الأبعاد مبهرة قبل بدء الإنشاء",
              "Experience your dream space in stunning 3D before construction begins",
            )}
          </motion.p>
        </div>
      </section>

      {/* Page Intro Section */}
      <PageIntro
        title={t("عِش مساحتك قبل أن تُبنى", "Experience Your Space Before It's Built")}
        description={t(
          "تحوّل تقنيتنا المتطورة في الواقع الافتراضي المخططات المعمارية إلى بيئات افتراضية غامرة. تجوّل في الغرف، واستشعر المساحة، واتخذ قراراتك التصميمية بثقة كاملة.",
          "Our cutting-edge VR technology transforms architectural plans into immersive virtual environments. Walk through rooms, feel the space, and make design decisions with complete confidence.",
        )}
      />

      {/* What are Virtual Tours Section */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-xl lg:text-3xl font-playfair font-bold text-white mb-6">
                  {t("ما هي ", "What are ")}
                  <span className="text-[#e4ba8b]">{t("الجولات الافتراضية؟", "Virtual Tours?")}</span>
                </h2>
                <div className="space-y-4 text-sm lg:text-base text-white/80 leading-relaxed">
                  <p>
                    {t(
                      "الجولات الافتراضية نهج ثوري في التصميم الداخلي وتصور المساحات. باستخدام تقنية ثلاثية الأبعاد غامرة، يمكن للعملاء استكشاف نسخة رقمية مفصّلة بالكامل من شقتهم أو مساحتهم المستقبلية.",
                      "Virtual Tours are a revolutionary approach to interior design and space visualization. Using immersive 3D technology, clients can explore a fully detailed digital version of their future apartment or space.",
                    )}
                  </p>
                  <p>
                    {t(
                      "تجوّل بحرية في مساحتك الافتراضية بنظارات الواقع الافتراضي أو على أي شاشة. افتح الأبواب، وانظر من النوافذ، وعِش المقياس والنسب الحقيقية لكل غرفة. إنها أقرب ما يكون إلى التواجد الفعلي — دون وضع طوبة واحدة.",
                      "Walk freely through your virtual space using VR glasses or on any screen. Open doors, look out windows, and experience the true scale and proportions of every room. It's as close to being there as possible — without a single brick being laid.",
                    )}
                  </p>
                  <p>
                    {t(
                      "يحدث السحر الحقيقي عندما تبدأ بالتخصيص. غيّر ألوان الجدران بإيماءة، واستبدل أرضيات الرخام بالخشب، واضبط الإضاءة من الدافئة إلى الباردة، وحرّك الأثاث، وشاهد كل تغيير يُعرض بجودة واقعية فورًا.",
                      "The real magic happens when you start customizing. Change wall colors with a gesture, swap marble floors for hardwood, adjust lighting from warm to cool, move furniture around, and see every change rendered in photorealistic quality instantly.",
                    )}
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                  alt={t("تجربة جولة افتراضية", "Virtual Tour Experience")}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Process Steps Section */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-[#283b4a] mb-4">
              {t("مراحل ", "The ")}
              <span className="italic text-[#e4ba8b]">{t("تجربة الواقع الافتراضي", "VR Experience")}</span>
              {t("", " Process")}
            </h2>
            <p className="text-sm lg:text-base text-[#283b4a]/70 max-w-2xl mx-auto">
              {t(
                "من الفكرة الأولى إلى الاعتماد النهائي، تضمن عمليتنا السلسة تحكّمك الكامل في كل قرار تصميمي.",
                "From initial concept to final approval, our streamlined process ensures you have complete control over every design decision.",
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-black/5 h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="text-[#e4ba8b] text-3xl font-playfair font-bold mb-3">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#e4ba8b]/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#283b4a]" />
                    </div>
                    <h3 className="font-semibold text-sm text-[#283b4a] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#283b4a]/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {/* Connector Line - Hidden on last item and mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#e4ba8b]/30" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Key Benefits Section */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-white mb-4">
              {t("أبرز ", "Key ")}
              <span className="italic text-[#e4ba8b]">{t("الفوائد", "Benefits")}</span>
              {t(" للعملاء", " for Clients")}
            </h2>
            <p className="text-sm lg:text-base text-white/70 max-w-2xl mx-auto">
              {t(
                "تُحوّل تقنية الواقع الافتراضي عملية التصميم، مانحةً إياك تحكّمًا وثقة غير مسبوقين في استثمارك.",
                "VR technology transforms the design process, giving you unprecedented control and confidence in your investment.",
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#e4ba8b]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#e4ba8b]" />
                  </div>
                  <h3 className="font-semibold text-base text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-[#283b4a] mb-4">
              {t("معرض ", "VR Experience ")}
              <span className="italic text-[#e4ba8b]">{t("الواقع الافتراضي", "Gallery")}</span>
            </h2>
            <p className="text-sm lg:text-base text-[#283b4a]/70 max-w-2xl mx-auto">
              {t(
                "استكشف قدراتنا في تصور العقارات بالواقع الافتراضي عبر هذه التجارب الغامرة.",
                "Explore our VR real estate visualization capabilities through these immersive experiences.",
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  index === 0 || index === 5 ? "lg:col-span-2 h-64" : "h-48"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Video Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-white mb-4">
              {t("شاهد الواقع الافتراضي ", "See VR in ")}
              <span className="italic text-[#e4ba8b]">{t("أثناء العمل", "Action")}</span>
            </h2>
            <p className="text-sm lg:text-base text-white/70 max-w-xl mx-auto">
              {t(
                "شاهد كيف تُحوّل تقنيتنا في الواقع الافتراضي تجربة التصميم لعملائنا.",
                "Watch how our VR technology transforms the design experience for our clients.",
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://assets.mixkit.co/videos/4198/4198-720.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section background="beige">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 inline-flex w-fit rounded-full bg-[#283b4a] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg">
              {t("ابدأ رحلتك", "Start Your Journey")}
            </div>
            <h2 className="text-2xl lg:text-4xl font-playfair font-bold text-[#283b4a] mb-4">
              {t("هل أنت مستعد لتعيش", "Ready to Experience Your")}
              <br />
              <span className="italic">{t("مساحتك المستقبلية؟", "Future Space?")}</span>
            </h2>
            <p className="text-sm lg:text-base text-[#283b4a]/80 max-w-xl mx-auto mb-8 leading-relaxed">
              {t(
                "احجز جلسة واقع افتراضي وتجوّل في مساحة أحلامك قبل بدء الإنشاء. اتخذ كل قرار بثقة كاملة.",
                "Book a VR session and walk through your dream space before construction begins. Make every decision with complete confidence.",
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#283b4a] px-8 py-3.5 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:bg-[#1f2d38] hover:shadow-xl hover:scale-[1.02]"
              >
                {t("احجز تجربة الواقع الافتراضي", "Book VR Experience")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#283b4a] px-8 py-3.5 text-sm font-medium text-[#283b4a] transition-all duration-200 hover:bg-[#283b4a]/10"
              >
                {t("تواصل معنا", "Contact Us")}
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
