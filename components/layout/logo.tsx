import Link from "next/link";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      href="/#home"
      className={cn(
        "flex items-center gap-2.5 font-display text-xl leading-none tracking-tight transition-colors",
        light ? "text-white" : "text-charcoal",
        className
      )}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-botanical text-white">
        <Leaf className="h-5 w-5" strokeWidth={2} />
      </span>
      <span>
        {siteConfig.shortName.split(" ")[0]}{" "}
        <span className="font-light">{siteConfig.shortName.split(" ").slice(1).join(" ")}</span>
      </span>
    </Link>
  );
}
