import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CharterBus.be collects, uses and protects your personal data.",
  alternates: { canonical: "/legal/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use and protect your personal information."
      />
      <section className="py-20">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-text-light">
          <p>
            {site.name} collects the personal information you submit through
            our quote request form — such as your name, email, phone number
            and trip details — solely to provide quotes, manage bookings and
            respond to enquiries.
          </p>
          <h2 className="text-lg font-bold text-primary">Data We Collect</h2>
          <p>
            Contact details and trip information submitted via our forms, and
            information you provide when contacting us by phone or email.
          </p>
          <h2 className="text-lg font-bold text-primary">How We Use It</h2>
          <p>
            To prepare quotes, confirm bookings, coordinate driver and vehicle
            assignments, and communicate with you about your trip.
          </p>
          <h2 className="text-lg font-bold text-primary">Your Rights</h2>
          <p>
            Under the EU General Data Protection Regulation (GDPR), you may
            request access to, correction of, or deletion of your personal
            data at any time by contacting us at{" "}
            <a href={`mailto:${site.email}`} className="text-secondary hover:underline">
              {site.email}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
