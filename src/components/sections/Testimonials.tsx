import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="bg-bg-light py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Trusted by businesses, schools and event organisers across Belgium."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 4) * 0.08}>
              <div className="flex h-full flex-col rounded-[20px] bg-white p-7 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/5">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-text-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-primary">{t.name}</p>
                    <p className="text-xs text-text-light">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
