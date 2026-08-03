"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Bus, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services" },
  { href: "/fleet", label: "Bus Fleet" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contacts" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-white/95 shadow-md shadow-black/5 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-extrabold">
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full",
              solid ? "bg-primary" : "bg-white/15 backdrop-blur"
            )}
          >
            <Bus className={cn("h-5 w-5", solid ? "text-accent" : "text-accent")} />
          </span>
          <span className={solid ? "text-primary" : "text-white"}>
            Charter<span className="text-secondary">Bus</span>
            <span className={solid ? "text-secondary" : "text-accent"}>.be</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                solid
                  ? "text-text hover:bg-bg-light hover:text-secondary"
                  : "text-white/90 hover:bg-white/10 hover:text-white",
                pathname === link.href &&
                  (solid ? "bg-bg-light text-secondary" : "bg-white/10 text-white")
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold transition-colors",
              solid ? "text-primary" : "text-white"
            )}
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Button href="/contact" className="px-6 py-3 text-sm">
            Get a Quote
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
            solid ? "text-primary" : "text-white"
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-5 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium text-text hover:bg-bg-light",
                  pathname === link.href && "bg-bg-light text-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
            <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
