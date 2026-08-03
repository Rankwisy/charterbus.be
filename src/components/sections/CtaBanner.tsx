import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-28">
      <Image
        src="/images/cta-highway.jpg"
        alt="Charter coach travelling across Belgium"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/70" />

      <Container className="relative z-10 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Ready to Plan Your Trip Across Belgium?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Get a free, no-obligation quote in minutes. Our team responds fast
            and plans every detail with you.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/contact" className="text-base">
              Get Free Quote
            </Button>
            <Button href={site.phoneHref} variant="ghost" className="text-base">
              Call {site.phone}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
