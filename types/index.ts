import type { Image as SanityImageType } from "sanity";

/** A Sanity image field, optionally with a custom alt override. */
export interface SanityImage extends SanityImageType {
  alt?: string;
}

/** A resolved image ready for use with next/image, regardless of source. */
export interface ImageView {
  src: string;
  alt: string;
}

export interface HeroSlide {
  _id: string;
  title: string;
  subtitle: string;
  image: SanityImage;
  buttonText: string;
  buttonLink: string;
}

export interface HeroSlideView {
  _id: string;
  title: string;
  subtitle: string;
  image: ImageView;
  buttonText: string;
  buttonLink: string;
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  image: SanityImage;
}

export interface ServiceView {
  _id: string;
  title: string;
  description: string;
  image: ImageView;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: SanityImage;
  description: string;
}

export interface CategoryView {
  _id: string;
  name: string;
  slug: string;
  image: ImageView;
  description: string;
}

export type ProjectCategory =
  | "residential"
  | "commercial"
  | "corporate"
  | "vertical-gardens";

export interface Project {
  _id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  coverImage: SanityImage;
  galleryImages: SanityImage[];
  description: string;
}

export interface ProjectView {
  _id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  coverImage: ImageView;
  galleryImages: ImageView[];
  description: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  designation: string;
  company: string;
  review: string;
  image?: SanityImage;
}

export interface TestimonialView {
  _id: string;
  name: string;
  designation: string;
  company: string;
  review: string;
  image?: ImageView;
}

export interface SocialLink {
  platform: "instagram" | "facebook" | "linkedin" | "youtube" | "pinterest" | "twitter";
  url: string;
}

export interface SiteSettings {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapEmbedUrl?: string;
  logo?: SanityImage;
  socialLinks: SocialLink[];
}
