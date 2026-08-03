import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about booking, pricing, multi-day hire, international travel and WiFi on our charter buses.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <FaqSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know before booking your charter bus."
      />

      <section className="py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
