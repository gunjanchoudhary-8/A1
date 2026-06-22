import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { ProductCard } from "@/components/products/product-card";
import { getFeaturedProducts } from "@/lib/sanity/fetch";

export async function FeaturedProducts() {
  const products = await getFeaturedProducts();
  if (products.length === 0) return null;

  return (
    <section id="featured-products" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Best Sellers"
          title="Popular right now"
          description="A handpicked selection of our most-loved plants and gifts. Browse the full shop to discover more."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product, i) => (
            <FadeIn key={product._id} delay={(i % 4) * 0.08}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/15 px-8 py-4 text-sm font-medium tracking-wide text-charcoal transition-colors hover:border-botanical hover:text-botanical"
          >
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
