import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How CharterBus.be uses cookies on this website.",
  alternates: { canonical: "/legal/cookies" },
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        description="Information about the cookies used on this website."
      />
      <section className="py-20">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-text-light">
          <p>
            This website uses essential cookies required for core
            functionality. We do not currently use tracking or advertising
            cookies. If analytics or marketing cookies are added in future,
            this policy will be updated and a consent banner will be
            introduced accordingly.
          </p>
          <p>
            Questions about our use of cookies can be sent to{" "}
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
