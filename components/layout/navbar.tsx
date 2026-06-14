"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { TopInfoBar } from "@/components/layout/top-info-bar";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { WhatsAppIcon } from "@/components/layout/whatsapp-icon";
import { Container } from "@/components/ui/container";
import { navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import type { SiteSettings } from "@/types";

export function Navbar({ settings }: { settings: SiteSettings }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <TopInfoBar />
      </motion.div>

      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-charcoal/5 bg-white/85 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Logo light={!scrolled} />

            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors",
                    scrolled ? "text-charcoal hover:text-botanical" : "text-white hover:text-white/75"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={`tel:${settings.phone.replace(/\s+/g, "")}`}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "border-charcoal/15 text-charcoal hover:border-botanical hover:text-botanical"
                    : "border-white/40 text-white hover:bg-white/10"
                )}
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
              <a
                href={`https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-botanical px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-botanical-dark"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <MobileMenu phone={settings.phone} whatsapp={settings.whatsapp} lightText={!scrolled} />
          </div>
        </Container>
      </div>
    </header>
  );
}
