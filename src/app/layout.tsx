import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Reliable coach hire, minibus rental, airport transfers, corporate transportation and private group travel across Belgium with professional drivers.",
  keywords: [
    "charter bus Belgium",
    "coach rental Brussels",
    "minibus rental Belgium",
    "airport transfer Brussels",
    "bus hire Belgium",
  ],
  openGraph: {
    type: "website",
    locale: "en_BE",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      "Reliable coach hire, minibus rental, airport transfers, corporate transportation and private group travel across Belgium.",
    images: [{ url: "/images/hero-coach-brussels.jpg", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description:
      "Reliable coach hire, minibus rental, airport transfers and private group travel across Belgium.",
    images: ["/images/hero-coach-brussels.jpg"],
  },
  alternates: {
    canonical: site.url,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    contactType: "customer service",
    areaServed: "BE",
    availableLanguage: ["English", "French", "Dutch"],
  },
  sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  image: `${site.url}/images/hero-coach-brussels.jpg`,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: "BE",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  areaServed: site.serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
