import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | المدوّنة",
  description:
    "رؤى وأفكار في التصميم الداخلي والإنشاء والابتكار والسوق العقاري السعودي ورؤية 2030. Insights on interior design, construction, VR, and the Saudi real estate market from Energize Design in Jeddah.",
  keywords: [
    "interior design blog Saudi Arabia",
    "construction insights Jeddah",
    "Vision 2030 real estate",
    "interior design trends Saudi",
    "VR virtual tours Saudi",
    "مدونة التصميم الداخلي",
    "نصائح ديكور السعودية",
    "أخبار العقار السعودي",
    "تصميم داخلي جدة",
  ],
  alternates: {
    canonical: "https://energize-design.com/blog",
  },
  openGraph: {
    title: "Blog & Insights | Energize Design",
    description:
      "Insights on interior design, construction, VR, and the Saudi real estate market. رؤى في التصميم والإنشاء والسوق السعودي.",
    url: "https://energize-design.com/blog",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Energize Design Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Insights | Energize Design",
    description:
      "Insights on interior design, construction, and the Saudi real estate market.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
