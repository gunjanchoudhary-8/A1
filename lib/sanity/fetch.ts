import { client } from "./client";
import { resolveImage } from "./image";
import {
  categoriesQuery,
  heroSlidesQuery,
  projectsQuery,
  servicesQuery,
  siteSettingsQuery,
  testimonialsQuery,
} from "./queries";
import {
  fallbackCategories,
  fallbackHeroSlides,
  fallbackProjects,
  fallbackServices,
  fallbackSiteSettings,
  fallbackTestimonials,
} from "@/lib/data";
import type {
  Category,
  CategoryView,
  HeroSlide,
  HeroSlideView,
  Project,
  ProjectView,
  Service,
  ServiceView,
  SiteSettings,
  Testimonial,
  TestimonialView,
} from "@/types";

/**
 * Run a GROQ query, returning `null` when Sanity isn't configured or the
 * request fails (network/DNS error, unreachable project, etc.) so callers
 * can fall back to static data instead of crashing the page.
 */
async function safeFetch<T>(query: string): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query);
  } catch (error) {
    console.error("Sanity fetch failed, falling back to static data:", error);
    return null;
  }
}

/** Drop null/undefined keys so a partial Sanity doc can't clobber fallbacks. */
function withoutNullish<T extends object>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== null && value !== undefined)
  ) as Partial<T>;
}

export async function getHeroSlides(): Promise<HeroSlideView[]> {
  const slides = await safeFetch<HeroSlide[]>(heroSlidesQuery);
  if (!slides?.length) return fallbackHeroSlides;

  return slides.map((slide, index) => ({
    _id: slide._id,
    title: slide.title,
    subtitle: slide.subtitle,
    buttonText: slide.buttonText,
    buttonLink: slide.buttonLink,
    image: resolveImage(slide.image, fallbackHeroSlides[index % fallbackHeroSlides.length].image),
  }));
}

export async function getServices(): Promise<ServiceView[]> {
  const services = await safeFetch<Service[]>(servicesQuery);
  if (!services?.length) return fallbackServices;

  return services.map((service, index) => ({
    _id: service._id,
    title: service.title,
    description: service.description,
    image: resolveImage(service.image, fallbackServices[index % fallbackServices.length].image),
  }));
}

export async function getCategories(): Promise<CategoryView[]> {
  const categories = await safeFetch<Category[]>(categoriesQuery);
  if (!categories?.length) return fallbackCategories;

  return categories.map((category, index) => ({
    _id: category._id,
    name: category.name,
    slug: category.slug,
    description: category.description,
    image: resolveImage(category.image, fallbackCategories[index % fallbackCategories.length].image),
  }));
}

export async function getProjects(): Promise<ProjectView[]> {
  const projects = await safeFetch<Project[]>(projectsQuery);
  if (!projects?.length) return fallbackProjects;

  return projects.map((project, index) => {
    const fallback = fallbackProjects[index % fallbackProjects.length];
    return {
      _id: project._id,
      title: project.title,
      slug: project.slug,
      category: project.category,
      description: project.description,
      coverImage: resolveImage(project.coverImage, fallback.coverImage),
      galleryImages: project.galleryImages?.length
        ? project.galleryImages.map((image, i) =>
            resolveImage(image, fallback.galleryImages[i % fallback.galleryImages.length])
          )
        : fallback.galleryImages,
    };
  });
}

export async function getTestimonials(): Promise<TestimonialView[]> {
  const testimonials = await safeFetch<Testimonial[]>(testimonialsQuery);
  if (!testimonials?.length) return fallbackTestimonials;

  return testimonials.map((testimonial, index) => {
    const fallback = fallbackTestimonials[index % fallbackTestimonials.length];
    return {
      _id: testimonial._id,
      name: testimonial.name,
      designation: testimonial.designation,
      company: testimonial.company,
      review: testimonial.review,
      image: testimonial.image
        ? resolveImage(testimonial.image, fallback.image ?? { src: "", alt: testimonial.name })
        : fallback.image,
    };
  });
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const settings = await safeFetch<SiteSettings | null>(siteSettingsQuery);
  if (!settings) return fallbackSiteSettings;

  // Strip null/undefined fields so a partial Sanity doc (e.g. null
  // socialLinks) doesn't overwrite the fallback values and crash consumers.
  return {
    ...fallbackSiteSettings,
    ...withoutNullish(settings),
  };
}
