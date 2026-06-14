"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { projectFilters } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { ProjectView } from "@/types";

const categoryLabels: Record<ProjectView["category"], string> = {
  residential: "Residential",
  commercial: "Commercial",
  corporate: "Corporate",
  "vertical-gardens": "Vertical Gardens",
};

export function ProjectsGrid({ projects }: { projects: ProjectView[] }) {
  const [filter, setFilter] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<ProjectView | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter]
  );

  const gallery = activeProject
    ? [activeProject.coverImage, ...activeProject.galleryImages]
    : [];

  function openProject(project: ProjectView) {
    setActiveProject(project);
    setGalleryIndex(0);
  }

  function close() {
    setActiveProject(null);
  }

  function nextImage() {
    setGalleryIndex((i) => (i + 1) % gallery.length);
  }

  function prevImage() {
    setGalleryIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {projectFilters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium tracking-wide transition-colors",
              filter === f.value
                ? "border-botanical bg-botanical text-white"
                : "border-charcoal/15 text-charcoal/70 hover:border-botanical hover:text-botanical"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.button
              key={project._id}
              type="button"
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => openProject(project)}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-charcoal text-left"
            >
              <Image
                src={project.coverImage.src}
                alt={project.coverImage.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                  {categoryLabels[project.category]}
                </span>
                <h3 className="mt-3 font-display text-xl text-white sm:text-2xl">{project.title}</h3>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/80 p-4 backdrop-blur-sm sm:p-8"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white"
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-charcoal transition-colors hover:bg-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[4/3] w-full bg-charcoal sm:aspect-[16/9]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={galleryIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={gallery[galleryIndex].src}
                      alt={gallery[galleryIndex].alt}
                      fill
                      sizes="(min-width: 768px) 768px, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {gallery.length > 1 ? (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-charcoal transition-colors hover:bg-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-charcoal transition-colors hover:bg-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                ) : null}
              </div>

              <div className="p-6 sm:p-8">
                <span className="inline-flex rounded-full bg-cream px-3 py-1 text-xs font-medium tracking-wide text-botanical">
                  {categoryLabels[activeProject.category]}
                </span>
                <h3 className="mt-3 font-display text-2xl text-charcoal sm:text-3xl">
                  {activeProject.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70 sm:text-base">
                  {activeProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
