import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest",
              light
                ? "bg-white/10 text-accent"
                : "bg-secondary/10 text-secondary"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl",
            light ? "text-white" : "text-primary"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-4 text-lg leading-relaxed",
              light ? "text-white/70" : "text-text-light"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
