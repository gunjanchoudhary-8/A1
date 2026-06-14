import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { getTestimonials } from "@/lib/sanity/fetch";

export async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What our clients say" />

        <div className="mt-16">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </Container>
    </section>
  );
}
