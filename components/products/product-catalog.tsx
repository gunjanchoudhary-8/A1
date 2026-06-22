"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";

import { ProductCard } from "@/components/products/product-card";
import { cn } from "@/lib/utils";
import type { CategoryView, ProductView } from "@/types";

type SortOption = "featured" | "az";

interface ProductCatalogProps {
  products: ProductView[];
  categories: CategoryView[];
  initialCategory?: string;
}

export function ProductCatalog({ products, categories, initialCategory }: ProductCatalogProps) {
  const [filter, setFilter] = useState(initialCategory ?? "all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("featured");

  // Only show filter chips for categories that actually have products.
  const availableCategories = useMemo(() => {
    const slugs = new Set(products.map((p) => p.category.slug));
    return categories.filter((c) => slugs.has(c.slug));
  }, [products, categories]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter((product) => {
      const matchesCategory = filter === "all" || product.category.slug === filter;
      const matchesQuery =
        !q ||
        [product.name, product.shortDescription, product.description].some((text) =>
          text.toLowerCase().includes(q)
        );
      return matchesCategory && matchesQuery;
    });

    // Array.sort is stable, so equal keys keep the incoming order (already
    // sorted by `order` from the data layer).
    return [...list].sort((a, b) => {
      if (sort === "az") return a.name.localeCompare(b.name);
      return Number(b.featured) - Number(a.featured);
    });
  }, [products, filter, query, sort]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={cn(
            "rounded-full border px-5 py-2 text-sm font-medium tracking-wide transition-colors",
            filter === "all"
              ? "border-botanical bg-botanical text-white"
              : "border-charcoal/15 text-charcoal/70 hover:border-botanical hover:text-botanical"
          )}
        >
          All
        </button>
        {availableCategories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => setFilter(category.slug)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium tracking-wide transition-colors",
              filter === category.slug
                ? "border-botanical bg-botanical text-white"
                : "border-charcoal/15 text-charcoal/70 hover:border-botanical hover:text-botanical"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full rounded-full border border-charcoal/15 bg-white py-3 pl-11 pr-5 text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-botanical focus:outline-none focus:ring-2 focus:ring-botanical/20"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-charcoal/60">
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-full border border-charcoal/15 bg-white px-4 py-2.5 text-sm font-medium text-charcoal transition-colors focus:border-botanical focus:outline-none focus:ring-2 focus:ring-botanical/20"
          >
            <option value="featured">Featured</option>
            <option value="az">Name (A–Z)</option>
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-charcoal/60">
          No products match your search. Try a different category or keyword.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product._id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
