export type Lang = "ar" | "en";

export interface BlogSection {
  heading: string;
  headingAr: string;
  body: string[];
  bodyAr: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  category: string;
  categoryAr: string;
  author: string;
  authorAr: string;
  /** ISO date string */
  date: string;
  /** estimated reading time in minutes */
  readTime: number;
  image: string;
  keywords: string[];
  keywordsAr: string[];
  intro: string;
  introAr: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "interior-design-trends-saudi-arabia-2026",
    title: "Interior Design Trends Shaping Saudi Arabia in 2026",
    titleAr: "اتجاهات التصميم الداخلي التي تشكّل السعودية في 2026",
    excerpt:
      "From warm neutral palettes to majlis-inspired layouts, discover the interior design trends defining homes and businesses across Jeddah, Riyadh, and the Kingdom.",
    excerptAr:
      "من الألوان المحايدة الدافئة إلى تصاميم المجالس العصرية، اكتشف اتجاهات التصميم الداخلي التي تحدّد المنازل والأعمال في جدة والرياض والمملكة.",
    category: "Interior Design",
    categoryAr: "التصميم الداخلي",
    author: "Energize Design Studio",
    authorAr: "استوديو إنرجايز ديزاين",
    date: "2026-01-15",
    readTime: 7,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    keywords: [
      "interior design trends Saudi Arabia",
      "interior design Jeddah 2026",
      "modern majlis design",
      "luxury interior design Saudi",
      "home design Riyadh",
    ],
    keywordsAr: [
      "اتجاهات التصميم الداخلي السعودية",
      "تصميم داخلي جدة 2026",
      "تصميم مجلس عصري",
      "تصميم داخلي فاخر السعودية",
      "ديكور منازل الرياض",
    ],
    intro:
      "Saudi interiors are entering a confident new era. As the Kingdom invests in lifestyle, hospitality, and homegrown design talent, interiors are becoming warmer, more functional, and proudly local. Here are the trends our studio sees defining 2026.",
    introAr:
      "تدخل المساحات الداخلية في السعودية عصرًا جديدًا واثقًا. ومع استثمار المملكة في نمط الحياة والضيافة والمواهب التصميمية المحلية، أصبحت المساحات أكثر دفئًا ووظيفيةً واعتزازًا بالهوية المحلية. إليك الاتجاهات التي يراها استوديونا تحدّد عام 2026.",
    sections: [
      {
        heading: "Warm Neutrals and Earthy Saudi Tones",
        headingAr: "الألوان المحايدة الدافئة ودرجات الأرض السعودية",
        body: [
          "Cool greys are giving way to warm sand, terracotta, and desert-stone palettes that echo the natural landscape of the Kingdom. These tones create calm, grounded interiors that feel timeless rather than trend-driven.",
          "We pair these neutrals with natural materials — travertine, oak, brushed brass, and woven textures — to add depth without visual noise. The result is a refined backdrop that flatters both modern and traditional furnishings.",
        ],
        bodyAr: [
          "تتراجع الدرجات الرمادية الباردة لصالح ألوان الرمل الدافئ والطين والحجر الصحراوي التي تعكس الطبيعة الخلابة للمملكة. تخلق هذه الدرجات مساحات هادئة ومتزنة تبدو خالدة لا مجرد موضة عابرة.",
          "نمزج هذه الألوان المحايدة مع خامات طبيعية — الترافرتين والبلوط والنحاس المصقول والخامات المنسوجة — لإضافة عمق دون ضجيج بصري. والنتيجة خلفية راقية تليق بالأثاث العصري والتقليدي معًا.",
        ],
      },
      {
        heading: "The Reimagined Majlis",
        headingAr: "المجلس بحُلّة جديدة",
        body: [
          "The majlis remains the heart of the Saudi home, but its design is evolving. Clients want spaces that honour tradition and generous hospitality while feeling contemporary — lower, cleaner seating, integrated lighting, and discreet technology.",
          "We design majlis areas with flexible layouts that can host large family gatherings yet still feel intimate day-to-day, balancing privacy for guests with seamless flow to the rest of the home.",
        ],
        bodyAr: [
          "يظل المجلس قلب المنزل السعودي، لكن تصميمه يتطوّر. يرغب العملاء في مساحات تحترم التقاليد وكرم الضيافة مع لمسة عصرية — جلسات أكثر انخفاضًا ونقاءً، وإضاءة مدمجة، وتقنية خفية.",
          "نصمّم المجالس بتوزيعات مرنة تستوعب التجمعات العائلية الكبيرة وتبقى حميمية في الاستخدام اليومي، موازنين بين خصوصية الضيوف والانسيابية مع باقي أرجاء المنزل.",
        ],
      },
      {
        heading: "Function-First Luxury",
        headingAr: "فخامة تبدأ بالوظيفة",
        body: [
          "Luxury in 2026 is quiet and practical. Hidden storage, smart climate control, and durable finishes that withstand the Saudi climate matter as much as marble and gold accents.",
          "Our approach is to let function lead, then layer in materials and craftsmanship that elevate the everyday experience rather than just impressing on first glance.",
        ],
        bodyAr: [
          "الفخامة في 2026 هادئة وعملية. فالتخزين المخفي والتحكّم الذكي بالمناخ والتشطيبات المتينة التي تتحمّل المناخ السعودي لا تقل أهمية عن الرخام واللمسات الذهبية.",
          "نهجنا أن تقود الوظيفة أولًا، ثم نضيف الخامات والحِرفية التي ترتقي بالتجربة اليومية بدلًا من إبهار النظرة الأولى فقط.",
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "vision-2030-reshaping-construction-real-estate",
    title: "How Vision 2030 Is Reshaping Construction and Real Estate",
    titleAr: "كيف تعيد رؤية 2030 تشكيل قطاع الإنشاء والعقار",
    excerpt:
      "Saudi Vision 2030 is driving the largest construction boom in the Kingdom's history. Here's what it means for developers, homeowners, and design standards.",
    excerptAr:
      "تقود رؤية السعودية 2030 أكبر طفرة إنشائية في تاريخ المملكة. إليك ما يعنيه ذلك للمطوّرين وملّاك المنازل ومعايير التصميم.",
    category: "Saudi Market",
    categoryAr: "السوق السعودي",
    author: "Energize Design Studio",
    authorAr: "استوديو إنرجايز ديزاين",
    date: "2026-02-03",
    readTime: 8,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    keywords: [
      "Vision 2030 construction",
      "Saudi Arabia real estate 2030",
      "construction boom Saudi",
      "giga projects Saudi Arabia",
      "real estate development Jeddah",
    ],
    keywordsAr: [
      "رؤية 2030 الإنشاء",
      "عقارات السعودية 2030",
      "طفرة الإنشاء السعودية",
      "المشاريع الكبرى السعودية",
      "تطوير عقاري جدة",
    ],
    intro:
      "Vision 2030 has placed the built environment at the centre of Saudi Arabia's transformation. Giga-projects, new housing programmes, and rising quality expectations are redefining how the Kingdom designs and builds.",
    introAr:
      "وضعت رؤية 2030 البيئة العمرانية في قلب التحوّل السعودي. فالمشاريع الكبرى وبرامج الإسكان الجديدة وارتفاع سقف توقعات الجودة تعيد تعريف كيفية تصميم المملكة وبنائها.",
    sections: [
      {
        heading: "A Generational Construction Boom",
        headingAr: "طفرة إنشائية لجيل كامل",
        body: [
          "From giga-projects to the Sakani housing programme aiming to raise home ownership, demand for design and construction services has never been higher. This scale rewards firms that combine speed with genuine quality control.",
          "For homeowners and businesses, it means more options — but also a need to choose partners who understand both international standards and local context.",
        ],
        bodyAr: [
          "من المشاريع الكبرى إلى برنامج سكني الذي يستهدف رفع نسبة تملّك المساكن، لم يكن الطلب على خدمات التصميم والإنشاء أعلى من ذلك يومًا. وهذا الحجم يكافئ الشركات التي تجمع بين السرعة والرقابة الحقيقية على الجودة.",
          "وبالنسبة لملّاك المنازل والأعمال، يعني ذلك خيارات أكثر — لكنه يستلزم أيضًا اختيار شركاء يفهمون المعايير العالمية والسياق المحلي معًا.",
        ],
      },
      {
        heading: "Rising Quality and Sustainability Standards",
        headingAr: "ارتفاع معايير الجودة والاستدامة",
        body: [
          "The Saudi Building Code and a growing focus on energy efficiency are pushing the entire industry toward better materials, smarter systems, and lower long-term operating costs.",
          "We design with the local climate in mind — thermal performance, shading, and durable finishes — so projects look excellent on day one and remain efficient for decades.",
        ],
        bodyAr: [
          "يدفع كود البناء السعودي والاهتمام المتنامي بكفاءة الطاقة القطاع بأكمله نحو خامات أفضل وأنظمة أذكى وتكاليف تشغيل أقل على المدى الطويل.",
          "نصمّم آخذين المناخ المحلي بالحسبان — الأداء الحراري والتظليل والتشطيبات المتينة — لتبدو المشاريع رائعة من اليوم الأول وتبقى كفؤة لعقود.",
        ],
      },
      {
        heading: "Hospitality-Grade Expectations Everywhere",
        headingAr: "توقعات بمستوى الضيافة في كل مكان",
        body: [
          "As tourism and entertainment expand, clients now expect hospitality-level finishes in offices, retail, and even private homes. The bar for detailing, lighting, and material quality has risen across every sector.",
          "Our role is to translate that ambition into buildable, on-budget projects without compromising the experience.",
        ],
        bodyAr: [
          "مع توسّع السياحة والترفيه، أصبح العملاء يتوقعون تشطيبات بمستوى الضيافة في المكاتب ومحلات التجزئة وحتى المنازل الخاصة. فقد ارتفع سقف التفاصيل والإضاءة وجودة الخامات في كل قطاع.",
          "ودورنا أن نترجم هذا الطموح إلى مشاريع قابلة للتنفيذ وضمن الميزانية دون التفريط في التجربة.",
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "vr-virtual-tours-saudi-real-estate",
    title: "Why VR Virtual Tours Are Transforming Saudi Real Estate",
    titleAr: "لماذا تُحدث الجولات الافتراضية VR ثورة في العقار السعودي",
    excerpt:
      "Walk through your future home before a single brick is laid. Here's how immersive VR tours reduce costly changes and build buyer confidence in Saudi Arabia.",
    excerptAr:
      "تجوّل في منزلك المستقبلي قبل وضع أول طوبة. إليك كيف تقلّل الجولات الافتراضية الغامرة التعديلات المكلفة وتعزّز ثقة المشتري في السعودية.",
    category: "Innovation",
    categoryAr: "الابتكار",
    author: "Energize Design Studio",
    authorAr: "استوديو إنرجايز ديزاين",
    date: "2026-02-20",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=1200&q=80",
    keywords: [
      "VR virtual tours Saudi Arabia",
      "3D home visualization Jeddah",
      "virtual reality interior design",
      "real estate VR Saudi",
      "off-plan property visualization",
    ],
    keywordsAr: [
      "جولات افتراضية السعودية",
      "تصور ثلاثي الأبعاد جدة",
      "الواقع الافتراضي التصميم الداخلي",
      "عقارات الواقع الافتراضي السعودية",
      "تصور العقارات على الخارطة",
    ],
    intro:
      "Buying off-plan or renovating is a leap of faith — unless you can experience the space first. VR virtual tours let clients in Saudi Arabia walk through their design, change materials live, and approve every detail with confidence.",
    introAr:
      "الشراء على الخارطة أو الترميم قفزة في المجهول — إلا إذا استطعت أن تعيش المساحة أولًا. تتيح الجولات الافتراضية للعملاء في السعودية التجوّل في تصميمهم وتغيير الخامات مباشرةً واعتماد كل تفصيلة بثقة.",
    sections: [
      {
        heading: "See Before You Build",
        headingAr: "شاهد قبل أن تبني",
        body: [
          "Floor plans and renders only go so far. With VR, clients put on a headset and truly understand scale, flow, and light. This is especially powerful for off-plan properties common in the Saudi market.",
          "When people experience a space in VR, decisions become faster and far more confident.",
        ],
        bodyAr: [
          "المخططات والصور التوضيحية لها حدود. ومع الواقع الافتراضي، يرتدي العميل النظارة ويفهم حقًّا المقياس والانسيابية والإضاءة. وهذا فعّال بشكل خاص للعقارات على الخارطة الشائعة في السوق السعودي.",
          "عندما يعيش الناس المساحة في الواقع الافتراضي، تصبح القرارات أسرع وأكثر ثقة بكثير.",
        ],
      },
      {
        heading: "Eliminate Costly Changes",
        headingAr: "تجنّب التعديلات المكلفة",
        body: [
          "Changing a wall colour in VR is free. Changing it after construction is expensive. By approving materials, layouts, and lighting virtually, clients avoid the rework that inflates budgets and timelines.",
          "This is one of the highest-return decisions a client can make before breaking ground.",
        ],
        bodyAr: [
          "تغيير لون الجدار في الواقع الافتراضي مجاني، أما تغييره بعد الإنشاء فمكلف. فباعتماد الخامات والتوزيعات والإضاءة افتراضيًا، يتجنّب العملاء إعادة العمل التي تضخّم الميزانيات والجداول الزمنية.",
          "وهذا أحد أعلى القرارات عائدًا يمكن للعميل اتخاذه قبل بدء التنفيذ.",
        ],
      },
      {
        heading: "Customize in Real Time",
        headingAr: "خصّص لحظيًّا",
        body: [
          "Swap marble for wood, adjust lighting from warm to cool, and rearrange furniture — all instantly. Clients explore multiple design directions in a single session and lock in the one that feels right.",
          "It turns design from a guessing game into a shared, interactive experience.",
        ],
        bodyAr: [
          "استبدل الرخام بالخشب، واضبط الإضاءة من الدافئة إلى الباردة، وأعد ترتيب الأثاث — كل ذلك فورًا. يستكشف العملاء اتجاهات تصميمية متعددة في جلسة واحدة ويختارون ما يناسبهم.",
          "إنها تحوّل التصميم من لعبة تخمين إلى تجربة تفاعلية مشتركة.",
        ],
      },
    ],
  },
  {
    id: "4",
    slug: "choosing-materials-finishes-saudi-climate",
    title: "Choosing Materials and Finishes That Last in the Saudi Climate",
    titleAr: "اختيار الخامات والتشطيبات التي تدوم في المناخ السعودي",
    excerpt:
      "Heat, humidity, and dust are tough on interiors. Learn how to select materials and finishes that stay beautiful and durable across the Kingdom's climate.",
    excerptAr:
      "الحرارة والرطوبة والغبار تحديات قاسية على المساحات الداخلية. تعرّف على كيفية اختيار خامات وتشطيبات تبقى جميلة ومتينة في مناخ المملكة.",
    category: "Construction",
    categoryAr: "الإنشاء",
    author: "Energize Design Studio",
    authorAr: "استوديو إنرجايز ديزاين",
    date: "2026-03-10",
    readTime: 7,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    keywords: [
      "durable materials Saudi climate",
      "interior finishes Jeddah",
      "best flooring hot climate",
      "humidity resistant materials",
      "construction materials Saudi Arabia",
    ],
    keywordsAr: [
      "خامات متينة المناخ السعودي",
      "تشطيبات داخلية جدة",
      "أفضل أرضيات المناخ الحار",
      "خامات مقاومة للرطوبة",
      "مواد البناء السعودية",
    ],
    intro:
      "A finish that looks stunning in the showroom can fail within a year if it isn't suited to the local climate. From coastal humidity in Jeddah to desert heat inland, material selection is a science as much as an art.",
    introAr:
      "قد يبدو التشطيب مبهرًا في المعرض لكنه يفشل خلال عام إن لم يكن ملائمًا للمناخ المحلي. فمن رطوبة الساحل في جدة إلى حرارة الصحراء في الداخل، يُعد اختيار الخامات علمًا بقدر ما هو فن.",
    sections: [
      {
        heading: "Account for Heat and Sun Exposure",
        headingAr: "احسب حساب الحرارة والتعرّض للشمس",
        body: [
          "Direct sunlight fades fabrics, warps some woods, and stresses adhesives. We specify UV-stable finishes, engineered surfaces, and appropriate shading so interiors keep their colour and integrity.",
          "Choosing the right material upfront saves expensive replacements later.",
        ],
        bodyAr: [
          "تُبهت أشعة الشمس المباشرة الأقمشة، وتُشوّه بعض الأخشاب، وتُجهد المواد اللاصقة. لذا نختار تشطيبات ثابتة ضد الأشعة فوق البنفسجية، وأسطحًا هندسية، وتظليلًا مناسبًا لتحافظ المساحات على لونها وسلامتها.",
          "اختيار الخامة الصحيحة منذ البداية يوفّر استبدالات مكلفة لاحقًا.",
        ],
      },
      {
        heading: "Coastal Humidity in Jeddah",
        headingAr: "رطوبة الساحل في جدة",
        body: [
          "In humid coastal cities, moisture-resistant materials and proper ventilation are essential to prevent warping, mould, and corrosion. Porcelain, treated wood, and quality sealants outperform cheaper alternatives.",
          "Detailing matters as much as the material — sealed joints and good airflow protect the investment.",
        ],
        bodyAr: [
          "في المدن الساحلية الرطبة، تُعد الخامات المقاومة للرطوبة والتهوية الجيدة ضرورية لمنع التشوّه والعفن والتآكل. فالبورسلين والخشب المعالج والمواد العازلة عالية الجودة تتفوّق على البدائل الأرخص.",
          "والتفاصيل لا تقل أهمية عن الخامة — فالفواصل المحكمة وتدفّق الهواء الجيد يحميان الاستثمار.",
        ],
      },
      {
        heading: "Balancing Beauty, Budget, and Maintenance",
        headingAr: "الموازنة بين الجمال والميزانية والصيانة",
        body: [
          "The best material is the one that fits your aesthetic, your budget, and your tolerance for upkeep. We help clients weigh these trade-offs honestly, recommending finishes that stay beautiful with realistic maintenance.",
          "Sometimes a smart engineered surface outperforms natural stone for a fraction of the lifetime cost.",
        ],
        bodyAr: [
          "أفضل خامة هي التي تناسب ذوقك وميزانيتك وقدرتك على الصيانة. ونحن نساعد العملاء على الموازنة بين هذه العوامل بصدق، فنوصي بتشطيبات تبقى جميلة بصيانة واقعية.",
          "وأحيانًا يتفوّق سطح هندسي ذكي على الحجر الطبيعي بجزء بسيط من التكلفة على مدى العمر.",
        ],
      },
    ],
  },
  {
    id: "5",
    slug: "commercial-office-fit-out-jeddah",
    title: "A Practical Guide to Commercial and Office Fit-Out in Jeddah",
    titleAr: "دليل عملي لتجهيز المساحات التجارية والمكاتب في جدة",
    excerpt:
      "A well-designed workspace boosts productivity and brand image. Here's what businesses in Jeddah should know before starting a fit-out project.",
    excerptAr:
      "مساحة العمل المصممة جيدًا تعزّز الإنتاجية وصورة العلامة التجارية. إليك ما يجب أن تعرفه الأعمال في جدة قبل بدء مشروع تجهيز.",
    category: "Commercial Design",
    categoryAr: "التصميم التجاري",
    author: "Energize Design Studio",
    authorAr: "استوديو إنرجايز ديزاين",
    date: "2026-03-28",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    keywords: [
      "office fit-out Jeddah",
      "commercial interior design Saudi",
      "workspace design Jeddah",
      "retail fit-out Saudi Arabia",
      "office renovation Jeddah",
    ],
    keywordsAr: [
      "تجهيز مكاتب جدة",
      "تصميم داخلي تجاري السعودية",
      "تصميم مساحات عمل جدة",
      "تجهيز محلات السعودية",
      "ترميم مكاتب جدة",
    ],
    intro:
      "Whether you're opening a flagship retail store or refreshing your headquarters, a commercial fit-out is a strategic investment. Done right, it strengthens your brand and your team's performance.",
    introAr:
      "سواء كنت تفتتح متجرًا رئيسيًا أو تجدّد مقرك، فإن تجهيز المساحة التجارية استثمار استراتيجي. وعندما يُنفَّذ بإتقان، يعزّز علامتك التجارية وأداء فريقك.",
    sections: [
      {
        heading: "Start With How the Space Will Be Used",
        headingAr: "ابدأ بكيفية استخدام المساحة",
        body: [
          "Great commercial design begins with workflow, customer journey, and brand experience — not just aesthetics. We map how people move and work before drawing a single wall.",
          "This functional foundation prevents costly redesigns and ensures the space actually performs.",
        ],
        bodyAr: [
          "يبدأ التصميم التجاري الجيد بمسار العمل ورحلة العميل وتجربة العلامة — لا بالجماليات وحدها. فنحن نرسم كيف يتحرّك الناس ويعملون قبل رسم أي جدار.",
          "وهذا الأساس الوظيفي يمنع إعادة التصميم المكلفة ويضمن أن المساحة تؤدي دورها فعليًّا.",
        ],
      },
      {
        heading: "Brand Identity in Every Detail",
        headingAr: "هوية العلامة في كل تفصيلة",
        body: [
          "Materials, lighting, and spatial flow should all express your brand. A consistent identity across the space builds trust with customers and pride within your team.",
          "We translate brand guidelines into tangible, three-dimensional experiences.",
        ],
        bodyAr: [
          "ينبغي أن تعبّر الخامات والإضاءة وانسيابية المساحة جميعها عن علامتك. فالهوية المتسقة في أنحاء المكان تبني ثقة العملاء واعتزاز الفريق.",
          "ونحن نترجم دليل الهوية إلى تجارب ملموسة ثلاثية الأبعاد.",
        ],
      },
      {
        heading: "Permits, Timelines, and Handover",
        headingAr: "التصاريح والجداول الزمنية والتسليم",
        body: [
          "Commercial projects involve municipal approvals, MEP coordination, and strict timelines. A single experienced partner managing design and execution reduces risk and keeps the project on schedule.",
          "We handle the full journey to complete handover, so you can focus on running your business.",
        ],
        bodyAr: [
          "تتضمّن المشاريع التجارية موافقات البلدية وتنسيق الأعمال الكهروميكانيكية وجداول زمنية صارمة. ووجود شريك واحد ذي خبرة يدير التصميم والتنفيذ يقلّل المخاطر ويبقي المشروع في موعده.",
          "ونحن ندير الرحلة كاملة حتى التسليم النهائي، لتتفرّغ أنت لإدارة أعمالك.",
        ],
      },
    ],
  },
  {
    id: "6",
    slug: "modern-saudi-heritage-contemporary-design",
    title: "Blending Modern Saudi Heritage With Contemporary Design",
    titleAr: "دمج التراث السعودي الحديث مع التصميم المعاصر",
    excerpt:
      "Authentic, rooted, and forward-looking — discover how to weave Saudi heritage into contemporary interiors without falling into cliché.",
    excerptAr:
      "أصيل ومتجذّر وتطلّعي — اكتشف كيف تنسج التراث السعودي في المساحات المعاصرة دون الوقوع في النمطية.",
    category: "Design Philosophy",
    categoryAr: "فلسفة التصميم",
    author: "Energize Design Studio",
    authorAr: "استوديو إنرجايز ديزاين",
    date: "2026-04-12",
    readTime: 7,
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
    keywords: [
      "Saudi heritage interior design",
      "modern Arabic interior design",
      "contemporary Saudi design",
      "Najdi design modern",
      "cultural interior design Saudi",
    ],
    keywordsAr: [
      "تصميم داخلي تراث سعودي",
      "تصميم داخلي عربي حديث",
      "تصميم سعودي معاصر",
      "تصميم نجدي حديث",
      "تصميم داخلي ثقافي السعودية",
    ],
    intro:
      "The most compelling Saudi interiors feel both modern and unmistakably local. The challenge is honouring heritage — Najdi geometry, regional craft, generous hospitality — without turning it into decoration.",
    introAr:
      "أكثر المساحات السعودية تأثيرًا هي التي تبدو عصرية ومحلية بوضوح في آن واحد. والتحدي يكمن في تكريم التراث — الزخارف النجدية والحِرف الإقليمية وكرم الضيافة — دون تحويله إلى مجرد زينة.",
    sections: [
      {
        heading: "Reinterpret, Don't Replicate",
        headingAr: "أعد التأويل ولا تنسخ",
        body: [
          "Instead of copying traditional motifs literally, we abstract them — translating Najdi geometry into modern screens, or regional palettes into subtle accents. The reference feels intentional, not nostalgic.",
          "This keeps the design rooted yet fresh, and avoids the theme-park effect.",
        ],
        bodyAr: [
          "بدلًا من نسخ الزخارف التقليدية حرفيًّا، نُجرّدها — فنترجم الهندسة النجدية إلى مشربيات حديثة، أو الألوان الإقليمية إلى لمسات خفية. فيبدو المرجع مقصودًا لا حنينيًّا.",
          "وهذا يبقي التصميم متجذّرًا ومتجددًا، ويتجنّب أثر «المدينة الترفيهية» المصطنع.",
        ],
      },
      {
        heading: "Celebrate Local Craft and Materials",
        headingAr: "احتفِ بالحِرف والخامات المحلية",
        body: [
          "Working with regional artisans and materials adds authenticity that imported finishes can't replicate. Handcrafted detailing also supports local talent — a value increasingly important in the Kingdom.",
          "These pieces become the soul of a space and a story worth telling.",
        ],
        bodyAr: [
          "العمل مع الحِرفيين والخامات الإقليمية يضيف أصالةً يعجز عن منحها أي تشطيب مستورد. كما أن التفاصيل المصنوعة يدويًّا تدعم المواهب المحلية — وهي قيمة تتزايد أهميتها في المملكة.",
          "فتغدو هذه القطع روح المكان وحكايةً تستحق أن تُروى.",
        ],
      },
      {
        heading: "Hospitality at the Core",
        headingAr: "الضيافة في الجوهر",
        body: [
          "Saudi design is inseparable from hospitality. Layouts that welcome guests, accommodate gatherings, and balance privacy are cultural essentials, not afterthoughts.",
          "We design spaces that feel generous and gracious — the truest expression of local identity.",
        ],
        bodyAr: [
          "لا ينفصل التصميم السعودي عن الضيافة. فالتوزيعات التي ترحّب بالضيوف وتستوعب التجمعات وتوازن الخصوصية ضرورات ثقافية لا تفاصيل ثانوية.",
          "ونحن نصمّم مساحات تشعر بالكرم والرحابة — وهي أصدق تعبير عن الهوية المحلية.",
        ],
      },
    ],
  },
];

export function localizeBlogPost(post: BlogPost, lang: Lang): BlogPost {
  if (lang !== "ar") return post;
  return {
    ...post,
    title: post.titleAr,
    excerpt: post.excerptAr,
    category: post.categoryAr,
    author: post.authorAr,
    intro: post.introAr,
    keywords: post.keywordsAr,
    sections: post.sections.map((s) => ({
      ...s,
      heading: s.headingAr,
      body: s.bodyAr,
    })),
  };
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

/** Categories present in the data, with bilingual labels. */
export function getBlogCategories(lang: Lang): { en: string; label: string }[] {
  const seen = new Map<string, string>();
  for (const p of blogPosts) {
    if (!seen.has(p.category)) {
      seen.set(p.category, lang === "ar" ? p.categoryAr : p.category);
    }
  }
  return Array.from(seen.entries()).map(([en, label]) => ({ en, label }));
}
