import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCatalog } from "@/components/products/product-catalog";
import { getCategories, getProducts } from "@/lib/sanity/fetch";

export const metadata: Metadata = {
  title: "Shop Plants & Gifts",
  description:
    "Browse our collection of indoor and outdoor plants, succulents, flowering plants and corporate gifting. Enquire for pricing and availability.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  return (
    <section className="py-32 sm:py-40">
      <Container>
        <SectionHeading
          eyebrow="Shop"
          title="Plants & gifts for every space"
          description="Explore our curated range. Found something you love? Add it to your enquiry or message us directly — we'll help with sizing, care and pricing."
        />

        <div className="mt-16">
          <ProductCatalog
            products={products}
            categories={categories}
            initialCategory={category}
          />
        </div>
      </Container>
    </section>
  );
}
