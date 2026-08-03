import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Corporate transportation, airport transfers, school trips, event transport, wedding bus rental and more — professional charter bus services across Belgium.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
      <PageHero
        eyebrow="Our Services"
        title="Transportation Services for Every Occasion"
        description="From daily corporate shuttles to international group tours, our coaches and drivers are ready for your itinerary."
      />
      <ServicesGrid showCta={false} />
      <CtaBanner />
    </>
  );
}
