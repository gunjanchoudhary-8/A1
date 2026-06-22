"use client";

import { Check, Plus } from "lucide-react";

import { useEnquiry, type EnquiryItem } from "@/components/enquiry/enquiry-provider";
import { cn } from "@/lib/utils";

interface EnquiryButtonProps {
  product: EnquiryItem;
  className?: string;
  /** "compact" for product cards, "full" for the detail page. */
  variant?: "compact" | "full";
}

export function EnquiryButton({ product, className, variant = "compact" }: EnquiryButtonProps) {
  const { add, remove, has } = useEnquiry();
  const added = has(product.id);

  return (
    <button
      type="button"
      onClick={() => (added ? remove(product.id) : add(product))}
      aria-pressed={added}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-colors",
        variant === "full" ? "px-8 py-4" : "px-4 py-2",
        added
          ? "border border-botanical bg-botanical/10 text-botanical hover:bg-botanical/15"
          : "border border-charcoal/15 text-charcoal hover:border-botanical hover:text-botanical",
        className
      )}
    >
      {added ? (
        <>
          <Check className="h-4 w-4" />
          Added
        </>
      ) : (
        <>
          <Plus className="h-4 w-4" />
          {variant === "full" ? "Add to enquiry" : "Enquire"}
        </>
      )}
    </button>
  );
}
