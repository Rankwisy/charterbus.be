import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary pb-20 pt-40">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <Container className="relative z-10 text-center">
        <Reveal>
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{description}</p>
        </Reveal>
      </Container>
    </section>
  );
}
