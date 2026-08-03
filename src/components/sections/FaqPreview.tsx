import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { faqs } from "@/lib/data";

export function FaqPreview() {
  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          description="Quick answers about booking, pricing and travelling with CharterBus.be."
        />

        <Reveal delay={0.1} className="mt-12">
          <FaqAccordion items={faqs.slice(0, 4)} />
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <Button href="/faq" variant="secondary">
            View All FAQs
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
