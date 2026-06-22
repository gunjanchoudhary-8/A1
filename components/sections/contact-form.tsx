"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

import { useEnquiry } from "@/components/enquiry/enquiry-provider";

const fieldClasses =
  "w-full rounded-2xl border border-charcoal/15 bg-white px-5 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-botanical focus:outline-none focus:ring-2 focus:ring-botanical/20";

type Status = "idle" | "submitting" | "success" | "error";

const emptyValues = { name: "", phone: "", email: "", message: "" };

// Mirrors the server-side check in app/api/contact/route.ts so the two layers
// agree; the server remains the authority, this is a UX fast-path.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [values, setValues] = useState(emptyValues);
  const { prefillMessage, setPrefillMessage } = useEnquiry();

  // Seed the message when arriving from the enquiry drawer's "Send via contact
  // form" action, then consume the prefill so it doesn't reapply on edits.
  useEffect(() => {
    if (!prefillMessage) return;
    setValues((prev) => ({ ...prev, message: prefillMessage }));
    setStatus("idle");
    setPrefillMessage(null);
  }, [prefillMessage, setPrefillMessage]);
  const [emailError, setEmailError] = useState<string | null>(null);

  // Every field must be non-empty before submitting is allowed.
  const isComplete = Object.values(values).every((value) => value.trim() !== "");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear a stale email error as the user corrects it; re-checked on blur/submit.
    if (name === "email" && emailError) setEmailError(null);
  }

  function validateEmail() {
    const email = values.email.trim();
    if (email && !EMAIL_REGEX.test(email)) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    setEmailError(null);
    return true;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isComplete || !validateEmail()) return;
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setValues(emptyValues);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
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
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={values.name}
          onChange={handleChange}
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
          value={values.phone}
          onChange={handleChange}
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
          value={values.email}
          onChange={handleChange}
          onBlur={validateEmail}
          aria-invalid={emailError ? true : undefined}
          aria-describedby={emailError ? "email-error" : undefined}
          placeholder="you@example.com"
          className={fieldClasses}
        />
        {emailError && (
          <p id="email-error" className="mt-2 text-sm text-red-600">
            {emailError}
          </p>
        )}
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
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us about your space and what you're looking for..."
          className={`${fieldClasses} resize-none`}
        />
      </div>

      {status === "error" && errorMessage && (
        <p role="alert" className="sm:col-span-2 text-sm text-red-600">
          {errorMessage}
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting" || !isComplete}
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
