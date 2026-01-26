export interface Service {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  fullDescription: string;
  features: string[];
  image?: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Architectural & Interior Design',
    slug: 'architectural-interior-design',
    category: 'Design & Creative Services',
    description: 'Creating spaces that blend functionality with aesthetic excellence.',
    fullDescription: 'We develop innovative concepts and detailed 2D and 3D designs for residential, commercial, and administrative spaces, with our focus on improving flow, functionality, and aesthetic appeal.',
    features: [
      'Innovative concept development',
      'Detailed 2D and 3D designs',
      'Residential, commercial, and administrative spaces',
      'Flow and functionality optimization',
      'Aesthetic appeal enhancement',
      'Comprehensive design solutions',
    ],
  },
  {
    id: '2',
    title: 'Space Planning & Optimization',
    slug: 'space-planning-optimization',
    category: 'Design & Creative Services',
    description: 'Strategic space planning to maximize functionality and flow.',
    fullDescription: 'Strategic planning for space distribution aimed at achieving maximum utilization of every square meter and ensuring effective and comfortable work and living environments.',
    features: [
      'Strategic space distribution',
      'Maximum square meter utilization',
      'Effective work environments',
      'Comfortable living spaces',
      'Functional layout optimization',
      'Traffic flow analysis',
    ],
  },
  {
    id: '3',
    title: 'Materials & Finishes Selection',
    slug: 'materials-finishes-selection',
    category: 'Design & Creative Services',
    description: 'Professional consultation and sourcing of high-quality materials.',
    fullDescription: 'Professional consultation and supply of high-quality materials, finishes, lighting, and furniture that align with the design vision and specified budget.',
    features: [
      'Professional consultation',
      'High-quality material sourcing',
      'Finish selection',
      'Lighting solutions',
      'Furniture selection',
      'Budget alignment',
    ],
  },
  {
    id: '4',
    title: 'Custom Furniture Design',
    slug: 'custom-furniture-design',
    category: 'Design & Creative Services',
    description: 'Unique furniture pieces designed specifically for your space.',
    fullDescription: 'Designing unique furniture pieces specifically tailored to fit your space and design requirements, adding a distinctive touch to interior details.',
    features: [
      'Unique furniture design',
      'Space-specific customization',
      'Design requirement alignment',
      'Distinctive interior details',
      'Custom fabrication',
      'Quality craftsmanship',
    ],
  },
  {
    id: '5',
    title: 'General Contracting & Construction',
    slug: 'general-contracting-construction',
    category: 'Execution & Construction Services',
    description: 'Comprehensive construction services managed by experienced engineering teams.',
    fullDescription: 'Integrated construction services including structural work, foundation work, and building structures, managed with high professionalism by our experienced engineering teams.',
    features: [
      'Integrated construction services',
      'Structural work',
      'Foundation work',
      'Building structures',
      'Professional project management',
      'Experienced engineering teams',
    ],
  },
  {
    id: '6',
    title: 'Interior Fit-Out & Finishing Works',
    slug: 'interior-fit-out-finishing',
    category: 'Execution & Construction Services',
    description: 'Complete interior and exterior fit-out services.',
    fullDescription: 'Comprehensive services for interior and exterior fit-outs including all finishing work (mechanical, electrical, plumbing, tiling, painting, carpentry, and gypsum work) until complete project handover.',
    features: [
      'Interior and exterior fit-outs',
      'Mechanical work',
      'Electrical installations',
      'Plumbing systems',
      'Tiling and flooring',
      'Painting and finishes',
      'Carpentry and joinery',
      'Gypsum work',
      'Complete project handover',
    ],
  },
  {
    id: '7',
    title: 'Renovation & Redesign',
    slug: 'renovation-redesign',
    category: 'Execution & Construction Services',
    description: 'Comprehensive development and renovation services.',
    fullDescription: 'Comprehensive services for developing, renovating, and redesigning existing buildings and interior spaces in line with modern functional requirements and latest contemporary design trends.',
    features: [
      'Building development',
      'Renovation services',
      'Interior space redesign',
      'Modern functional requirements',
      'Contemporary design trends',
      'Structural assessment',
      'Modern upgrades',
    ],
  },
  {
    id: '8',
    title: 'Project Management & Supervision',
    slug: 'project-management',
    category: 'Execution & Construction Services',
    description: 'Comprehensive management of all project phases.',
    fullDescription: 'Comprehensive management of all project phases including timeline, budget, quality control, and safety on the work site, ensuring integrated coordination between all subcontractors for smooth and effective execution.',
    features: [
      'Timeline management',
      'Budget control',
      'Quality assurance',
      'Safety supervision',
      'Work site management',
      'Subcontractor coordination',
      'Integrated project execution',
      'Progress monitoring',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
