"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Pixel offset the element travels in from. */
  y?: number;
}

/**
 * Subtle fade + rise reveal used to bring sections in on scroll.
 * Animates once, respects reduced-motion preferences via Framer Motion defaults.
 */
export function FadeIn({ children, className, delay = 0, y = 24 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
