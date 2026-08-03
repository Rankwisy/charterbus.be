import Link from "next/link";
import { Bus, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { services, fleet } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr_0.9fr]">
        <div>
          <Link href="/" className="flex items-center gap-2 font-heading text-xl font-extrabold">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
              <Bus className="h-5 w-5 text-accent" />
            </span>
            Charter<span className="text-secondary">Bus</span>
            <span className="text-accent">.be</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Premium charter bus and coach rental across Belgium — corporate
            transport, airport transfers and private group travel with
            professional drivers.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-accent" />
              {site.address.street}, {site.address.postalCode} {site.address.city}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href={site.phoneHref} className="hover:text-accent">{site.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {[
              { icon: FacebookIcon, href: site.social.facebook },
              { icon: InstagramIcon, href: site.social.instagram },
              { icon: LinkedinIcon, href: site.social.linkedin },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
            Company
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link href="/reviews" className="hover:text-accent">Reviews</Link></li>
            <li><Link href="/faq" className="hover:text-accent">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contacts</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
            Services
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href="/services" className="hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
            Fleet
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            {fleet.map((v) => (
              <li key={v.slug}>
                <Link href="/fleet" className="hover:text-accent">
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
            Legal
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="/legal/terms" className="hover:text-accent">Terms of Service</Link></li>
            <li><Link href="/legal/privacy" className="hover:text-accent">Privacy Policy</Link></li>
            <li><Link href="/legal/cookies" className="hover:text-accent">Cookie Policy</Link></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} CharterBus.be. All Rights Reserved.</p>
          <p>{site.hours}</p>
        </Container>
      </div>
    </footer>
  );
}
