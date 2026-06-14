import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { getCategories } from "@/lib/sanity/fetch";

export async function FeaturedCollections() {
  const categories = await getCategories();

  return (
    <section id="collections" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured Collections"
          title="Curated for every space"
          description="Explore our most-loved plant and gifting collections, ready to ship or tailor to your project."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <FadeIn key={category._id} delay={(i % 3) * 0.08}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-charcoal">
                <Image
                  src={category.image.src}
                  alt={category.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-2xl text-white">{category.name}</h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 group-hover:border-botanical group-hover:bg-botanical">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-2 grid grid-rows-[0fr] text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                    <span className="overflow-hidden">{category.description}</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
