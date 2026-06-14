import type {
  CategoryView,
  HeroSlideView,
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
      src: "https://images.unsplash.com/photo-1545165375-1f1c4dfa1d2c?q=80&w=2400&auto=format&fit=crop",
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
      src: "https://images.unsplash.com/photo-1416662070879-08d77c5fb6dc?q=80&w=1600&auto=format&fit=crop",
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
      src: "https://images.unsplash.com/photo-1416809297966-d8d1b6b7f8d7?q=80&w=1600&auto=format&fit=crop",
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
        src: "https://images.unsplash.com/photo-1416809297966-d8d1b6b7f8d7?q=80&w=1600&auto=format&fit=crop",
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
  address: "12 Greenway Avenue, Bengaluru, Karnataka 560001, India",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1700000000000",
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
