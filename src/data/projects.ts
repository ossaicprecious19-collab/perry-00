import fashion from "@/assets/project-fashion.jpg";
import saas from "@/assets/project-saas.jpg";
import agency from "@/assets/project-agency.jpg";
import story from "@/assets/project-story.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  stack: string;
  image: string;
  lighthouse: number;
  year: string;
  description: string;
  span?: "tall" | "wide" | "default";
};

export const projects: Project[] = [
  {
    slug: "luxe-atelier",
    title: "Luxe Atelier",
    category: "Luxury Fashion E-commerce",
    stack: "Shopify · Liquid · GSAP",
    image: fashion,
    lighthouse: 98,
    year: "2024",
    description:
      "A monochrome editorial commerce experience for an avant-garde fashion house — built on Shopify with a custom Liquid theme and choreographed GSAP transitions.",
    span: "tall",
  },
  {
    slug: "northwind-os",
    title: "Northwind OS",
    category: "SaaS Analytics Dashboard",
    stack: "WordPress Headless · React · PHP",
    image: saas,
    lighthouse: 96,
    year: "2024",
    description:
      "A real-time analytics surface for a B2B platform. Headless WordPress drives marketing while a custom dashboard renders live data.",
    span: "wide",
  },
  {
    slug: "studio-pewlist",
    title: "Studio Pewlist",
    category: "Creative Agency",
    stack: "WordPress · ACF · PHP",
    image: agency,
    lighthouse: 97,
    year: "2023",
    description:
      "Bold typographic identity for an independent design agency. Hand-crafted ACF blocks let editors compose brutalist layouts safely.",
  },
  {
    slug: "the-quiet-orbit",
    title: "The Quiet Orbit",
    category: "Interactive Storytelling",
    stack: "Custom PHP · WebGL · Vite",
    image: story,
    lighthouse: 95,
    year: "2024",
    description:
      "A scrollytelling longform piece with WebGL skies and a bespoke PHP CMS for the editorial team.",
  },
];
