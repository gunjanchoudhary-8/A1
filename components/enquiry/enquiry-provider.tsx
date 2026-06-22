"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface EnquiryItem {
  id: string;
  name: string;
  slug: string;
  image: { src: string; alt: string };
}

interface EnquiryContextValue {
  items: EnquiryItem[];
  count: number;
  whatsapp: string;
  isOpen: boolean;
  prefillMessage: string | null;
  add: (item: EnquiryItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  has: (id: string) => boolean;
  open: () => void;
  close: () => void;
  setPrefillMessage: (message: string | null) => void;
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null);
const STORAGE_KEY = "a1nursery-enquiry";

export function EnquiryProvider({
  whatsapp,
  children,
}: {
  whatsapp: string;
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<EnquiryItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [prefillMessage, setPrefillMessage] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // Read persisted items after mount so server and first client render match.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as EnquiryItem[]);
    } catch {
      // ignore malformed/unavailable storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore storage write failures (private mode, quota)
    }
  }, [items, hydrated]);

  const add = useCallback((item: EnquiryItem) => {
    setItems((prev) => (prev.some((i) => i.id === item.id) ? prev : [...prev, item]));
  }, []);
  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);
  const clear = useCallback(() => setItems([]), []);
  const has = useCallback((id: string) => items.some((i) => i.id === id), [items]);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<EnquiryContextValue>(
    () => ({
      items,
      count: items.length,
      whatsapp,
      isOpen,
      prefillMessage,
      add,
      remove,
      clear,
      has,
      open,
      close,
      setPrefillMessage,
    }),
    [items, whatsapp, isOpen, prefillMessage, add, remove, clear, has, open, close]
  );

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used within an EnquiryProvider");
  return ctx;
}
