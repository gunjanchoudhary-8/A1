"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/layout/whatsapp-icon";

interface MobileMenuProps {
  phone: string;
  whatsapp: string;
  lightText: boolean;
}

export function MobileMenu({ phone, whatsapp, lightText }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "relative z-50 flex h-10 w-10 items-center justify-center rounded-full transition-colors",
          open ? "text-charcoal" : lightText ? "text-white" : "text-charcoal"
        )}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-white"
          >
            <div className="flex h-16 items-center justify-between px-6">
              <Logo />
            </div>

            <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 * i, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl tracking-tight text-charcoal transition-colors hover:text-botanical"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col gap-3 border-t border-charcoal/10 px-8 py-8">
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/15 px-5 py-3 text-sm font-medium text-charcoal transition-colors hover:border-botanical hover:text-botanical"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
              <a
                href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-botanical px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-botanical-dark"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
