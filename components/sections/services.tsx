import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { getServices } from "@/lib/sanity/fetch";

export async function Services() {
  const services = await getServices();

  return (
    <section id="services" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Services designed around your space"
          description="From a single desk plant to a full landscape build-out, our team handles sourcing, design, installation and ongoing care."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <FadeIn key={service._id} delay={(i % 4) * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-charcoal">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                    {service.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
