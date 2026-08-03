import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FleetPreview } from "@/components/sections/FleetPreview";
import { Destinations } from "@/components/sections/Destinations";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { faqs } from "@/lib/data";

export default function Home() {
  return (
    <>
      <FaqSchema items={faqs} />
      <Hero />
      <Stats />
      <ServicesGrid />
      <WhyChooseUs />
      <FleetPreview />
      <Destinations />
      <Testimonials />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
