"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

const fieldClasses =
  "w-full rounded-2xl border border-charcoal/15 bg-white px-5 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-botanical focus:outline-none focus:ring-2 focus:ring-botanical/20";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
    event.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-full min-h-[22rem] flex-col items-center justify-center rounded-3xl border border-botanical/20 bg-botanical/5 p-10 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-botanical" strokeWidth={1.5} />
        <h3 className="mt-5 font-display text-2xl text-charcoal">Thank you</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-charcoal/65">
          Your message has been received. Our team will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-botanical hover:text-botanical-dark"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className={fieldClasses}
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-charcoal">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+91 98765 43210"
          className={fieldClasses}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={fieldClasses}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-charcoal">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your space and what you're looking for..."
          className={`${fieldClasses} resize-none`}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-botanical px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-botanical-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
}
