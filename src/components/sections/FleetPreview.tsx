import Image from "next/image";
import { Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { fleet } from "@/lib/data";

export function FleetPreview() {
  return (
    <section className="bg-primary py-24">
      <Container>
        <SectionHeading
          light
          eyebrow="Our Fleet"
          title="A Vehicle for Every Group Size"
          description="Modern, well-maintained coaches and minibuses equipped for comfort on every route."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((vehicle, i) => (
            <Reveal key={vehicle.slug} delay={(i % 3) * 0.08}>
              <div className="group overflow-hidden rounded-[20px] bg-white/5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">{vehicle.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-accent">
                    <Users className="h-4 w-4" />
                    {vehicle.passengers}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {vehicle.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button href="/fleet" variant="ghost">
            Explore Full Fleet
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
