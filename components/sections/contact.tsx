import { Mail, Phone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { ContactForm } from "@/components/sections/contact-form";
import { WhatsAppIcon } from "@/components/layout/whatsapp-icon";
import { getSiteSettings } from "@/lib/sanity/fetch";

export async function Contact() {
  const settings = await getSiteSettings();

  const infoItems = [
    {
      icon: Phone,
      label: "Call us",
      value: settings.phone,
      href: `tel:${settings.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email us",
      value: settings.email,
      href: `mailto:${settings.email}`,
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's start your project"
          description="Tell us about your space and goals, and our team will get back to you with the right plants and solutions."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <ContactForm />
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              {infoItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-botanical/10 text-botanical">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium tracking-[0.15em] text-charcoal/50 uppercase">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-charcoal">
                        {item.value}
                      </span>
                    </span>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-2xl border border-charcoal/10 p-5 transition-colors hover:border-botanical/40 hover:bg-cream"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-charcoal/10 p-5"
                  >
                    {content}
                  </div>
                );
              })}

              <a
                href={`https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-botanical p-5 text-white transition-colors hover:bg-botanical-dark"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-medium tracking-[0.15em] text-white/70 uppercase">
                    Chat with us
                  </span>
                  <span className="mt-1 block text-sm font-medium">Message us on WhatsApp</span>
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
