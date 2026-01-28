export interface Project {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  video?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Boys Bedroom",
    slug: "boys-bedroom",
    category: "Residential",
    description:
      "A professionally designed boys' bedroom that balances elegance and functionality, with smart space planning and warm details for a calm living experience.",
    images: [
      "/images/projects/Boys Bedroom/BBR-03.jpg",
      "/images/projects/Boys Bedroom/BBR-01.jpg",
      "/images/projects/Boys Bedroom/BBR-02.jpg",
      "/images/projects/Boys Bedroom/BBR-04.jpg",
      "/images/projects/Boys Bedroom/BBR-05.jpg",
      "/images/projects/Boys Bedroom/BBR-06.jpg",
    ],
    video: "/images/projects/Boys Bedroom/BoysBedroom Video.mp4",
  },
  {
    id: "2",
    name: "Girls Bedroom",
    slug: "girls-bedroom",
    category: "Residential",
    description:
      "A modern and elegant girls' bedroom design that combines comfort, functionality, and style.",
    images: [
      "/images/projects/Girls Bedroom/Girls Bedroom-01.jpg",
      "/images/projects/Girls Bedroom/Girls Bedroom-02.jpg",
      "/images/projects/Girls Bedroom/Girls Bedroom-03.jpg",
      "/images/projects/Girls Bedroom/Girls Bedroom-04.jpg",
    ],
    video: "/images/projects/Girls Bedroom/GBR.mp4",
  },
  {
    id: "3",
    name: "Jewelry Store",
    slug: "jewelry-store",
    category: "Commercial",
    description:
      "Design and renovation of a diamond store in Jeddah with a modern luxury style that highlights the brilliance of diamonds and offers customers a unique experience.",
    images: [
      "/images/projects/Jewelry Store/Jewelry Store-08.jpg",
      "/images/projects/Jewelry Store/Jewelry Store-02.jpg",
      "/images/projects/Jewelry Store/Jewelry Store-03.jpg",
      "/images/projects/Jewelry Store/Jewelry Store-04.jpg",
      "/images/projects/Jewelry Store/Jewelry Store-05.jpg",
      "/images/projects/Jewelry Store/Jewelry Store-06.jpg",
      "/images/projects/Jewelry Store/Jewelry Store-07.jpg",
      "/images/projects/Jewelry Store/Jewelry Store-01.jpg",
      "/images/projects/Jewelry Store/Jewelry Store-09.jpg",
      "/images/projects/Jewelry Store/Jewelry Store-10.jpg",
    ],
    video: "/images/projects/Jewelry Store/Jewelry Store Video.mov",
  },
  {
    id: "4",
    name: "LANO Cafe",
    slug: "lano-cafe",
    category: "Hospitality",
    description:
      "A modern cafe design that creates a welcoming atmosphere for customers.",
    images: [
      "/images/projects/LANO Cafe/LANO CAFE-09.jpg",
      "/images/projects/LANO Cafe/LANO CAFE-02.jpg",
      "/images/projects/LANO Cafe/LANO CAFE-04.jpg",
      "/images/projects/LANO Cafe/LANO CAFE-05.jpg",
      "/images/projects/LANO Cafe/LANO CAFE-06.jpg",
      "/images/projects/LANO Cafe/LANO CAFE-07.jpg",
      "/images/projects/LANO Cafe/LANO CAFE-08.jpg",
      "/images/projects/LANO Cafe/LANO CAFE-09.jpg",
    ],
    video: "/images/projects/LANO Cafe/Lano Cafe .mp4",
  },
  {
    id: "5",
    name: "Master Bedroom",
    slug: "master-bedroom",
    category: "Residential",
    description:
      "A luxurious master bedroom design that combines elegance and comfort.",
    images: [
      "/images/projects/Master Bedroom/Bedroom-01.jpg",
      "/images/projects/Master Bedroom/Bedroom-02.jpg",
      "/images/projects/Master Bedroom/Bedroom-03.jpg",
      "/images/projects/Master Bedroom/Bedroom-04.jpg",
      "/images/projects/Master Bedroom/Bedroom-05.jpg",
      "/images/projects/Master Bedroom/Bedroom-06.jpg",
    ],
    video: "/images/projects/Master Bedroom/Master Bedroom.mp4",
  },
  {
    id: "6",
    name: "Offices",
    slug: "offices",
    category: "Commercial",
    description:
      "Professional office space design in Makkah that enhances productivity and creates a modern work environment.",
    images: [
      "/images/projects/Offices/Offices-Makkah-01.jpg",
      "/images/projects/Offices/Offices-Makkah-02.jpg",
      "/images/projects/Offices/Offices-Makkah-03.jpg",
      "/images/projects/Offices/Offices-Makkah-04.jpg",
      "/images/projects/Offices/Offices-Makkah-05.jpg",
      "/images/projects/Offices/Offices-Makkah-06.jpg",
      "/images/projects/Offices/Offices-Makkah-07.jpg",
      "/images/projects/Offices/Offices-Makkah-08.jpg",
    ],
    video: "/images/projects/Offices/Offices Video.mp4",
  },
  {
    id: "7",
    name: "Studio",
    slug: "studio",
    category: "Residential",
    description:
      "A modern studio design that balances elegance and functionality, with smart space planning and warm details for a calm living experience.",
    images: [
      "/images/projects/Studio/Studio-01.jpg",
      "/images/projects/Studio/Studio-02.jpg",
      "/images/projects/Studio/Studio-03.jpg",
      "/images/projects/Studio/Studio-04.jpg",
      "/images/projects/Studio/Studio-05.jpg",
      "/images/projects/Studio/Studio-06.jpg",
      "/images/projects/Studio/Studio-07.jpg",
      "/images/projects/Studio/Studio-08.jpg",
      "/images/projects/Studio/Studio-09.jpg",
      "/images/projects/Studio/Studio-10.jpg",
      "/images/projects/Studio/Studio-11.jpg",
    ],
    video: "/images/projects/Studio/STUDIO.mov",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
