import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for booking and travelling with CharterBus.be.",
  alternates: { canonical: "/legal/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Please read these terms carefully before booking a trip with us."
      />
      <section className="py-20">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-text-light">
          <p>
            These Terms of Service govern the use of charter bus and coach
            rental services provided by {site.name}, {site.address.street},{" "}
            {site.address.postalCode} {site.address.city}, Belgium. By
            requesting a quote or booking a trip, you agree to these terms.
          </p>
          <h2 className="text-lg font-bold text-primary">Bookings &amp; Quotes</h2>
          <p>
            Quotes are provided based on the trip details submitted and are
            confirmed in writing once availability and final pricing are
            verified. Bookings are considered confirmed only after written
            confirmation from our team.
          </p>
          <h2 className="text-lg font-bold text-primary">Cancellations</h2>
          <p>
            Cancellation terms are confirmed at the time of booking and vary
            by trip type, notice period and vehicle reserved.
          </p>
          <h2 className="text-lg font-bold text-primary">Liability</h2>
          <p>
            {site.name} operates licensed vehicles with professional drivers
            and maintains appropriate insurance coverage as required under
            Belgian transport regulations.
          </p>
          <h2 className="text-lg font-bold text-primary">Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${site.email}`} className="text-secondary hover:underline">
              {site.email}
            </a>{" "}
            or by phone at {site.phone}.
          </p>
        </Container>
      </section>
    </>
  );
}
