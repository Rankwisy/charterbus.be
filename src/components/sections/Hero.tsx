"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Bus, Award, Headset } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const badges = [
  { icon: ShieldCheck, label: "Licensed" },
  { icon: Award, label: "Professional Drivers" },
  { icon: Bus, label: "Modern Fleet" },
  { icon: Headset, label: "24/7 Support" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-20">
      <Image
        src="/images/hero-coach-brussels.jpg"
        alt="Luxury modern charter coach in Brussels"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent" />

      <Container className="relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="mb-5 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur">
            Belgium&apos;s Trusted Coach Partner
          </span>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[64px]">
            Premium Charter Bus Rental in Belgium
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Reliable coach hire, minibus rental, airport transfers, corporate
            transportation and private group travel across Belgium with
            professional drivers.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact" className="text-base">
              Get Free Quote
            </Button>
            <Button href="/fleet" variant="ghost" className="text-base">
              View Fleet
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-white/90">
                <Icon className="h-4 w-4 text-accent" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
