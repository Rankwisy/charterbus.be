"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -32 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 32 },
    show: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  );
}
