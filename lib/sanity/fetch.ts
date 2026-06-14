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

export async function getHeroSlides(): Promise<HeroSlideView[]> {
  if (!client) return fallbackHeroSlides;

  const slides = await client.fetch<HeroSlide[]>(heroSlidesQuery);
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
  if (!client) return fallbackServices;

  const services = await client.fetch<Service[]>(servicesQuery);
  if (!services?.length) return fallbackServices;

  return services.map((service, index) => ({
    _id: service._id,
    title: service.title,
    description: service.description,
    image: resolveImage(service.image, fallbackServices[index % fallbackServices.length].image),
  }));
}

export async function getCategories(): Promise<CategoryView[]> {
  if (!client) return fallbackCategories;

  const categories = await client.fetch<Category[]>(categoriesQuery);
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
  if (!client) return fallbackProjects;

  const projects = await client.fetch<Project[]>(projectsQuery);
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
  if (!client) return fallbackTestimonials;

  const testimonials = await client.fetch<Testimonial[]>(testimonialsQuery);
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
  if (!client) return fallbackSiteSettings;

  const settings = await client.fetch<SiteSettings | null>(siteSettingsQuery);
  if (!settings) return fallbackSiteSettings;

  return {
    ...fallbackSiteSettings,
    ...settings,
  };
}
