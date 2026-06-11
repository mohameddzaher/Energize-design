import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from "@/lib/blog";
import BlogArticle from "@/components/sections/BlogArticle";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  const url = `https://energize-design.com/blog/${post.slug}`;

  return {
    title: `${post.titleAr} | ${post.title}`,
    description: `${post.excerptAr} — ${post.excerpt}`,
    keywords: [...post.keywordsAr, ...post.keywords],
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | Energize Design`,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.keywords,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const url = `https://energize-design.com/blog/${post.slug}`;

  // Article structured data (JSON-LD) for SEO — bilingual headline.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    alternativeHeadline: post.titleAr,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: ["ar", "en"],
    keywords: [...post.keywords, ...post.keywordsAr].join(", "),
    articleSection: post.category,
    author: {
      "@type": "Organization",
      name: "Energize Design",
      url: "https://energize-design.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Energize Design",
      logo: {
        "@type": "ImageObject",
        url: "https://energize-design.com/images/logo.png",
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  // Up to 3 related posts (excluding the current one).
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogArticle post={post} related={related} />
    </>
  );
}
