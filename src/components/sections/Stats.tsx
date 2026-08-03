import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="relative -mt-20 z-20">
      <Container>
        <Reveal direction="scale">
          <div className="grid grid-cols-2 gap-6 rounded-3xl bg-white p-8 shadow-2xl shadow-primary/10 sm:grid-cols-4 sm:p-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl font-extrabold text-primary sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-text-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
