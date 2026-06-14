"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";

import type { TestimonialView } from "@/types";

const SLIDE_DURATION = 6000;

export function TestimonialsCarousel({ testimonials }: { testimonials: TestimonialView[] }) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (next: number) =>
      setIndex(((next % testimonials.length) + testimonials.length) % testimonials.length),
    [testimonials.length]
  );

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => goTo(index + 1), SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [index, goTo, testimonials.length]);

  const testimonial = testimonials[index];

  return (
    <div className="mx-auto max-w-3xl text-center">
      <Quote className="mx-auto h-10 w-10 text-botanical/40" strokeWidth={1.5} />

      <div className="relative mt-6 min-h-[10rem] sm:min-h-[8rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial._id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-xl leading-relaxed text-balance text-charcoal sm:text-2xl lg:text-3xl">
              &ldquo;{testimonial.review}&rdquo;
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              {testimonial.image ? (
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image.src}
                    alt={testimonial.image.alt}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="text-left">
                <p className="text-sm font-semibold text-charcoal">{testimonial.name}</p>
                <p className="text-sm text-charcoal/60">
                  {testimonial.designation}, {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {testimonials.length > 1 ? (
        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t._id}
              type="button"
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-botanical" : "w-2 bg-charcoal/15 hover:bg-charcoal/30"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
