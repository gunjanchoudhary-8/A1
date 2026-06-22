"use client";

import { ClipboardList } from "lucide-react";

import { useEnquiry } from "@/components/enquiry/enquiry-provider";
import { cn } from "@/lib/utils";

export function EnquiryTrigger({ light = false }: { light?: boolean }) {
  const { count, open } = useEnquiry();

  return (
    <button
      type="button"
      onClick={open}
      aria-label={`Open enquiry list (${count} ${count === 1 ? "item" : "items"})`}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full border transition-colors",
        light
          ? "border-white/40 text-white hover:bg-white/10"
          : "border-charcoal/15 text-charcoal hover:border-botanical hover:text-botanical"
      )}
    >
      <ClipboardList className="h-5 w-5" />
      {count > 0 ? (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-botanical px-1 text-[11px] font-semibold text-white">
          {count}
        </span>
      ) : null}
    </button>
  );
}
