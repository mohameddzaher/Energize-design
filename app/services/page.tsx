"use client";

import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import PageIntro from "@/components/sections/PageIntro";
import { getGoogleDriveUrl } from "@/lib/googleDrive";
import { Glasses, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const innovationServices = services.filter(
    (s) => s.category === "Innovation & Technology",
  );
  const designServices = services.filter(
    (s) => s.category === "Design & Creative Services",
  );
  const constructionServices = services.filter(
    (s) => s.category === "Execution & Construction Services",
  );
  const projectManagementServices = services.filter(
    (s) => s.category === "Project Management",
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-40 lg:h-34 flex items-center justify-center overflow-hidden mt-20 lg:mt-18">
        <div className="absolute inset-0">
          <Image
            src={getGoogleDriveUrl(
              "/images/projects/Studio/Studio-03.jpg",
              false,
            )}
            alt="Services Background"
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
            transition={{ duration: 0.6 }}
            className="text-xl lg:text-2xl font-bold text-white mb-2"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs text-white/90 max-w-2xl mx-auto"
          >
            Comprehensive design and construction solutions tailored to your
            needs
          </motion.p>
        </div>
      </section>

      {/* Page Intro Section */}
      <PageIntro
        title="End-to-End Excellence"
        description="From conceptual design to final execution, we orchestrate every phase of your project with precision and passion, ensuring that your vision materializes into spaces that not only meet but exceed expectations."
      />

      {/* Innovation & Technology - Featured Virtual Tours */}
      <Section background="beige">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#283b4a] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg mb-4">
            <Glasses className="w-3.5 h-3.5" />
            New Technology
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-[#283b4a]">
            Innovation & Technology
          </h2>
        </motion.div>

        {innovationServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={service.image || "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-[#283b4a] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#283b4a]/80 leading-relaxed mb-4">
                  {service.fullDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.slice(0, 4).map((feature) => (
                    <span
                      key={feature}
                      className="text-[10px] px-2.5 py-1 bg-white text-[#283b4a] rounded-full shadow-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  href="/vr-real-estate"
                  className="inline-flex items-center justify-center rounded-full bg-[#283b4a] px-6 py-2.5 text-xs font-medium text-white shadow-lg transition-all duration-200 hover:bg-[#1f2d38] hover:shadow-xl hover:scale-[1.02]"
                >
                  Explore VR Experience
                  <ArrowRight className="ml-2 w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </Section>

      {/* Design & Creative Services */}
      <Section background="dark">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl lg:text-2xl font-bold mb-8 text-center text-white"
        >
          Design & Creative Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {designServices.map((service, index) => (
            <Link key={service.id} href={`/services/${service.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="bg-[#fff9f2] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer h-full"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={
                      projects[6]?.images[index % projects[6].images.length] ||
                      getGoogleDriveUrl(
                        "/images/projects/Studio/Studio-01.jpg",
                        false,
                      )
                    }
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-3">
                  <h3 className="text-xs lg:text-sm font-bold text-[#283b4a] mb-1.5 text-center">
                    {service.title}
                  </h3>
                  <p className="text-[10px] text-[#283b4a]/70 mb-2 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-[9px] px-1 py-0.5 bg-white text-[#283b4a] rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Execution & Construction Services */}
      <Section background="light">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl lg:text-2xl font-bold text-[#283b4a] mb-8 text-center"
        >
          Execution & Construction Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {constructionServices.map((service, index) => (
            <Link key={service.id} href={`/services/${service.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer h-full"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={
                      projects[5]?.images[index % projects[5].images.length] ||
                      getGoogleDriveUrl(
                        "/images/projects/Offices/Offices-Makkah-01.jpg",
                        false,
                      )
                    }
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-3">
                  <h3 className="text-xs lg:text-sm font-bold text-[#283b4a] mb-1.5 text-center">
                    {service.title}
                  </h3>
                  <p className="text-[10px] text-[#283b4a]/70 mb-2 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-[9px] px-1 py-0.5 bg-[#fff9f2] text-[#283b4a] rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
