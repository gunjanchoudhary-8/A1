import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium tracking-[0.2em] text-botanical uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-medium tracking-tight text-balance text-charcoal sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-charcoal/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
