import { getGoogleDriveUrl } from './googleDrive';

export interface Project {
  id: string;
  name: string;
  nameAr?: string;
  slug: string;
  category: string;
  categoryAr?: string;
  description: string;
  descriptionAr?: string;
  images: string[];
  video?: string;
}

export type Lang = "ar" | "en";

const CATEGORY_AR: Record<string, string> = {
  Residential: "سكني",
  Commercial: "تجاري",
  Hospitality: "ضيافة",
};

export function categoryLabel(category: string, lang: Lang): string {
  return lang === "ar" ? CATEGORY_AR[category] ?? category : category;
}

/** Return a copy of the project with text fields in the requested language. */
export function localizeProject(p: Project, lang: Lang): Project {
  if (lang !== "ar") return p;
  return {
    ...p,
    name: p.nameAr ?? p.name,
    category: p.categoryAr ?? CATEGORY_AR[p.category] ?? p.category,
    description: p.descriptionAr ?? p.description,
  };
}

// Helper function to convert local paths to Google Drive URLs
function getImageUrl(localPath: string): string {
  return getGoogleDriveUrl(localPath, false);
}

function getVideoUrl(localPath: string): string {
  return getGoogleDriveUrl(localPath, true);
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Boys Bedroom",
    nameAr: "غرفة نوم أولاد",
    slug: "boys-bedroom",
    category: "Residential",
    description:
      "A professionally designed boys' bedroom that balances elegance and functionality, with smart space planning and warm details for a calm living experience.",
    descriptionAr:
      "غرفة نوم أولاد بتصميم احترافي يوازن بين الأناقة والوظيفة، مع تخطيط ذكي للمساحة ولمسات دافئة لتجربة معيشة هادئة.",
    images: [
      getImageUrl("/images/projects/Boys Bedroom/BBR-03.jpg"),
      getImageUrl("/images/projects/Boys Bedroom/BBR-01.jpg"),
      getImageUrl("/images/projects/Boys Bedroom/BBR-02.jpg"),
      getImageUrl("/images/projects/Boys Bedroom/BBR-04.jpg"),
      getImageUrl("/images/projects/Boys Bedroom/BBR-05.jpg"),
      getImageUrl("/images/projects/Boys Bedroom/BBR-06.jpg"),
    ],
    video: getVideoUrl("/images/projects/Boys Bedroom/BoysBedroom Video.mp4"),
  },
  {
    id: "2",
    name: "Girls Bedroom",
    nameAr: "غرفة نوم بنات",
    slug: "girls-bedroom",
    category: "Residential",
    description:
      "A modern and elegant girls' bedroom design that combines comfort, functionality, and style.",
    descriptionAr:
      "تصميم عصري وأنيق لغرفة نوم بنات يجمع بين الراحة والوظيفة والذوق الرفيع.",
    images: [
      getImageUrl("/images/projects/Girls Bedroom/Girls Bedroom-01.jpg"),
      getImageUrl("/images/projects/Girls Bedroom/Girls Bedroom-02.jpg"),
      getImageUrl("/images/projects/Girls Bedroom/Girls Bedroom-03.jpg"),
      getImageUrl("/images/projects/Girls Bedroom/Girls Bedroom-04.jpg"),
    ],
    video: getVideoUrl("/images/projects/Girls Bedroom/GBR.mp4"),
  },
  {
    id: "3",
    name: "Jewelry Store",
    nameAr: "متجر مجوهرات",
    slug: "jewelry-store",
    category: "Commercial",
    description:
      "Design and renovation of a diamond store in Jeddah with a modern luxury style that highlights the brilliance of diamonds and offers customers a unique experience.",
    descriptionAr:
      "تصميم وتجديد متجر ألماس في جدة بطابع فاخر وعصري يُبرز بريق الألماس ويمنح العملاء تجربة فريدة.",
    images: [
      getImageUrl("/images/projects/Jewelry Store/Jewelry Store-08.jpg"),
      getImageUrl("/images/projects/Jewelry Store/Jewelry Store-02.jpg"),
      getImageUrl("/images/projects/Jewelry Store/Jewelry Store-03.jpg"),
      getImageUrl("/images/projects/Jewelry Store/Jewelry Store-04.jpg"),
      getImageUrl("/images/projects/Jewelry Store/Jewelry Store-05.jpg"),
      getImageUrl("/images/projects/Jewelry Store/Jewelry Store-06.jpg"),
      getImageUrl("/images/projects/Jewelry Store/Jewelry Store-07.jpg"),
      getImageUrl("/images/projects/Jewelry Store/Jewelry Store-01.jpg"),
      getImageUrl("/images/projects/Jewelry Store/Jewelry Store-09.jpg"),
      getImageUrl("/images/projects/Jewelry Store/Jewelry Store-10.jpg"),
    ],
    video: getVideoUrl("/images/projects/Jewelry Store/Jewelry Store Video.mov"),
  },
  {
    id: "4",
    name: "LANO Cafe",
    nameAr: "مقهى لانو",
    slug: "lano-cafe",
    category: "Hospitality",
    description:
      "A modern cafe design that creates a welcoming atmosphere for customers.",
    descriptionAr:
      "تصميم عصري لمقهى يخلق أجواءً ترحيبية ودافئة للعملاء.",
    images: [
      getImageUrl("/images/projects/LANO Cafe/LANO CAFE-09.jpg"),
      getImageUrl("/images/projects/LANO Cafe/LANO CAFE-02.jpg"),
      getImageUrl("/images/projects/LANO Cafe/LANO CAFE-04.jpg"),
      getImageUrl("/images/projects/LANO Cafe/LANO CAFE-05.jpg"),
      getImageUrl("/images/projects/LANO Cafe/LANO CAFE-06.jpg"),
      getImageUrl("/images/projects/LANO Cafe/LANO CAFE-07.jpg"),
      getImageUrl("/images/projects/LANO Cafe/LANO CAFE-08.jpg"),
      getImageUrl("/images/projects/LANO Cafe/LANO CAFE-09.jpg"),
    ],
    video: getVideoUrl("/images/projects/LANO Cafe/Lano Cafe .mp4"),
  },
  {
    id: "5",
    name: "Master Bedroom",
    nameAr: "غرفة النوم الرئيسية",
    slug: "master-bedroom",
    category: "Residential",
    description:
      "A luxurious master bedroom design that combines elegance and comfort.",
    descriptionAr:
      "تصميم فاخر لغرفة النوم الرئيسية يجمع بين الأناقة والراحة.",
    images: [
      getImageUrl("/images/projects/Master Bedroom/Bedroom-01.jpg"),
      getImageUrl("/images/projects/Master Bedroom/Bedroom-02.jpg"),
      getImageUrl("/images/projects/Master Bedroom/Bedroom-03.jpg"),
      getImageUrl("/images/projects/Master Bedroom/Bedroom-04.jpg"),
      getImageUrl("/images/projects/Master Bedroom/Bedroom-05.jpg"),
      getImageUrl("/images/projects/Master Bedroom/Bedroom-06.jpg"),
    ],
    video: getVideoUrl("/images/projects/Master Bedroom/Master Bedroom.mp4"),
  },
  {
    id: "6",
    name: "Offices",
    nameAr: "مكاتب",
    slug: "offices",
    category: "Commercial",
    description:
      "Professional office space design in Makkah that enhances productivity and creates a modern work environment.",
    descriptionAr:
      "تصميم احترافي لمساحات مكتبية في مكة يعزّز الإنتاجية ويخلق بيئة عمل عصرية.",
    images: [
      getImageUrl("/images/projects/Offices/Offices-Makkah-01.jpg"),
      getImageUrl("/images/projects/Offices/Offices-Makkah-02.jpg"),
      getImageUrl("/images/projects/Offices/Offices-Makkah-03.jpg"),
      getImageUrl("/images/projects/Offices/Offices-Makkah-04.jpg"),
      getImageUrl("/images/projects/Offices/Offices-Makkah-05.jpg"),
      getImageUrl("/images/projects/Offices/Offices-Makkah-06.jpg"),
      getImageUrl("/images/projects/Offices/Offices-Makkah-07.jpg"),
      getImageUrl("/images/projects/Offices/Offices-Makkah-08.jpg"),
    ],
    video: getVideoUrl("/images/projects/Offices/Offices Video.mp4"),
  },
  {
    id: "7",
    name: "Studio",
    nameAr: "ستوديو",
    slug: "studio",
    category: "Residential",
    description:
      "A modern studio design that balances elegance and functionality, with smart space planning and warm details for a calm living experience.",
    descriptionAr:
      "تصميم عصري لستوديو يوازن بين الأناقة والوظيفة، مع تخطيط ذكي للمساحة ولمسات دافئة لتجربة معيشة هادئة.",
    images: [
      getImageUrl("/images/projects/Studio/Studio-01.jpg"),
      getImageUrl("/images/projects/Studio/Studio-02.jpg"),
      getImageUrl("/images/projects/Studio/Studio-03.jpg"),
      getImageUrl("/images/projects/Studio/Studio-04.jpg"),
      getImageUrl("/images/projects/Studio/Studio-05.jpg"),
      getImageUrl("/images/projects/Studio/Studio-06.jpg"),
      getImageUrl("/images/projects/Studio/Studio-07.jpg"),
      getImageUrl("/images/projects/Studio/Studio-08.jpg"),
      getImageUrl("/images/projects/Studio/Studio-09.jpg"),
      getImageUrl("/images/projects/Studio/Studio-10.jpg"),
      getImageUrl("/images/projects/Studio/Studio-11.jpg"),
    ],
    video: getVideoUrl("/images/projects/Studio/STUDIO.mov"),
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
