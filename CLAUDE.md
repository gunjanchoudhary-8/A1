# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> The Next.js warning in AGENTS.md is not boilerplate. This repo uses Next.js 15 / React 19 with the App Router. Consult `node_modules/next/dist/docs/` before relying on Next.js APIs from memory.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # ESLint (eslint-config-next, flat config in eslint.config.mjs)
```

There is no test runner configured in this project.

## Architecture

A1 Nursery is a single-page marketing site for a plant nursery / landscaping business, backed by Sanity CMS, with **graceful degradation when no CMS is configured**.

### Route groups
- `app/(site)/` — the public marketing site. `layout.tsx` here wraps pages with `Navbar`, `Footer`, and `WhatsAppButton`; `page.tsx` composes the homepage from `components/sections/*` in order.
- `app/layout.tsx` — root layout: fonts (`Inter` as `--font-sans`, `Fraunces` as `--font-display`), global metadata derived from `lib/site-config.ts`.
- `app/studio/[[...tool]]/` — the embedded Sanity Studio, mounted at `/studio` (see `sanity.config.ts`, `basePath: "/studio"`).
- SEO files: `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx`.

### The CMS-with-fallback pattern (central to this codebase)
Content is read through `lib/sanity/fetch.ts`, never by querying the client directly from components. Each `getX()` function:
1. Returns the corresponding `fallbackX` from `lib/data.ts` if the Sanity client is `null` (i.e. `NEXT_PUBLIC_SANITY_PROJECT_ID` unset — `isSanityConfigured` in `lib/sanity/client.ts`).
2. Otherwise runs a GROQ query from `lib/sanity/queries.ts` via `safeFetch`, and **still** falls back to `lib/data.ts` if the query returns nothing *or* throws (network/DNS error, unreachable project) — the page never crashes on a CMS outage. `getSiteSettings` additionally merges over the fallback and strips nullish keys (`withoutNullish`) so a partial doc can't clobber defaults.
3. Maps raw Sanity docs (`Foo` types) to resolved view models (`FooView` types) via `resolveImage()` in `lib/sanity/image.ts`, which converts Sanity image refs to CDN URLs or falls back to the static `{ src, alt }` in `lib/data.ts`.

Consequence: the site renders fully with zero configuration. When adding a new content type, you must add it in five coordinated places: a schema in `sanity/schemaTypes/`, a query in `queries.ts`, `Foo`/`FooView` types in `types/index.ts`, a `getFoo()` + mapping in `fetch.ts`, and a `fallbackFoo` in `data.ts`.

### Sanity schema
Document types live in `sanity/schemaTypes/` and are registered in `index.ts`. `sanity/structure.ts` defines the Studio desk layout. The Studio runs inside the Next.js app — no separate Sanity deploy.

### Components & styling
- `components/sections/` — page sections. Server components by default (they call `getX()` and `await`); only mark `"use client"` when interactivity is needed (e.g. `hero.tsx` carousel uses framer-motion + state).
- `components/ui/` — reusable primitives (`button.tsx` via class-variance-authority, `container.tsx`, `fade-in.tsx`, `section-heading.tsx`, `animated-counter.tsx`).
- `components/layout/` — navbar, footer, mobile menu, WhatsApp button.
- Tailwind v4 (CSS-first config in `app/globals.css`, no `tailwind.config.js`). Brand palette is defined as CSS variables in `:root` and exposed as Tailwind colors via `@theme inline` — use `bg-botanical`, `text-charcoal`, `bg-cream`, etc. shadcn is integrated (`components.json`); merge classes with `cn()` from `lib/utils.ts`.

### Conventions
- Path alias `@/*` maps to the repo root (e.g. `@/lib/sanity/fetch`, `@/components/ui/button`).
- Static, non-CMS site copy (nav links, stats, "why choose us", project filters) lives in `lib/site-config.ts` and the lower half of `lib/data.ts` — not in Sanity.
- Remote image hosts must be allowlisted in `next.config.ts` (`cdn.sanity.io`, `images.unsplash.com`).

### Environment variables
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — when unset, the whole site runs on fallback data.
- `NEXT_PUBLIC_SANITY_DATASET` (default `production`), `NEXT_PUBLIC_SANITY_API_VERSION` (default `2025-01-01`).
