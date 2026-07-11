import { client } from "./client";
import { resolveImage, urlForImage } from "./image";
import {
  categoriesQuery,
  featuredProductsQuery,
  heroSlidesQuery,
  productBySlugQuery,
  productsQuery,
  projectsQuery,
  servicesQuery,
  siteSettingsQuery,
  testimonialsQuery,
} from "./queries";
import {
  fallbackCategories,
  fallbackHeroSlides,
  fallbackProducts,
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
  Product,
  ProductView,
  Project,
  ProjectView,
  Service,
  ServiceView,
  SiteSettings,
  SiteSettingsRaw,
  Testimonial,
  TestimonialView,
} from "@/types";

/**
 * Run a GROQ query, returning `null` when Sanity isn't configured or the
 * request fails (network/DNS error, unreachable project, etc.) so callers
 * can fall back to static data instead of crashing the page.
 */
async function safeFetch<T>(query: string): Promise<T | null> {
  return safeFetchParams<T>(query, {});
}

/**
 * Parameterised variant of {@link safeFetch} for queries that take GROQ params
 * (e.g. a slug). Same contract: returns `null` when Sanity isn't configured or
 * the request fails, so callers can fall back to static data.
 */
async function safeFetchParams<T>(
  query: string,
  params: Record<string, unknown>
): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params);
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

/** Resolve a raw product doc to a view model, falling back per-field on images. */
function mapProduct(product: Product, index: number): ProductView {
  const fallback = fallbackProducts[index % fallbackProducts.length];
  return {
    _id: product._id,
    name: product.name,
    slug: product.slug,
    category: product.category,
    images: product.images?.length
      ? product.images.map((image, i) =>
          resolveImage(image, fallback.images[i % fallback.images.length])
        )
      : fallback.images,
    shortDescription: product.shortDescription,
    description: product.description,
    specifications: product.specifications ?? [],
    availabilityLabel: product.availabilityLabel,
    featured: product.featured ?? false,
  };
}

export async function getProducts(): Promise<ProductView[]> {
  const products = await safeFetch<Product[]>(productsQuery);
  if (!products?.length) return fallbackProducts;

  return products.map((product, index) => mapProduct(product, index));
}

export async function getFeaturedProducts(): Promise<ProductView[]> {
  const products = await safeFetch<Product[]>(featuredProductsQuery);
  if (!products?.length) return fallbackProducts.filter((product) => product.featured);

  return products.map((product, index) => mapProduct(product, index));
}

export async function getProduct(slug: string): Promise<ProductView | null> {
  const product = await safeFetchParams<Product | null>(productBySlugQuery, { slug });
  if (product) return mapProduct(product, 0);

  // Fall back to the matching sample product when Sanity is unconfigured, empty,
  // or errors — mirroring getProducts() so the catalog and detail pages agree.
  // Only a slug present in neither source 404s.
  return fallbackProducts.find((p) => p.slug === slug) ?? null;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const settings = await safeFetch<SiteSettingsRaw | null>(siteSettingsQuery);
  if (!settings) return fallbackSiteSettings;

  // Resolve image fields separately: the raw query returns Sanity image refs,
  // but consumers expect `ImageView`s. Pull them out before the merge so the
  // raw refs can't clobber the resolved fallbacks.
  const { logo, aboutImage, ...rest } = settings;
  const logoUrl = urlForImage(logo)?.width(400).url();

  // Strip null/undefined fields so a partial Sanity doc (e.g. null
  // socialLinks) doesn't overwrite the fallback values and crash consumers.
  return {
    ...fallbackSiteSettings,
    ...withoutNullish(rest),
    logo: logoUrl
      ? { src: logoUrl, alt: logo?.alt || "A1 Nursery" }
      : fallbackSiteSettings.logo,
    aboutImage: resolveImage(aboutImage, fallbackSiteSettings.aboutImage),
  };
}
