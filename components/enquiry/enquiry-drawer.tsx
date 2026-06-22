"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Trash2, X } from "lucide-react";

import { useEnquiry } from "@/components/enquiry/enquiry-provider";
import { WhatsAppIcon } from "@/components/layout/whatsapp-icon";
import { siteConfig } from "@/lib/site-config";

function buildMessage(items: { name: string; slug: string }[]) {
  const lines = items.map(
    (item) => `• ${item.name} — ${siteConfig.url}/products/${item.slug}`
  );
  return `Hi! I'd like to enquire about the following:\n\n${lines.join("\n")}`;
}

export function EnquiryDrawer() {
  const { items, isOpen, close, remove, clear, whatsapp, setPrefillMessage } = useEnquiry();
  const router = useRouter();

  const message = buildMessage(items);
  const whatsappHref = `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  function sendViaContactForm() {
    setPrefillMessage(message);
    close();
    router.push("/#contact");
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] bg-charcoal/60 backdrop-blur-sm"
          onClick={close}
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-5">
              <h2 className="font-display text-xl text-charcoal">
                Your enquiry {items.length > 0 ? `(${items.length})` : ""}
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label="Close enquiry list"
                className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal/60 transition-colors hover:bg-cream hover:text-charcoal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <p className="text-charcoal/60">
                  Your enquiry list is empty. Browse the shop and add the plants or gifts
                  you&apos;re interested in.
                </p>
                <Link
                  href="/products"
                  onClick={close}
                  className="inline-flex items-center justify-center rounded-full bg-botanical px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-botanical-dark"
                >
                  Browse the shop
                </Link>
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-charcoal/10 overflow-y-auto px-6">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-center gap-4 py-4">
                      <Link
                        href={`/products/${item.slug}`}
                        onClick={close}
                        className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-cream"
                      >
                        <Image src={item.image.src} alt={item.image.alt} fill sizes="64px" className="object-cover" />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/products/${item.slug}`}
                          onClick={close}
                          className="block truncate text-sm font-medium text-charcoal transition-colors hover:text-botanical"
                        >
                          {item.name}
                        </Link>
                        <span className="text-xs text-charcoal/50">Price on request</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-charcoal/40 transition-colors hover:bg-cream hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 border-t border-charcoal/10 px-6 py-5">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      clear();
                      close();
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-botanical px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-botanical-dark"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Send on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={sendViaContactForm}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-charcoal/15 px-6 py-3.5 text-sm font-medium text-charcoal transition-colors hover:border-botanical hover:text-botanical"
                  >
                    Send via contact form
                  </button>
                  <button
                    type="button"
                    onClick={clear}
                    className="w-full pt-1 text-center text-xs text-charcoal/45 transition-colors hover:text-red-600"
                  >
                    Clear list
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
