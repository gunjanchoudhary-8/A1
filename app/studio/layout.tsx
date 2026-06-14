import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A1 Nursery Studio",
  description: "Content studio for A1 Nursery.",
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
