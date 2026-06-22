import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

/**
 * Customises the Studio's content navigation: pins the singleton
 * "Site Settings" document at the top, then lists each collection as a
 * drag-to-reorder list (via @sanity/orderable-document-list).
 */
const orderableTypes: { type: string; title: string }[] = [
  { type: "heroSlide", title: "Hero Slides" },
  { type: "service", title: "Services" },
  { type: "category", title: "Categories" },
  { type: "product", title: "Products" },
  { type: "project", title: "Projects" },
  { type: "testimonial", title: "Testimonials" },
];

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      ...orderableTypes.map((item) =>
        orderableDocumentListDeskItem({
          type: item.type,
          title: item.title,
          S,
          context,
        })
      ),
    ]);
