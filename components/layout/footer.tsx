import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { socialIcons } from "@/components/layout/social-icons";
import { footerServiceLinks, navLinks, siteConfig } from "@/lib/site-config";
import type { SiteSettings } from "@/types";

export function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="bg-charcoal text-white/80">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] text-white uppercase">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 transition-colors hover:text-botanical">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] text-white uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 transition-colors hover:text-botanical">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] text-white uppercase">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-botanical" />
                <a href={`tel:${settings.phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-white">
                  {settings.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-botanical" />
                <a href={`mailto:${settings.email}`} className="transition-colors hover:text-white">
                  {settings.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-botanical" />
                <span>{settings.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {settings.socialLinks.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-botanical hover:text-botanical"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
