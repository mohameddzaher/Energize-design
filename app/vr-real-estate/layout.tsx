import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immersive Virtual Tours | Energize Design",
  description:
    "Experience your future home before it's built. Our VR technology lets you walk through virtual spaces, customize colors, materials, and layouts in real-time.",
  keywords: [
    "virtual tours",
    "virtual reality tours",
    "3D home visualization",
    "interior design VR",
    "immersive design experience",
    "VR interior design",
    "3D walkthrough",
    "architectural visualization",
    "Jeddah virtual tours",
    "Saudi Arabia 3D tours",
  ],
  openGraph: {
    title: "Immersive Virtual Tours | Energize Design",
    description:
      "Walk through your future home using VR technology. Customize colors, materials, and layouts in real-time before construction begins.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Immersive Virtual Tour Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Immersive Virtual Tours | Energize Design",
    description:
      "Experience your future home before it's built with our immersive VR technology.",
    images: [
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=1200&q=80",
    ],
  },
};

export default function VRRealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
