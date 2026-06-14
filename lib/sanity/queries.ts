import { groq } from "next-sanity";

export const heroSlidesQuery = groq`
  *[_type == "heroSlide"] | order(orderRank asc) {
    _id,
    title,
    subtitle,
    image,
    buttonText,
    buttonLink
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(orderRank asc) {
    _id,
    title,
    description,
    image
  }
`;

export const categoriesQuery = groq`
  *[_type == "category"] | order(orderRank asc) {
    _id,
    name,
    "slug": slug.current,
    image,
    description
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(orderRank asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    coverImage,
    galleryImages,
    description
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(orderRank asc) {
    _id,
    name,
    designation,
    company,
    review,
    image
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    phone,
    whatsapp,
    email,
    address,
    mapEmbedUrl,
    logo,
    socialLinks
  }
`;
