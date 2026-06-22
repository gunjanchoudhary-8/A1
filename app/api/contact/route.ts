import { Resend } from "resend";

import { getSiteSettings } from "@/lib/sanity/fetch";

/**
 * Handles contact form submissions by emailing them to the business via
 * Resend. Requires RESEND_API_KEY; the recipient defaults to CONTACT_EMAIL_TO,
 * then the site settings email, and the sender to CONTACT_EMAIL_FROM (which
 * must be an address on a domain verified in your Resend account).
 */

interface ContactPayload {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
}

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = asTrimmedString(body.name);
  const phone = asTrimmedString(body.phone);
  const email = asTrimmedString(body.email);
  const message = asTrimmedString(body.message);

  if (!name || !phone || !email || !message) {
    return Response.json(
      { error: "Please fill in your name, phone, email and message." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set; cannot deliver submission.");
    return Response.json(
      { error: "The contact form isn't configured yet. Please reach us by phone or WhatsApp." },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_EMAIL_TO || (await getSiteSettings()).email;
  const from = process.env.CONTACT_EMAIL_FROM || "A1 Nursery <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New enquiry from ${name}`,
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`,
    html: `
      <h2>New enquiry from the website</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    console.error("Contact form: Resend failed to send:", error);
    return Response.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
