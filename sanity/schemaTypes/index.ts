import type { SchemaTypeDefinition } from "sanity";

import { heroSlide } from "./heroSlide";
import { service } from "./service";
import { category } from "./category";
import { product } from "./product";
import { project } from "./project";
import { testimonial } from "./testimonial";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSlide, service, category, product, project, testimonial, siteSettings],
};
