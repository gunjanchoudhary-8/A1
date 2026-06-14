import type { SVGProps } from "react";
import type { SocialLink } from "@/types";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 21v-7h2.5l.5-3H14V9a1.5 1.5 0 0 1 1.5-1.5H17V4.5h-2A4 4 0 0 0 11 8.5V11H8.5v3H11v7" />
    </svg>
  );
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="8" y1="11" x2="8" y2="16" />
      <line x1="8" y1="8" x2="8" y2="8" />
      <path d="M12 16v-5a0 0 0 0 1 0 0" />
      <path d="M12 16v-3a2 2 0 0 1 4 0v3" />
    </svg>
  );
}

function YoutubeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="M11 9.5l4 2.5-4 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PinterestIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 18l2-9" />
      <path d="M9.5 11.5a2.5 3 0 1 0 5 -0.3c0 -2 -1.5 -3.2 -3.5 -2.7" />
    </svg>
  );
}

function TwitterIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4l16 16" />
      <path d="M20 4L4 20" />
    </svg>
  );
}

export const socialIcons: Record<SocialLink["platform"], (props: IconProps) => React.JSX.Element> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  pinterest: PinterestIcon,
  twitter: TwitterIcon,
};
