import { defineField, defineType } from "sanity";

export const heroSlide = defineType({
  name: "heroSlide",
  title: "Hero Slide",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          description: "Important for SEO and accessibility.",
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      description: "Internal path (e.g. /#contact) or full URL.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Slides are sorted by this value, ascending.",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
