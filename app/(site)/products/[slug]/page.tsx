import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductCard } from "@/components/products/product-card";
import { EnquiryButton } from "@/components/enquiry/enquiry-button";
import { WhatsAppIcon } from "@/components/layout/whatsapp-icon";
import { getProduct, getProducts, getSiteSettings } from "@/lib/sanity/fetch";
import { siteConfig } from "@/lib/site-config";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "Product not found" };

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.images[0].src],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const [settings, allProducts] = await Promise.all([getSiteSettings(), getProducts()]);

  const related = allProducts
    .filter((p) => p.category.slug === product.category.slug && p._id !== product._id)
    .slice(0, 4);

  const enquiryText = `Hi! I'm interested in ${product.name} (${siteConfig.url}/products/${product.slug}). Could you share pricing and availability?`;
  const whatsappHref = `https://wa.me/${settings.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(enquiryText)}`;

  return (
    <section className="py-32 sm:py-40">
      <Container>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/60 transition-colors hover:text-botanical"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to shop
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={product.images} name={product.name} />

          <div className="flex flex-col">
            <Link
              href={`/products?category=${product.category.slug}`}
              className="text-sm font-medium tracking-[0.15em] text-botanical uppercase transition-colors hover:text-botanical-dark"
            >
              {product.category.name}
            </Link>

            <div className="mt-3 flex flex-wrap items-center gap-4">
              <h1 className="font-display text-3xl text-charcoal sm:text-4xl">{product.name}</h1>
              {product.availabilityLabel ? (
                <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium tracking-wide text-botanical">
                  {product.availabilityLabel}
                </span>
              ) : null}
            </div>

            <p className="mt-2 text-sm font-medium text-charcoal/50">Price on request</p>

            <p className="mt-6 text-base leading-relaxed text-charcoal/70">{product.description}</p>

            {product.specifications.length > 0 ? (
              <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-charcoal/10 pt-8 sm:grid-cols-2">
                {product.specifications.map((spec) => (
                  <div key={spec.label} className="flex justify-between gap-4 border-b border-charcoal/5 pb-3">
                    <dt className="text-sm text-charcoal/55">{spec.label}</dt>
                    <dd className="text-sm font-medium text-charcoal">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-botanical px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-botanical-dark"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Enquire on WhatsApp
              </a>
              <EnquiryButton
                variant="full"
                product={{
                  id: product._id,
                  name: product.name,
                  slug: product.slug,
                  image: product.images[0],
                }}
              />
            </div>
          </div>
        </div>

        {related.length > 0 ? (
          <div className="mt-24">
            <h2 className="font-display text-2xl text-charcoal sm:text-3xl">You may also like</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
