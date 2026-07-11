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

const productProjection = `
  _id,
  name,
  "slug": slug.current,
  "category": category->{ name, "slug": slug.current },
  images,
  shortDescription,
  description,
  specifications,
  availabilityLabel,
  featured
`;

export const productsQuery = groq`
  *[_type == "product"] | order(orderRank asc) {
    ${productProjection}
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    ${productProjection}
  }
`;

export const featuredProductsQuery = groq`
  *[_type == "product" && featured == true] | order(orderRank asc) {
    ${productProjection}
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
    logo,
    aboutImage,
    socialLinks
  }
`;
