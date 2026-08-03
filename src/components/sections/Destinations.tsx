import Link from "next/link";
import { MapPin, Plane } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { destinations, airportTransfers } from "@/lib/data";

export function Destinations() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Where We Travel"
          title="Popular Destinations Across Belgium"
          description="Serving every major Belgian city, with dedicated airport transfer routes."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {destinations.map((city, i) => (
            <Reveal key={city} delay={(i % 4) * 0.06}>
              <Link
                href="/contact"
                className="group flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-5 py-5 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="font-semibold text-primary">{city}</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8">
          <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-bg-light px-6 py-5">
            <span className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Plane className="h-4 w-4 text-secondary" />
              Airport Transfers:
            </span>
            {airportTransfers.map((a) => (
              <span
                key={a}
                className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-text-light shadow-sm"
              >
                {a}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
