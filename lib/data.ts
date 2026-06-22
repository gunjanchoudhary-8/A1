import type {
  CategoryView,
  HeroSlideView,
  ProductView,
  ProjectView,
  ServiceView,
  SiteSettings,
  TestimonialView,
} from "@/types";

/**
 * Fallback content shown when Sanity is not configured, or a query returns
 * no documents. Lets the site render fully out of the box, and gives content
 * editors a starting point to replace via Studio.
 */

export const fallbackHeroSlides: HeroSlideView[] = [
  {
    _id: "fallback-hero-1",
    title: "Bring Nature Indoors",
    subtitle:
      "Premium indoor plants and botanical solutions for homes and workspaces.",
    image: {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2400&auto=format&fit=crop",
      alt: "Bright living room filled with lush indoor plants",
    },
    buttonText: "Explore Indoor Plants",
    buttonLink: "/#collections",
  },
  {
    _id: "fallback-hero-2",
    title: "Landscapes That Inspire",
    subtitle: "Beautiful outdoor spaces designed for modern living.",
    image: {
      src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2400&auto=format&fit=crop",
      alt: "Manicured garden landscape with green lawns and pathways",
    },
    buttonText: "View Our Projects",
    buttonLink: "/#projects",
  },
  {
    _id: "fallback-hero-3",
    title: "Corporate Gifting Made Green",
    subtitle: "Memorable plant gifting experiences for businesses.",
    image: {
      src: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=2400&auto=format&fit=crop",
      alt: "Elegant potted plant arranged as a corporate gift on a desk",
    },
    buttonText: "Get a Quote",
    buttonLink: "/#contact",
  },
];

export const fallbackServices: ServiceView[] = [
  {
    _id: "fallback-service-1",
    title: "Corporate Gifting",
    description:
      "Curated plant gifts and botanical hampers that leave a lasting impression on clients and teams.",
    image: {
      src: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1600&auto=format&fit=crop",
      alt: "Elegantly wrapped plant gift box",
    },
  },
  {
    _id: "fallback-service-2",
    title: "Indoor Plants",
    description:
      "Air-purifying, low-maintenance indoor plants selected to suit your space and light conditions.",
    image: {
      src: "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=1600&auto=format&fit=crop",
      alt: "Collection of potted indoor plants",
    },
  },
  {
    _id: "fallback-service-3",
    title: "Outdoor Plants",
    description:
      "Hardy, season-appropriate outdoor varieties to bring colour and life to gardens and balconies.",
    image: {
      src: "https://images.unsplash.com/photo-1502394202744-021cfbb17454?q=80&w=1600&auto=format&fit=crop",
      alt: "Rows of outdoor potted plants",
    },
  },
  {
    _id: "fallback-service-4",
    title: "Landscaping",
    description:
      "End-to-end landscape design and execution for homes, offices and commercial properties.",
    image: {
      src: "https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=1600&auto=format&fit=crop",
      alt: "Professionally landscaped garden with pathway",
    },
  },
  {
    _id: "fallback-service-5",
    title: "Vertical Gardens",
    description:
      "Living green walls engineered for visual impact and air quality in tight urban spaces.",
    image: {
      src: "https://images.unsplash.com/photo-1530968033775-2c92736b131e?q=80&w=1600&auto=format&fit=crop",
      alt: "Lush vertical garden green wall",
    },
  },
  {
    _id: "fallback-service-6",
    title: "Decorative Trays",
    description:
      "Handcrafted decorative trays and planters that elevate tables, counters and reception areas.",
    image: {
      src: "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?q=80&w=1600&auto=format&fit=crop",
      alt: "Decorative tray styled with succulents and candles",
    },
  },
  {
    _id: "fallback-service-7",
    title: "Floral Arrangements",
    description:
      "Fresh, seasonal floral arrangements designed for events, offices and special occasions.",
    image: {
      src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1600&auto=format&fit=crop",
      alt: "Elegant floral bouquet arrangement",
    },
  },
];

export const fallbackCategories: CategoryView[] = [
  {
    _id: "fallback-category-1",
    name: "Indoor Plants",
    slug: "indoor-plants",
    description: "Curated greenery for homes, offices and studios.",
    image: {
      src: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1600&auto=format&fit=crop",
      alt: "Indoor plant collection near a sunny window",
    },
  },
  {
    _id: "fallback-category-2",
    name: "Outdoor Plants",
    slug: "outdoor-plants",
    description: "Resilient varieties for gardens, terraces and balconies.",
    image: {
      src: "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=1600&auto=format&fit=crop",
      alt: "Outdoor garden with potted plants",
    },
  },
  {
    _id: "fallback-category-3",
    name: "Flowering Plants",
    slug: "flowering-plants",
    description: "Seasonal blooms that add colour to any setting.",
    image: {
      src: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&w=1600&auto=format&fit=crop",
      alt: "Vibrant flowering plants in bloom",
    },
  },
  {
    _id: "fallback-category-4",
    name: "Succulents",
    slug: "succulents",
    description: "Compact, low-maintenance succulents and cacti.",
    image: {
      src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1600&auto=format&fit=crop",
      alt: "Assortment of succulents in small pots",
    },
  },
  {
    _id: "fallback-category-5",
    name: "Corporate Gifts",
    slug: "corporate-gifts",
    description: "Premium botanical gifting for clients and teams.",
    image: {
      src: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1600&auto=format&fit=crop",
      alt: "Plant gift wrapped for corporate gifting",
    },
  },
  {
    _id: "fallback-category-6",
    name: "Decorative Trays",
    slug: "decorative-trays",
    description: "Styled trays and planters for elegant interiors.",
    image: {
      src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
      alt: "Decorative tray with plants and candles styled on a table",
    },
  },
];

export const fallbackProducts: ProductView[] = [
  {
    _id: "fallback-product-1",
    name: "Fiddle Leaf Fig",
    slug: "fiddle-leaf-fig",
    category: { name: "Indoor Plants", slug: "indoor-plants" },
    images: [
      {
        src: "https://images.unsplash.com/photo-1597055181300-e3633a917c0e?q=80&w=1600&auto=format&fit=crop",
        alt: "Fiddle leaf fig in a woven basket planter",
      },
      {
        src: "https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?q=80&w=1600&auto=format&fit=crop",
        alt: "Close-up of fiddle leaf fig foliage",
      },
    ],
    shortDescription:
      "A sculptural statement plant with large, glossy violin-shaped leaves.",
    description:
      "The Fiddle Leaf Fig (Ficus lyrata) is a designer favourite, prized for its tall silhouette and dramatic foliage. It thrives in bright, indirect light and brings instant architectural impact to living rooms, lobbies and studios.",
    specifications: [
      { label: "Light", value: "Bright, indirect" },
      { label: "Water", value: "Weekly, when topsoil is dry" },
      { label: "Mature height", value: "1.5 – 2.5 m" },
      { label: "Pet friendly", value: "No" },
      { label: "Care level", value: "Moderate" },
    ],
    availabilityLabel: "In stock",
    featured: true,
  },
  {
    _id: "fallback-product-2",
    name: "Snake Plant",
    slug: "snake-plant",
    category: { name: "Indoor Plants", slug: "indoor-plants" },
    images: [
      {
        src: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?q=80&w=1600&auto=format&fit=crop",
        alt: "Snake plant with upright variegated leaves",
      },
    ],
    shortDescription:
      "Near-indestructible air-purifier that tolerates low light and neglect.",
    description:
      "The Snake Plant (Sansevieria) is one of the toughest, most forgiving houseplants you can own. Its upright, sword-like leaves filter indoor air and look striking in modern interiors — perfect for beginners and busy spaces.",
    specifications: [
      { label: "Light", value: "Low to bright, indirect" },
      { label: "Water", value: "Every 2 – 3 weeks" },
      { label: "Mature height", value: "0.6 – 1 m" },
      { label: "Pet friendly", value: "No" },
      { label: "Care level", value: "Easy" },
    ],
    availabilityLabel: "In stock",
    featured: true,
  },
  {
    _id: "fallback-product-3",
    name: "Areca Palm",
    slug: "areca-palm",
    category: { name: "Outdoor Plants", slug: "outdoor-plants" },
    images: [
      {
        src: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?q=80&w=1600&auto=format&fit=crop",
        alt: "Areca palm with arching green fronds",
      },
    ],
    shortDescription:
      "Lush, feathery palm that adds a tropical feel to balconies and patios.",
    description:
      "The Areca Palm is a fast-growing, clumping palm with graceful arching fronds. It loves bright spots and humidity, making it ideal for terraces, courtyards and shaded outdoor corners.",
    specifications: [
      { label: "Light", value: "Bright, filtered sun" },
      { label: "Water", value: "Keep soil lightly moist" },
      { label: "Mature height", value: "2 – 3 m" },
      { label: "Pet friendly", value: "Yes" },
      { label: "Care level", value: "Moderate" },
    ],
    availabilityLabel: "In stock",
    featured: false,
  },
  {
    _id: "fallback-product-4",
    name: "Bougainvillea",
    slug: "bougainvillea",
    category: { name: "Flowering Plants", slug: "flowering-plants" },
    images: [
      {
        src: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=1600&auto=format&fit=crop",
        alt: "Vibrant pink bougainvillea in bloom",
      },
    ],
    shortDescription:
      "Vigorous climber that explodes with colour through the warm months.",
    description:
      "Bougainvillea is a hardy, sun-loving climber famous for its papery bracts in shades of magenta, orange and white. Train it over walls, arches and fences for a cascade of seasonal colour.",
    specifications: [
      { label: "Light", value: "Full sun" },
      { label: "Water", value: "Moderate; drought tolerant once established" },
      { label: "Mature height", value: "Up to 6 m (climbing)" },
      { label: "Bloom season", value: "Spring to autumn" },
      { label: "Care level", value: "Easy" },
    ],
    availabilityLabel: "Seasonal",
    featured: false,
  },
  {
    _id: "fallback-product-5",
    name: "Echeveria Succulent",
    slug: "echeveria-succulent",
    category: { name: "Succulents", slug: "succulents" },
    images: [
      {
        src: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1600&auto=format&fit=crop",
        alt: "Rosette-shaped echeveria succulent",
      },
    ],
    shortDescription:
      "Compact rosette succulent, perfect for desks, sills and gifting.",
    description:
      "Echeverias form tidy, symmetrical rosettes in soft greens, blues and pinks. They need very little water and look beautiful grouped in small pots or decorative trays.",
    specifications: [
      { label: "Light", value: "Bright, direct" },
      { label: "Water", value: "Every 2 – 3 weeks" },
      { label: "Mature size", value: "10 – 20 cm" },
      { label: "Pet friendly", value: "Yes" },
      { label: "Care level", value: "Easy" },
    ],
    availabilityLabel: "In stock",
    featured: true,
  },
  {
    _id: "fallback-product-6",
    name: "Money Plant Gift Box",
    slug: "money-plant-gift-box",
    category: { name: "Corporate Gifts", slug: "corporate-gifts" },
    images: [
      {
        src: "https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?q=80&w=1600&auto=format&fit=crop",
        alt: "Money plant styled in a premium gift box",
      },
    ],
    shortDescription:
      "Premium boxed money plant — a thoughtful, low-maintenance corporate gift.",
    description:
      "A curated gifting set pairing an easy-care money plant (Pothos) with a premium ceramic planter and branded packaging. A memorable, green alternative to conventional corporate gifts.",
    specifications: [
      { label: "Light", value: "Low to bright, indirect" },
      { label: "Water", value: "Weekly" },
      { label: "Includes", value: "Plant, ceramic planter, gift box" },
      { label: "Customisation", value: "Branded sleeve available" },
      { label: "Care level", value: "Easy" },
    ],
    availabilityLabel: "Made to order",
    featured: false,
  },
  {
    _id: "fallback-product-7",
    name: "Succulent Trio Tray",
    slug: "succulent-trio-tray",
    category: { name: "Decorative Trays", slug: "decorative-trays" },
    images: [
      {
        src: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1600&auto=format&fit=crop",
        alt: "Decorative tray styled with three small succulents",
      },
    ],
    shortDescription:
      "Three hand-picked succulents styled in a handcrafted decorative tray.",
    description:
      "A ready-to-display arrangement of three complementary succulents set in a handcrafted tray. Designed to elevate reception desks, coffee tables and counters with minimal upkeep.",
    specifications: [
      { label: "Light", value: "Bright, indirect" },
      { label: "Water", value: "Light misting fortnightly" },
      { label: "Includes", value: "3 succulents, decorative tray" },
      { label: "Tray finish", value: "Matte ceramic" },
      { label: "Care level", value: "Easy" },
    ],
    availabilityLabel: "In stock",
    featured: false,
  },
  {
    _id: "fallback-product-8",
    name: "Peace Lily",
    slug: "peace-lily",
    category: { name: "Indoor Plants", slug: "indoor-plants" },
    images: [
      {
        src: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?q=80&w=1600&auto=format&fit=crop",
        alt: "Peace lily with white blooms and dark green leaves",
      },
    ],
    shortDescription:
      "Elegant air-purifier with glossy leaves and signature white blooms.",
    description:
      "The Peace Lily (Spathiphyllum) combines lush dark-green foliage with striking white spathes. It thrives in lower light, signals when it needs water by drooping, and is a top performer for cleaning indoor air.",
    specifications: [
      { label: "Light", value: "Low to medium, indirect" },
      { label: "Water", value: "When leaves begin to droop" },
      { label: "Mature height", value: "0.4 – 0.6 m" },
      { label: "Pet friendly", value: "No" },
      { label: "Care level", value: "Easy" },
    ],
    availabilityLabel: "In stock",
    featured: false,
  },
];

export const fallbackProjects: ProjectView[] = [
  {
    _id: "fallback-project-1",
    title: "Hillcrest Residence Garden",
    slug: "hillcrest-residence-garden",
    category: "residential",
    description:
      "A complete garden transformation for a private residence, blending lawns, seasonal flower beds and a shaded seating area.",
    coverImage: {
      src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2000&auto=format&fit=crop",
      alt: "Residential garden with manicured lawn",
    },
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=1600&auto=format&fit=crop",
        alt: "Garden pathway lined with plants",
      },
      {
        src: "https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?q=80&w=1600&auto=format&fit=crop",
        alt: "Rolling green lawn",
      },
    ],
  },
  {
    _id: "fallback-project-2",
    title: "Meridian Tech Park Lobby",
    slug: "meridian-tech-park-lobby",
    category: "commercial",
    description:
      "Statement indoor plant installations and a living wall designed for a high-traffic commercial lobby.",
    coverImage: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
      alt: "Modern office lobby with large indoor plants",
    },
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop",
        alt: "Office interior with greenery",
      },
      {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop",
        alt: "Reception area styled with plants",
      },
    ],
  },
  {
    _id: "fallback-project-3",
    title: "Orion Corporate Gifting Suite",
    slug: "orion-corporate-gifting-suite",
    category: "corporate",
    description:
      "A bespoke plant gifting programme for an annual client appreciation event, including custom packaging.",
    coverImage: {
      src: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=2000&auto=format&fit=crop",
      alt: "Corporate plant gift boxes arranged on a table",
    },
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=1600&auto=format&fit=crop",
        alt: "Gift hampers with plants",
      },
      {
        src: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1600&auto=format&fit=crop",
        alt: "Plant wrapped for gifting",
      },
    ],
  },
  {
    _id: "fallback-project-4",
    title: "Skyline Co-working Green Wall",
    slug: "skyline-coworking-green-wall",
    category: "vertical-gardens",
    description:
      "A 40-foot living wall installation designed to improve air quality and visual appeal in a co-working space.",
    coverImage: {
      src: "https://images.unsplash.com/photo-1530968033775-2c92736b131e?q=80&w=2000&auto=format&fit=crop",
      alt: "Large vertical garden green wall indoors",
    },
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1600&auto=format&fit=crop",
        alt: "Close up of vertical garden plants",
      },
      {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
        alt: "Pattern of green leaves",
      },
    ],
  },
  {
    _id: "fallback-project-5",
    title: "Birchwood Villas Landscaping",
    slug: "birchwood-villas-landscaping",
    category: "residential",
    description:
      "Full landscape design across a gated community, including shared green spaces and private courtyards.",
    coverImage: {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2000&auto=format&fit=crop",
      alt: "Tree-lined pathway through landscaped grounds",
    },
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop",
        alt: "Sunlight through trees in a landscaped park",
      },
      {
        src: "https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?q=80&w=1600&auto=format&fit=crop",
        alt: "Green hills and lawn",
      },
    ],
  },
  {
    _id: "fallback-project-6",
    title: "Lumen Bank Headquarters Atrium",
    slug: "lumen-bank-hq-atrium",
    category: "commercial",
    description:
      "A striking atrium centrepiece combining large specimen plants with seasonal floral displays.",
    coverImage: {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop",
      alt: "Bright atrium with large statement plants",
    },
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1600&auto=format&fit=crop",
        alt: "Shelf styled with plants",
      },
      {
        src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600&auto=format&fit=crop",
        alt: "Large monstera leaf",
      },
    ],
  },
];

export const fallbackTestimonials: TestimonialView[] = [
  {
    _id: "fallback-testimonial-1",
    name: "Ananya Sharma",
    designation: "Head of Workplace Experience",
    company: "Northbridge Technologies",
    review:
      "A1 Nursery transformed our office into a space people actually want to come back to. The plants are thriving months later, and their maintenance team is wonderfully responsive.",
    image: {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      alt: "Portrait of Ananya Sharma",
    },
  },
  {
    _id: "fallback-testimonial-2",
    name: "Rohan Mehta",
    designation: "Founder",
    company: "Mehta Residences",
    review:
      "From concept to planting, the landscaping team understood exactly the calm, modern feel we wanted for our home garden. The result exceeded what we imagined.",
    image: {
      src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop",
      alt: "Portrait of Rohan Mehta",
    },
  },
  {
    _id: "fallback-testimonial-3",
    name: "Priya Nair",
    designation: "People & Culture Lead",
    company: "Verdant Capital",
    review:
      "Our annual client gifting used to feel generic. A1 Nursery's curated plant hampers gave it a thoughtful, premium edge that clients still mention to us.",
    image: {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
      alt: "Portrait of Priya Nair",
    },
  },
];

export const fallbackSiteSettings: SiteSettings = {
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "hello@a1nursery.com",
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "facebook", url: "https://facebook.com" },
    { platform: "linkedin", url: "https://linkedin.com" },
    { platform: "pinterest", url: "https://pinterest.com" },
  ],
};

export const stats = [
  { label: "Plants Delivered", value: 5000, suffix: "+" },
  { label: "Corporate Clients", value: 150, suffix: "+" },
  { label: "Landscaping Projects", value: 50, suffix: "+" },
  { label: "Years of Experience", value: 10, suffix: "+" },
] as const;

export const whyChooseUs = [
  {
    title: "Expert Consultation",
    description:
      "Our horticulturists and designers assess your space and needs before recommending solutions.",
  },
  {
    title: "Premium Plant Quality",
    description:
      "Every plant is hand-selected and quality-checked before it leaves our nursery.",
  },
  {
    title: "Timely Delivery",
    description:
      "Reliable scheduling for deliveries, installations and event-ready setups.",
  },
  {
    title: "Customised Solutions",
    description:
      "Tailored plant selections, planters and layouts designed around your space and brand.",
  },
  {
    title: "Maintenance Support",
    description:
      "Ongoing care plans to keep your plants healthy and looking their best year-round.",
  },
  {
    title: "Sustainable Practices",
    description:
      "Eco-conscious sourcing, packaging and growing practices across everything we do.",
  },
] as const;

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Corporate", value: "corporate" },
  { label: "Vertical Gardens", value: "vertical-gardens" },
] as const;
