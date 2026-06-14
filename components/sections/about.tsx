import Image from "next/image";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <FadeIn className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-cream">
            <Image
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1600&auto=format&fit=crop"
              alt="Inside the A1 Nursery greenhouse, rows of healthy plants ready for delivery"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </FadeIn>

          <div>
            <FadeIn>
              <p className="text-sm font-medium tracking-[0.2em] text-botanical uppercase">
                About Us
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight text-balance text-charcoal sm:text-4xl lg:text-5xl">
                Rooted in quality, growing with you
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/70 sm:text-lg">
                <p>
                  For over a decade, A1 Nursery has been helping homes, workplaces and event
                  spaces feel more alive through thoughtfully chosen plants and landscapes. What
                  began as a small family nursery has grown into a trusted name in indoor
                  greenery, outdoor landscaping and corporate gifting.
                </p>
                <p>
                  Our mission is simple: make premium, healthy plants and beautifully designed
                  green spaces accessible &mdash; without compromising on quality, care or
                  design. Every project, big or small, is treated with the same attention to
                  detail.
                </p>
              </div>
            </FadeIn>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <FadeIn
                  key={stat.label}
                  delay={i * 0.1}
                  className="rounded-2xl border border-charcoal/10 bg-cream px-6 py-5"
                >
                  <p className="font-display text-3xl text-botanical sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-charcoal/60">{stat.label}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
