import { defineField, defineType } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      description: "The first image is used as the primary/cover image.",
      of: [
        {
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
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 2,
      description: "Shown on product cards.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description: "Shown on the product detail page.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "specifications",
      title: "Specifications",
      type: "array",
      description: "Plant attributes, e.g. Light: Bright indirect, Water: Weekly.",
      of: [
        {
          type: "object",
          name: "specification",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        },
      ],
    }),
    defineField({
      name: "availabilityLabel",
      title: "Availability Label",
      type: "string",
      description: "Display-only badge, e.g. In stock / Seasonal / Made to order.",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Surface this product on the homepage.",
      initialValue: false,
    }),
    orderRankField({ type: "product" }),
  ],
  preview: {
    select: { title: "name", subtitle: "category.name", media: "images.0" },
  },
});
