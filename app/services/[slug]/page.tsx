import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Section from '@/components/ui/Section';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services';
import ServiceContent from '@/components/sections/ServiceContent';
import ServiceHero from '@/components/sections/ServiceHero';

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Energize Design`,
      description: service.description,
      images: service.image ? [service.image] : ['/images/logo.png'],
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />

      {/* Service Description */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <ServiceContent service={service} />
        </div>
      </Section>
    </>
  );
}
