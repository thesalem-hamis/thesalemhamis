export type Project = {
  id: string;
  title: string;
  tagline: string;
  industry: string;
  stack: string[];
  year: string;
  href: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  heroImage: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    id: "maison-reserve",
    title: "Maison Reserve",
    tagline: "Luxury reservation platform for hotels, restaurants, and lounges.",
    industry: "Hospitality",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    year: "2024",
    href: "#",
    overview:
      "Maison Reserve is a luxury reservation platform built for high-end hotels, restaurants, and private lounges. The goal was to create a digital experience that matched the physical elegance of the brand — calm, confident, and effortlessly premium.",
    challenge:
      "The client had an outdated booking flow that was losing conversions on mobile. The brand identity was strong offline but completely absent in their digital presence.",
    solution:
      "We redesigned the entire booking journey from scratch — starting with a deep brand audit, then building a custom design system in Figma before writing a single line of code. The frontend was built in Next.js with fluid Framer Motion transitions on every interaction.",
    outcome:
      "Mobile conversions increased by 38% in the first month. Bounce rate dropped significantly and the client reported consistent praise from customers about the booking experience.",
    heroImage: "/src/assets/work-hospitality.jpg",
    gallery: [
      "/src/assets/work-hospitality.jpg",
      "/src/assets/work-realestate.jpg",
    ],
  },
  {
    id: "northline-estates",
    title: "Northline Estates",
    tagline: "Modern property showcase with premium branding and listings.",
    industry: "Real Estate",
    stack: ["Next.js", "GSAP", "Mapbox", "Tailwind CSS"],
    year: "2024",
    href: "#",
    overview:
      "Northline Estates needed a property showcase that felt as premium as the homes they were selling. The brief was simple: make it feel like a luxury magazine, not a property portal.",
    challenge:
      "Real estate sites are notoriously cluttered and data-heavy. The challenge was balancing rich listing information with a clean, editorial visual language.",
    solution:
      "We stripped the UI down to its essentials and let the photography do the work. GSAP scroll animations give each listing a cinematic reveal. Mapbox integration shows location context without leaving the page.",
    outcome:
      "The site became a key sales tool — agents now use it directly in client meetings. Average session time doubled compared to the previous site.",
    heroImage: "/src/assets/work-realestate.jpg",
    gallery: [
      "/src/assets/work-realestate.jpg",
      "/src/assets/work-hospitality.jpg",
    ],
  },
  {
    id: "studio-method",
    title: "Studio Method",
    tagline: "Minimal conversion-focused educational landing page.",
    industry: "Education",
    stack: ["React", "Tailwind CSS", "Stripe"],
    year: "2024",
    href: "#",
    overview:
      "Studio Method is an online education platform for creative professionals. The landing page needed to communicate credibility, drive course sign-ups, and handle payments — all in one clean, fast experience.",
    challenge:
      "The founder had tried two previous designs that looked good but didn't convert. The page needed to earn trust quickly and make the purchase decision feel easy.",
    solution:
      "We focused everything on the conversion path — clear hierarchy, social proof positioned at key scroll points, and a frictionless Stripe checkout embedded directly on the page.",
    outcome:
      "Sign-up rate improved by 52% over the previous design. The founder reported the new page paid for itself within the first week of launch.",
    heroImage: "/src/assets/work-course.jpg",
    gallery: [
      "/src/assets/work-course.jpg",
      "/src/assets/work-restaurant.jpg",
    ],
  },
  {
    id: "nori-restaurant",
    title: "Nori Restaurant",
    tagline: "Clean reservation-focused experience for a modern kitchen.",
    industry: "Restaurant",
    stack: ["Next.js", "Resend", "OpenTable"],
    year: "2024",
    href: "#",
    overview:
      "Nori is a modern Japanese kitchen that needed a website as considered as their food. The focus was on reservations, ambience, and menu — in that order.",
    challenge:
      "Restaurant websites often feel either too flashy or too plain. Nori needed something in between — warm, minimal, and fast on mobile where most diners would land.",
    solution:
      "We built around the reservation CTA first, then layered in the brand story through typography and photography. OpenTable integration keeps the booking flow native. Resend handles confirmation emails with branded templates.",
    outcome:
      "Reservation volume through the website increased by 60% in the first two months. The owner described it as the first time their website actually felt like part of the restaurant.",
    heroImage: "/src/assets/work-restaurant.jpg",
    gallery: [
      "/src/assets/work-restaurant.jpg",
      "/src/assets/work-course.jpg",
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}