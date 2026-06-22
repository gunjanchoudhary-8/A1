export const siteConfig = {
  name: "A1 Nursery",
  shortName: "A1 Nursery",
  description:
    "Premium indoor & outdoor plants, landscaping, vertical gardens and corporate gifting. Bringing nature into homes, offices and events.",
  url: "https://www.a1nursery.com",
};

export const topBarItems = [
  "Corporate Gifting",
  "Indoor Plants",
  "Outdoor Plants",
  "Landscaping",
  "Vertical Gardens",
  "Decorative Trays",
  "Event Decor",
] as const;

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Shop", href: "/products" },
  { label: "Collections", href: "/#collections" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
] as const;

export const footerServiceLinks = [
  { label: "Corporate Gifting", href: "/#services" },
  { label: "Indoor Plants", href: "/#services" },
  { label: "Outdoor Plants", href: "/#services" },
  { label: "Landscaping", href: "/#services" },
  { label: "Vertical Gardens", href: "/#services" },
  { label: "Floral Arrangements", href: "/#services" },
] as const;
