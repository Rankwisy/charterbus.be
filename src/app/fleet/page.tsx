import type { Metadata } from "next";
import Image from "next/image";
import { Users, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { fleet } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bus Fleet",
  description:
    "Explore our fleet of Mercedes Sprinters, minibuses, midi coaches and luxury coaches — from 16 to 60+ passengers, all equipped with WiFi, air conditioning and reclining seats.",
  alternates: { canonical: "/fleet" },
};

export default function FleetPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Bus Fleet", path: "/fleet" }]} />
      <PageHero
        eyebrow="Our Fleet"
        title="Modern Coaches for Every Group Size"
        description="Every vehicle is regularly serviced, professionally driven and equipped for a comfortable journey."
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {fleet.map((vehicle, i) => (
              <Reveal key={vehicle.slug} delay={(i % 3) * 0.08}>
                <div className="group h-full overflow-hidden rounded-[20px] bg-white shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-primary">{vehicle.name}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-secondary">
                      <Users className="h-4 w-4" />
                      {vehicle.passengers}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {vehicle.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-text-light">
                          <Check className="h-4 w-4 shrink-0 text-success" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="secondary" className="mt-6 w-full">
                      Request This Vehicle
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
