import Link from "next/link";
import Image from "next/image";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import type { ImageView } from "@/types";

export function Logo({
  light = false,
  logo,
  className,
}: {
  light?: boolean;
  logo?: ImageView;
  className?: string;
}) {
  return (
    <Link
      href="/#home"
      aria-label={`${siteConfig.shortName} home`}
      className={cn(
        "flex items-center gap-2.5 font-display text-xl leading-none tracking-tight transition-colors",
        light ? "text-white" : "text-charcoal",
        className
      )}
    >
      {logo ? (
        <Image
          src={logo.src}
          alt={logo.alt || siteConfig.shortName}
          width={160}
          height={36}
          priority
          className="h-9 w-auto object-contain"
        />
      ) : (
        <>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-botanical text-white">
            <Leaf className="h-5 w-5" strokeWidth={2} />
          </span>
          <span>
            {siteConfig.shortName.split(" ")[0]}{" "}
            <span className="font-light">
              {siteConfig.shortName.split(" ").slice(1).join(" ")}
            </span>
          </span>
        </>
      )}
    </Link>
  );
}
