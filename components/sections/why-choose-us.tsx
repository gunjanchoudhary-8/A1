import {
  HeartHandshake,
  MessageCircleHeart,
  Recycle,
  SlidersHorizontal,
  Sprout,
  Truck,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { whyChooseUs } from "@/lib/data";

const icons = [MessageCircleHeart, Sprout, Truck, SlidersHorizontal, HeartHandshake, Recycle];

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The A1 Nursery difference"
          description="Premium plants are only part of the story — here's what our clients can always count on."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <FadeIn key={item.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-3xl border border-charcoal/10 p-8 transition-colors duration-300 hover:border-botanical/40 hover:bg-cream">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-botanical/10 text-botanical">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl text-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
