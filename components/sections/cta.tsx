import Link from "next/link";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-botanical py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-botanical-dark/40 blur-3xl"
      />

      <Container className="relative">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            Let&rsquo;s create greener and more beautiful environments together.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-botanical-dark transition-colors hover:bg-cream sm:w-auto"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
