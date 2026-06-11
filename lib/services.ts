export interface Service {
  id: string;
  title: string;
  titleAr?: string;
  slug: string;
  category: string;
  categoryAr?: string;
  description: string;
  descriptionAr?: string;
  fullDescription: string;
  fullDescriptionAr?: string;
  features: string[];
  featuresAr?: string[];
  image?: string;
}

export type Lang = "ar" | "en";

/** Return a copy of the service with text fields in the requested language. */
export function localizeService(s: Service, lang: Lang): Service {
  if (lang !== "ar") return s;
  return {
    ...s,
    title: s.titleAr ?? s.title,
    category: s.categoryAr ?? s.category,
    description: s.descriptionAr ?? s.description,
    fullDescription: s.fullDescriptionAr ?? s.fullDescription,
    features: s.featuresAr ?? s.features,
  };
}

export const services: Service[] = [
  {
    id: '0',
    title: 'Immersive Virtual Tours',
    titleAr: 'جولات افتراضية غامرة',
    slug: 'vr-real-estate',
    category: 'Innovation & Technology',
    categoryAr: 'الابتكار والتقنية',
    description: 'Experience your future space in immersive 3D virtual reality before construction begins.',
    descriptionAr: 'عِش مساحتك المستقبلية في واقع افتراضي ثلاثي الأبعاد غامر قبل بدء الإنشاء.',
    fullDescription: 'Step into your future home before it exists. Using cutting-edge VR technology, you can walk through your space, change wall colors, switch materials, adjust lighting, rearrange furniture, and see realistic results — all before construction begins. Make confident design decisions with complete visual clarity.',
    fullDescriptionAr: 'ادخل إلى منزلك المستقبلي قبل أن يُبنى. بفضل تقنية الواقع الافتراضي المتطورة، يمكنك التجوّل في مساحتك، وتغيير ألوان الجدران، وتبديل الخامات، وضبط الإضاءة، وإعادة ترتيب الأثاث، ورؤية نتائج واقعية — كل ذلك قبل بدء الإنشاء. اتخذ قراراتك التصميمية بثقة ووضوح بصري كامل.',
    features: [
      'Immersive VR walkthrough experience',
      'Real-time color and material customization',
      'Live furniture placement and layout changes',
      'Photorealistic lighting simulation',
      'Full spatial understanding before construction',
      'Confident decision-making process',
      'Eliminate costly changes during construction',
      'Experience multiple design options instantly',
    ],
    featuresAr: [
      'تجربة تجوّل غامرة بالواقع الافتراضي',
      'تخصيص الألوان والخامات لحظيًّا',
      'تغيير مواضع الأثاث والتوزيع مباشرةً',
      'محاكاة إضاءة واقعية',
      'فهم كامل للمساحة قبل الإنشاء',
      'اتخاذ القرارات بثقة',
      'تجنّب التعديلات المكلفة أثناء الإنشاء',
      'تجربة خيارات تصميم متعددة فورًا',
    ],
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80',
  },
  {
    id: '1',
    title: 'Architectural & Interior Design',
    titleAr: 'التصميم المعماري والداخلي',
    slug: 'architectural-interior-design',
    category: 'Design & Creative Services',
    categoryAr: 'خدمات التصميم والإبداع',
    description: 'Creating spaces that blend functionality with aesthetic excellence.',
    descriptionAr: 'نبتكر مساحات تجمع بين الوظيفة والتميّز الجمالي.',
    fullDescription: 'We develop innovative concepts and detailed 2D and 3D designs for residential, commercial, and administrative spaces, with our focus on improving flow, functionality, and aesthetic appeal.',
    fullDescriptionAr: 'نطوّر مفاهيم مبتكرة وتصاميم تفصيلية ثنائية وثلاثية الأبعاد للمساحات السكنية والتجارية والإدارية، مع تركيزنا على تحسين الانسيابية والوظيفة والجاذبية الجمالية.',
    features: [
      'Innovative concept development',
      'Detailed 2D and 3D designs',
      'Residential, commercial, and administrative spaces',
      'Flow and functionality optimization',
      'Aesthetic appeal enhancement',
      'Comprehensive design solutions',
    ],
    featuresAr: [
      'تطوير مفاهيم مبتكرة',
      'تصاميم تفصيلية ثنائية وثلاثية الأبعاد',
      'مساحات سكنية وتجارية وإدارية',
      'تحسين الانسيابية والوظيفة',
      'تعزيز الجاذبية الجمالية',
      'حلول تصميمية متكاملة',
    ],
  },
  {
    id: '2',
    title: 'Space Planning & Optimization',
    titleAr: 'تخطيط المساحات وتحسينها',
    slug: 'space-planning-optimization',
    category: 'Design & Creative Services',
    categoryAr: 'خدمات التصميم والإبداع',
    description: 'Strategic space planning to maximize functionality and flow.',
    descriptionAr: 'تخطيط استراتيجي للمساحات لتعظيم الوظيفة والانسيابية.',
    fullDescription: 'Strategic planning for space distribution aimed at achieving maximum utilization of every square meter and ensuring effective and comfortable work and living environments.',
    fullDescriptionAr: 'تخطيط استراتيجي لتوزيع المساحات يهدف إلى تحقيق أقصى استفادة من كل متر مربع وضمان بيئات عمل ومعيشة فعّالة ومريحة.',
    features: [
      'Strategic space distribution',
      'Maximum square meter utilization',
      'Effective work environments',
      'Comfortable living spaces',
      'Functional layout optimization',
      'Traffic flow analysis',
    ],
    featuresAr: [
      'توزيع استراتيجي للمساحات',
      'أقصى استفادة من كل متر مربع',
      'بيئات عمل فعّالة',
      'مساحات معيشة مريحة',
      'تحسين التوزيع الوظيفي',
      'تحليل حركة التنقّل',
    ],
  },
  {
    id: '3',
    title: 'Materials & Finishes Selection',
    titleAr: 'اختيار الخامات والتشطيبات',
    slug: 'materials-finishes-selection',
    category: 'Design & Creative Services',
    categoryAr: 'خدمات التصميم والإبداع',
    description: 'Professional consultation and sourcing of high-quality materials.',
    descriptionAr: 'استشارة احترافية وتوريد خامات عالية الجودة.',
    fullDescription: 'Professional consultation and supply of high-quality materials, finishes, lighting, and furniture that align with the design vision and specified budget.',
    fullDescriptionAr: 'استشارة احترافية وتوريد خامات وتشطيبات وإضاءة وأثاث عالية الجودة تتوافق مع رؤية التصميم والميزانية المحددة.',
    features: [
      'Professional consultation',
      'High-quality material sourcing',
      'Finish selection',
      'Lighting solutions',
      'Furniture selection',
      'Budget alignment',
    ],
    featuresAr: [
      'استشارة احترافية',
      'توريد خامات عالية الجودة',
      'اختيار التشطيبات',
      'حلول الإضاءة',
      'اختيار الأثاث',
      'التوافق مع الميزانية',
    ],
  },
  {
    id: '4',
    title: 'Custom Furniture Design',
    titleAr: 'تصميم أثاث مخصّص',
    slug: 'custom-furniture-design',
    category: 'Design & Creative Services',
    categoryAr: 'خدمات التصميم والإبداع',
    description: 'Unique furniture pieces designed specifically for your space.',
    descriptionAr: 'قطع أثاث فريدة مصمّمة خصيصًا لمساحتك.',
    fullDescription: 'Designing unique furniture pieces specifically tailored to fit your space and design requirements, adding a distinctive touch to interior details.',
    fullDescriptionAr: 'تصميم قطع أثاث فريدة مفصّلة خصيصًا لتناسب مساحتك ومتطلبات تصميمك، مضيفةً لمسة مميزة إلى تفاصيل التصميم الداخلي.',
    features: [
      'Unique furniture design',
      'Space-specific customization',
      'Design requirement alignment',
      'Distinctive interior details',
      'Custom fabrication',
      'Quality craftsmanship',
    ],
    featuresAr: [
      'تصميم أثاث فريد',
      'تخصيص يلائم المساحة',
      'التوافق مع متطلبات التصميم',
      'تفاصيل داخلية مميزة',
      'تصنيع حسب الطلب',
      'حِرفية عالية الجودة',
    ],
  },
  {
    id: '5',
    title: 'General Contracting & Construction',
    titleAr: 'المقاولات العامة والإنشاء',
    slug: 'general-contracting-construction',
    category: 'Execution & Construction Services',
    categoryAr: 'خدمات التنفيذ والإنشاء',
    description: 'Comprehensive construction services managed by experienced engineering teams.',
    descriptionAr: 'خدمات إنشاء متكاملة تديرها فرق هندسية ذات خبرة.',
    fullDescription: 'Integrated construction services including structural work, foundation work, and building structures, managed with high professionalism by our experienced engineering teams.',
    fullDescriptionAr: 'خدمات إنشاء متكاملة تشمل الأعمال الإنشائية وأعمال الأساسات وإنشاء الهياكل، تُدار باحترافية عالية بواسطة فرقنا الهندسية ذات الخبرة.',
    features: [
      'Integrated construction services',
      'Structural work',
      'Foundation work',
      'Building structures',
      'Professional project management',
      'Experienced engineering teams',
    ],
    featuresAr: [
      'خدمات إنشاء متكاملة',
      'أعمال إنشائية',
      'أعمال الأساسات',
      'إنشاء الهياكل',
      'إدارة احترافية للمشاريع',
      'فرق هندسية ذات خبرة',
    ],
  },
  {
    id: '6',
    title: 'Interior Fit-Out & Finishing Works',
    titleAr: 'التشطيبات والتجهيزات الداخلية',
    slug: 'interior-fit-out-finishing',
    category: 'Execution & Construction Services',
    categoryAr: 'خدمات التنفيذ والإنشاء',
    description: 'Complete interior and exterior fit-out services.',
    descriptionAr: 'خدمات تشطيب وتجهيز كاملة للمساحات الداخلية والخارجية.',
    fullDescription: 'Comprehensive services for interior and exterior fit-outs including all finishing work (mechanical, electrical, plumbing, tiling, painting, carpentry, and gypsum work) until complete project handover.',
    fullDescriptionAr: 'خدمات شاملة للتشطيبات والتجهيزات الداخلية والخارجية تشمل جميع أعمال التشطيب (الميكانيكا والكهرباء والسباكة والبلاط والدهان والنجارة وأعمال الجبس) حتى التسليم الكامل للمشروع.',
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
    featuresAr: [
      'تشطيبات داخلية وخارجية',
      'أعمال ميكانيكية',
      'تركيبات كهربائية',
      'أنظمة السباكة',
      'البلاط والأرضيات',
      'الدهان والتشطيبات',
      'النجارة والتجهيزات الخشبية',
      'أعمال الجبس',
      'تسليم كامل للمشروع',
    ],
  },
  {
    id: '7',
    title: 'Renovation & Redesign',
    titleAr: 'الترميم وإعادة التصميم',
    slug: 'renovation-redesign',
    category: 'Execution & Construction Services',
    categoryAr: 'خدمات التنفيذ والإنشاء',
    description: 'Comprehensive development and renovation services.',
    descriptionAr: 'خدمات شاملة للتطوير والترميم.',
    fullDescription: 'Comprehensive services for developing, renovating, and redesigning existing buildings and interior spaces in line with modern functional requirements and latest contemporary design trends.',
    fullDescriptionAr: 'خدمات شاملة لتطوير وترميم وإعادة تصميم المباني القائمة والمساحات الداخلية بما يتوافق مع المتطلبات الوظيفية الحديثة وأحدث اتجاهات التصميم المعاصرة.',
    features: [
      'Building development',
      'Renovation services',
      'Interior space redesign',
      'Modern functional requirements',
      'Contemporary design trends',
      'Structural assessment',
      'Modern upgrades',
    ],
    featuresAr: [
      'تطوير المباني',
      'خدمات الترميم',
      'إعادة تصميم المساحات الداخلية',
      'متطلبات وظيفية حديثة',
      'اتجاهات تصميم معاصرة',
      'تقييم إنشائي',
      'تحديثات عصرية',
    ],
  },
  {
    id: '8',
    title: 'Project Management & Supervision',
    titleAr: 'إدارة المشاريع والإشراف',
    slug: 'project-management',
    category: 'Execution & Construction Services',
    categoryAr: 'خدمات التنفيذ والإنشاء',
    description: 'Comprehensive management of all project phases.',
    descriptionAr: 'إدارة شاملة لجميع مراحل المشروع.',
    fullDescription: 'Comprehensive management of all project phases including timeline, budget, quality control, and safety on the work site, ensuring integrated coordination between all subcontractors for smooth and effective execution.',
    fullDescriptionAr: 'إدارة شاملة لجميع مراحل المشروع تشمل الجدول الزمني والميزانية وضبط الجودة والسلامة في موقع العمل، مع ضمان التنسيق المتكامل بين جميع مقاولي الباطن لتنفيذ سلس وفعّال.',
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
    featuresAr: [
      'إدارة الجدول الزمني',
      'ضبط الميزانية',
      'ضمان الجودة',
      'الإشراف على السلامة',
      'إدارة موقع العمل',
      'تنسيق مقاولي الباطن',
      'تنفيذ متكامل للمشروع',
      'متابعة سير العمل',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
