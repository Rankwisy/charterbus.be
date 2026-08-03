import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Users2, Award, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Stats } from "@/components/sections/Stats";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CharterBus.be is a professional Belgian charter bus company delivering reliable, safe and customer-first coach travel across the country.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Reliable Transportation",
    description: "Punctual pickups and carefully planned routes, every time.",
    icon: ShieldCheck,
  },
  {
    title: "Experienced Drivers",
    description: "Licensed professionals trained in safe, courteous group travel.",
    icon: Users2,
  },
  {
    title: "Safe, Modern Vehicles",
    description: "A regularly inspected fleet maintained to the highest standard.",
    icon: Award,
  },
  {
    title: "Customer-First Service",
    description: "Transparent pricing and a team that plans every detail with you.",
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]} />
      <PageHero
        eyebrow="About Us"
        title="Belgium's Dependable Charter Bus Partner"
        description="Professional coach travel built on reliability, safety and genuine care for every group we move."
      />
      <Stats />

      <section className="py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="relative h-[420px] overflow-hidden rounded-[24px] shadow-xl shadow-primary/10">
              <Image
                src="/images/about-brussels.jpg"
                alt="Brussels Grand Place, Belgium"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal direction="right">
            <span className="mb-3 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
              Our Story
            </span>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-primary">
              A Professional Belgian Charter Bus Company
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-light">
              CharterBus.be was built around a simple idea: group travel in
              Belgium should be comfortable, predictable and stress-free. From
              our base in Brussels, we coordinate corporate transport, school
              trips, weddings, conferences and private tours across the
              country — matching every journey with the right vehicle and an
              experienced driver.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-light">
              We maintain a modern fleet, follow transparent pricing and stay
              reachable around the clock, so organisers can plan with
              confidence and travellers arrive relaxed and on time.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-bg-light py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(i % 4) * 0.06}>
                  <div className="h-full rounded-[20px] bg-white p-7 shadow-sm shadow-black/5">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
