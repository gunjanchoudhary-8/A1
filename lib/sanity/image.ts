import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./client";
import type { ImageView, SanityImage } from "@/types";

const builder =
  projectId &&
  createImageUrlBuilder({
    projectId,
    dataset,
  });

/**
 * Build an optimized Sanity CDN image URL. Returns `undefined` when Sanity
 * isn't configured or the source has no asset, so callers can fall back to
 * a local image.
 */
export function urlForImage(source?: SanityImage) {
  if (!builder || !source?.asset) return undefined;
  return builder.image(source).auto("format").fit("max");
}

/**
 * Resolve a Sanity image field to a `{ src, alt }` pair, falling back to a
 * local/static image when no CMS asset is available.
 */
export function resolveImage(
  image: SanityImage | undefined | null,
  fallback: ImageView
): ImageView {
  const url = urlForImage(image ?? undefined)?.width(1600).url();
  if (!url) return fallback;
  return { src: url, alt: image?.alt || fallback.alt };
}
