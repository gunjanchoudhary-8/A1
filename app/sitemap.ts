import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getCategories, getProducts } from "@/lib/sanity/fetch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const lastModified = new Date();

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteConfig.url}/products/${product.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${siteConfig.url}/products?category=${category.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...categoryEntries,
    ...productEntries,
  ];
}
