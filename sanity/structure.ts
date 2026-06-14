import type { StructureResolver } from "sanity/structure";

/**
 * Customises the Studio's content navigation: pins the singleton
 * "Site Settings" document at the top, then lists the remaining
 * collections as normal document lists.
 */
export const structure: StructureResolver = (S) =>
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
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "siteSettings"
      ),
    ]);
