import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Quote Request",
  description:
    "Contact CharterBus.be in Brussels for a free charter bus quote. Call, email or fill in the quote request form with your trip details.",
  alternates: { canonical: "/contact" },
};

const cards = [
  {
    icon: MapPin,
    title: "Address",
    lines: [site.address.street, `${site.address.postalCode} ${site.address.city}`, "Belgium"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [site.email],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: [site.phone],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Monday – Sunday", "09:00 – 18:00"],
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Contacts", path: "/contact" }]} />
      <PageHero
        eyebrow="Get in Touch"
        title="Request Your Free Quote"
        description="Tell us about your trip and our team will get back to you with a transparent quote."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title}>
                  <div className="h-full rounded-[20px] bg-white p-6 text-center shadow-sm shadow-black/5">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-primary">
                      {card.title}
                    </h3>
                    <div className="mt-2 space-y-0.5 text-sm text-text-light">
                      {card.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal direction="left">
            <div className="rounded-[24px] bg-bg-light p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-primary">Quote Request</h2>
              <p className="mt-2 text-sm text-text-light">
                Fill in your trip details and we&apos;ll respond with pricing and availability.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="h-full min-h-[420px] overflow-hidden rounded-[24px] shadow-sm shadow-black/5">
              <iframe
                title="CharterBus.be location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${site.address.street}, ${site.address.postalCode} ${site.address.city}, Belgium`
                )}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
