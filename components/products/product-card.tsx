import Image from "next/image";
import Link from "next/link";

import { EnquiryButton } from "@/components/enquiry/enquiry-button";
import type { ProductView } from "@/types";

export function ProductCard({ product }: { product: ProductView }) {
  const image = product.images[0];

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white transition-shadow duration-300 hover:shadow-lg hover:shadow-charcoal/5">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-cream"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.availabilityLabel ? (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium tracking-wide text-charcoal backdrop-blur-sm">
            {product.availabilityLabel}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium tracking-[0.15em] text-botanical uppercase">
          {product.category.name}
        </span>
        <h3 className="mt-2 font-display text-xl text-charcoal">
          <Link href={`/products/${product.slug}`} className="transition-colors hover:text-botanical">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal/65">
          {product.shortDescription}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-sm font-medium text-charcoal/50">Price on request</span>
          <EnquiryButton
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
  );
}
