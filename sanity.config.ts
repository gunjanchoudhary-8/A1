import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId } from "@/lib/sanity/client";
import { schema } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";

export default defineConfig({
  name: "a1nursery",
  title: "A1 Nursery Studio",
  basePath: "/studio",

  projectId: projectId || "placeholder-project-id",
  dataset,

  schema,

  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
