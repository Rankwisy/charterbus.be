import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See what businesses, schools and event organisers say about travelling with CharterBus.be across Belgium.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]} />
      <PageHero
        eyebrow="Reviews"
        title="Trusted by Groups Across Belgium"
        description="Real feedback from the businesses, schools and organisers we've travelled with."
      />

      <section className="py-16">
        <Container>
          <Reveal className="flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-bg-light px-8 py-6 text-center">
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-sm font-semibold text-primary">
              Rated highly by corporate, school and private travel groups
            </p>
          </Reveal>
        </Container>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  );
}
