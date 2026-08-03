import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyChooseUs } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Why CharterBus.be"
          title="Why Choose Us"
          description="Everything you need for dependable group travel, handled by a team that treats every trip as important."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.06}>
                <div className="group h-full rounded-[20px] border border-black/5 bg-white p-7 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/20 hover:shadow-xl hover:shadow-secondary/10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
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
  );
}
