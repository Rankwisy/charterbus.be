import {
  Building2,
  Plane,
  GraduationCap,
  PartyPopper,
  Heart,
  Trophy,
  Users,
  MapPin,
  Ship,
  Globe2,
  ShieldCheck,
  Bus,
  Clock,
  Wallet,
  CalendarCheck,
  Sofa,
  Leaf,
  Headset,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const services: Service[] = [
  {
    slug: "corporate-transportation",
    title: "Corporate Transportation",
    description:
      "Reliable coach and minibus travel for businesses, roadshows and staff shuttles across Belgium.",
    icon: Building2,
    image: "/images/fleet-standard-coach.jpg",
  },
  {
    slug: "airport-transfers",
    title: "Airport Transfers",
    description:
      "On-time private transfers to and from Brussels Airport and Charleroi Airport, tracked and stress-free.",
    icon: Plane,
    image: "/images/fleet-sprinter.jpg",
  },
  {
    slug: "school-trips",
    title: "School Trips",
    description:
      "Safe, supervised coach hire for school excursions, with licensed drivers experienced in group travel.",
    icon: GraduationCap,
    image: "/images/fleet-minibus.jpg",
  },
  {
    slug: "event-transportation",
    title: "Event Transportation",
    description:
      "Seamless group transport for festivals, concerts and conferences, timed to your schedule.",
    icon: PartyPopper,
    image: "/images/fleet-midicoach.jpg",
  },
  {
    slug: "wedding-bus-rental",
    title: "Wedding Bus Rental",
    description:
      "Elegant coaches to move guests comfortably between ceremony, reception and hotels.",
    icon: Heart,
    image: "/images/fleet-luxury-coach.jpg",
  },
  {
    slug: "sports-team-transport",
    title: "Sports Team Transport",
    description:
      "Spacious coaches with luggage capacity for teams, equipment and supporters travelling to fixtures.",
    icon: Trophy,
    image: "/images/fleet-standard-coach.jpg",
  },
  {
    slug: "business-conferences",
    title: "Business Conferences",
    description:
      "Coordinated delegate shuttles between hotels, venues and airports for conferences and summits.",
    icon: Users,
    image: "/images/fleet-vip-coach.jpg",
  },
  {
    slug: "private-group-tours",
    title: "Private Group Tours",
    description:
      "Custom-routed touring across Belgian cities with a dedicated driver and flexible stops.",
    icon: MapPin,
    image: "/images/about-brussels.jpg",
  },
  {
    slug: "cruise-transfers",
    title: "Cruise Transfers",
    description:
      "Coordinated group transfers to and from Belgian and neighbouring ports, luggage handled with care.",
    icon: Ship,
    image: "/images/fleet-minibus.jpg",
  },
  {
    slug: "international-bus-travel",
    title: "International Bus Travel",
    description:
      "Cross-border charter journeys throughout Western Europe with full documentation and support.",
    icon: Globe2,
    image: "/images/cta-highway.jpg",
  },
];

export type WhyItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyChooseUs: WhyItem[] = [
  {
    title: "Professional Drivers",
    description: "Licensed, experienced and background-checked coach drivers.",
    icon: ShieldCheck,
  },
  {
    title: "Modern Fleet",
    description: "Well-maintained Mercedes-Benz and premium coach vehicles.",
    icon: Bus,
  },
  {
    title: "On-Time Service",
    description: "Punctual pickups and route planning that respects your schedule.",
    icon: Clock,
  },
  {
    title: "Transparent Pricing",
    description: "Clear, all-inclusive quotes with no hidden fees.",
    icon: Wallet,
  },
  {
    title: "Flexible Booking",
    description: "Easy booking and rescheduling for single trips or multi-day hire.",
    icon: CalendarCheck,
  },
  {
    title: "Comfortable Coaches",
    description: "Reclining seats, climate control and generous legroom throughout.",
    icon: Sofa,
  },
  {
    title: "Eco Friendly Fleet",
    description: "Newer, lower-emission engines across our coach and minibus range.",
    icon: Leaf,
  },
  {
    title: "24/7 Customer Support",
    description: "A dedicated team available around the clock for every journey.",
    icon: Headset,
  },
];

export type FleetVehicle = {
  slug: string;
  name: string;
  passengers: string;
  image: string;
  features: string[];
};

export const fleet: FleetVehicle[] = [
  {
    slug: "mercedes-sprinter",
    name: "Mercedes Sprinter",
    passengers: "16–20 Passengers",
    image: "/images/fleet-sprinter.jpg",
    features: ["Luggage space", "WiFi", "Air conditioning", "USB charging"],
  },
  {
    slug: "mercedes-minibus",
    name: "Mercedes Minibus",
    passengers: "20–30 Passengers",
    image: "/images/fleet-minibus.jpg",
    features: ["Luggage space", "WiFi", "Air conditioning", "Reclining seats"],
  },
  {
    slug: "midi-coach",
    name: "Midi Coach",
    passengers: "35 Passengers",
    image: "/images/fleet-midicoach.jpg",
    features: ["WiFi", "Air conditioning", "USB charging", "Microphone"],
  },
  {
    slug: "standard-coach",
    name: "Standard Coach",
    passengers: "49 Passengers",
    image: "/images/fleet-standard-coach.jpg",
    features: ["WiFi", "Air conditioning", "Reclining seats", "Microphone"],
  },
  {
    slug: "luxury-coach",
    name: "Luxury Coach",
    passengers: "56 Passengers",
    image: "/images/fleet-luxury-coach.jpg",
    features: ["WiFi", "Reclining seats", "USB charging", "Microphone"],
  },
  {
    slug: "vip-coach",
    name: "VIP Coach",
    passengers: "60+ Passengers",
    image: "/images/fleet-vip-coach.jpg",
    features: ["Premium WiFi", "Reclining seats", "USB charging", "Microphone"],
  },
];

export const destinations = [
  "Brussels",
  "Antwerp",
  "Ghent",
  "Bruges",
  "Liège",
  "Leuven",
  "Charleroi",
  "Namur",
];

export const airportTransfers = ["Brussels Airport", "Charleroi Airport"];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

// Placeholder testimonials — replace with verified customer reviews before launch.
export const testimonials: Testimonial[] = [
  {
    name: "Sample Client",
    role: "Corporate Event Organiser, Brussels",
    quote:
      "Punctual, professional and the coach was spotless. Made coordinating transport for our conference effortless.",
    rating: 5,
  },
  {
    name: "Sample Client",
    role: "School Trip Coordinator, Antwerp",
    quote:
      "The driver was fantastic with the students and the bus was comfortable for the whole day trip.",
    rating: 5,
  },
  {
    name: "Sample Client",
    role: "Wedding Planner, Ghent",
    quote:
      "Guests were moved between venues right on schedule. Elegant coach, courteous driver.",
    rating: 5,
  },
  {
    name: "Sample Client",
    role: "Tour Operator, Bruges",
    quote:
      "Booking was simple and the quote was transparent from the start. Will book again for our next group tour.",
    rating: 5,
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "How do I book a charter bus with CharterBus.be?",
    answer:
      "Submit a quote request through our contact form or call us directly at +32 2 781 01 50. We'll confirm vehicle availability, pricing and itinerary details before finalising your booking.",
  },
  {
    question: "How much does it cost to rent a charter bus in Belgium?",
    answer:
      "Pricing depends on vehicle size, trip distance, duration and dates. We provide transparent, all-inclusive quotes with no hidden fees after reviewing your trip details.",
  },
  {
    question: "Can I rent a coach for multiple days?",
    answer:
      "Yes. We offer flexible single-day, multi-day and long-term charter options for tours, conferences and extended group travel.",
  },
  {
    question: "Can your buses travel internationally?",
    answer:
      "Yes, our coaches operate cross-border charter journeys throughout Western Europe with full documentation and driver support.",
  },
  {
    question: "Do your buses include WiFi?",
    answer:
      "Most of our fleet includes onboard WiFi, air conditioning and USB charging. Availability varies by vehicle class — ask us when requesting your quote.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellation terms depend on the booking type and notice given. Full details are confirmed in writing at the time of booking so there are no surprises.",
  },
];

export const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Trips Completed" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 24, suffix: "/7", label: "Support" },
];
