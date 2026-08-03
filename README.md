# CharterBus.be

Premium charter bus & coach rental marketing site for Belgium, built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — pages (Home, Services, Fleet, Reviews, FAQ, About, Contact, legal pages)
- `src/components/sections` — page sections (Hero, Stats, Services grid, Fleet, Destinations, Testimonials, FAQ, CTA)
- `src/components/layout` — Navbar, Footer
- `src/components/ui` — Button, Container, Reveal (scroll animations), AnimatedCounter, SectionHeading
- `src/components/seo` — FAQPage and BreadcrumbList JSON-LD schema
- `src/lib/data.ts` — services, fleet, destinations, testimonials, FAQ content
- `src/lib/site.ts` — business info (address, phone, email, hours)
- `public/images` — generated marketing photography

## Notes

- The contact form (`src/components/sections/ContactForm.tsx`) currently opens a pre-filled `mailto:` to `info@charterbus.be` on submit — there is no backend email service wired up yet. To capture leads server-side, connect a provider (e.g. Resend, Formspree) and swap the submit handler for an API call.
- Testimonials in `src/lib/data.ts` are placeholder content and should be replaced with real, verified customer reviews before launch.

## Deploy

Deployed via Netlify (`@netlify/plugin-nextjs`, configured in `netlify.toml`).
