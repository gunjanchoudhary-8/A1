"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/layout/whatsapp-icon";

export function WhatsAppButton({ whatsapp }: { whatsapp: string }) {
  return (
    <motion.a
      href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-botanical text-white shadow-lg shadow-botanical/30 sm:right-8 sm:bottom-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  );
}
