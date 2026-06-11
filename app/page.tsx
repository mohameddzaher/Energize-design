import { Metadata } from "next";
import RoundedHeroBanner from "@/components/sections/RoundedHeroBanner";
import VRRealEstatePreview from "@/components/sections/VRRealEstatePreview";
import CenterQuoteSplitImages from "@/components/sections/CenterQuoteSplitImages";
import CollageShowcase from "@/components/sections/CollageShowcase";
import ServicesPreview from "@/components/sections/ServicesPreview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import Newsletter from "@/components/sections/Newsletter";
import ContactCTA from "@/components/sections/ContactCTA";
import MapSection from "@/components/sections/MapSection";
import { getGoogleDriveUrl } from "@/lib/googleDrive";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Energize Design - Premium interior design and construction services in Jeddah, Saudi Arabia. Raising design and execution standards with refined craftsmanship and modern innovation.",
  openGraph: {
    title: "Energize Design | Premium Interior Design & Construction",
    description:
      "Raising design and execution standards by merging refined craftsmanship with modern innovation.",
    images: [getGoogleDriveUrl("/images/projects/Studio/Studio-01.jpg", false)],
  },
};

export default function Home() {
  return (
    <>
      {/* Premium Hero Banner */}
      <RoundedHeroBanner />

      {/* Virtual Tours Preview - New Service */}
      <VRRealEstatePreview background="light" />

      {/* Center Quote with Split Images */}
      <CenterQuoteSplitImages
        leftImage={getGoogleDriveUrl("/images/projects/Offices/Offices-Makkah-05.jpg", false)}
        rightImage={getGoogleDriveUrl("/images/projects/Studio/Studio-03.jpg", false)}
        ctaHref="/contact"
      />

      {/* Collage Showcase */}
      <CollageShowcase
        ctaHref="/services"
        images={[
          getGoogleDriveUrl("/images/projects/Offices/Offices-Makkah-01.jpg", false),
          getGoogleDriveUrl("/images/projects/Master Bedroom/Bedroom-02.jpg", false),
          getGoogleDriveUrl("/images/projects/Boys Bedroom/BBR-01.jpg", false),
        ]}
      />

      {/* Services Preview - Updated Style */}
      <ServicesPreview background="dark" />

      {/* Featured Projects - Updated Style */}
      <FeaturedProjects background="light" />

      {/* Why Choose Us */}
      <WhyChooseUs background="dark" />

      {/* Gallery */}
      <Gallery background="light" />

      {/* Newsletter */}
      <Newsletter background="dark" />

      {/* Contact CTA */}
      <ContactCTA background="light" />

      {/* Map Section */}
      <MapSection background="dark" />
    </>
  );
}
