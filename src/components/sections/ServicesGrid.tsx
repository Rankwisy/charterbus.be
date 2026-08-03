import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services, type Service } from "@/lib/data";

export function ServicesGrid({
  items = services,
  showCta = true,
}: {
  items?: Service[];
  showCta?: boolean;
}) {
  return (
    <section className="bg-bg-light py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Services"
          description="From corporate travel to private tours, we cover every kind of group journey across Belgium."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <div className="group h-full overflow-hidden rounded-[20px] bg-white shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/0 to-transparent" />
                    <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-md">
                      <Icon className="h-5 w-5 text-secondary" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {service.description}
                    </p>
                    <Link
                      href="/services"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-colors group-hover:text-accent"
                    >
                      Learn More
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {showCta && (
          <Reveal className="mt-12 flex justify-center">
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
