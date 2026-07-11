import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description:
        "Shown in the navbar, footer and mobile menu. Use a transparent PNG or SVG. Falls back to the leaf mark when empty.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "aboutImage",
      title: "About Section Image",
      type: "image",
      description: "Shown beside the About text on the homepage. Portrait works best (4:5).",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          description: "Important for SEO and accessibility.",
        }),
      ],
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      description: "Displayed and used for the call button, e.g. +91 98765 43210",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
      description: "Include country code, no spaces or symbols, e.g. 919876543210",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialLink",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Instagram", value: "instagram" },
                  { title: "Facebook", value: "facebook" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "YouTube", value: "youtube" },
                  { title: "Pinterest", value: "pinterest" },
                  { title: "Twitter / X", value: "twitter" },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "platform", subtitle: "url" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "email" },
    prepare({ title }) {
      return { title: "Site Settings", subtitle: title };
    },
  },
});
