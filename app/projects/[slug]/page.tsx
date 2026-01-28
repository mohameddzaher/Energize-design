import { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Section from "@/components/ui/Section";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import ProjectHero from "@/components/sections/ProjectHero";
import ProjectOverview from "@/components/sections/ProjectOverview";

// Dynamic imports for performance optimization
const ProjectVideo = dynamic(
  () => import("@/components/sections/ProjectVideo"),
  { ssr: false, loading: () => <div className="h-[460px] sm:h-[540px] w-full max-w-[240px] sm:max-w-[280px] mx-auto" /> }
);

const ProjectVideoGallery = dynamic(
  () => import("@/components/sections/ProjectVideoGallery"),
  { ssr: false }
);

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} | Energize Design`,
      description: project.description,
      images:
        project.images.length > 0 ? [project.images[0]] : ["/images/logo.png"],
      type: "website",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />

      {/* Project Overview */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <ProjectOverview project={project} />
        </div>
      </Section>

      {/* Video Section - Before Gallery */}
      {project.video && (
        <Section background="light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectVideo video={project.video} projectName={project.name} />
          </div>
        </Section>
      )}

      {/* Gallery Section */}
      <Section background="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-bold text-center text-[#283b4a] mb-6">
            Project Gallery
          </h2>
          <ProjectVideoGallery
            images={project.images}
            projectName={project.name}
          />
        </div>
      </Section>
    </>
  );
}
