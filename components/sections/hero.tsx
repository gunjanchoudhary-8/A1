"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import type { HeroSlideView } from "@/types";

const SLIDE_DURATION = 5000;

export function Hero({ slides }: { slides: HeroSlideView[] }) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (next: number) => setIndex(((next % slides.length) + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => goTo(index + 1), SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [index, goTo, slides.length]);

  const slide = slides[index];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Background images */}
      <AnimatePresence>
        {slides.map(
          (s, i) =>
            i === index && (
              <motion.div
                key={s._id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.08 }}
                  transition={{ duration: (SLIDE_DURATION + 1500) / 1000, ease: "linear" }}
                >
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/50" />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Content */}
      <Container className="relative z-10 flex h-full flex-col justify-center pb-24 pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide._id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-medium tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
              {slide.title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              {slide.subtitle}
            </p>
            <div className="mt-10">
              <Link
                href={slide.buttonLink}
                className="inline-flex items-center justify-center rounded-full bg-botanical px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-botanical-dark"
              >
                {slide.buttonText}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* Manual navigation */}
      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-10 z-10 flex items-center justify-between px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={s._id}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className="group relative h-1 w-10 overflow-hidden rounded-full bg-white/25 sm:w-14"
              >
                {i === index && (
                  <motion.span
                    key={index}
                    className="absolute inset-y-0 left-0 block bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(index - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(index + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
