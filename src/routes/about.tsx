import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Nebula } from "@/components/Nebula";
import { motion } from "framer-motion";
import portrait from "@/assets/ossai-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ossai Precious" },
      {
        name: "description",
        content:
          "About Ossai Precious — independent web designer and developer working across Shopify, WordPress and PHP.",
      },
      { property: "og:title", content: "About Ossai Precious" },
      {
        property: "og:description",
        content: "An independent designer working at the intersection of craft, code and care.",
      },
      { property: "og:image", content: portrait },
      { name: "twitter:image", content: portrait },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2024", t: "Independent practice", d: "Working with fashion houses, SaaS teams and editorial brands worldwide." },
  { year: "2022", t: "Senior designer at a product studio", d: "Led design systems and Shopify Plus migrations for DTC brands." },
  { year: "2019", t: "First freelance projects", d: "Built WordPress sites and custom PHP scripts for small agencies." },
  { year: "2017", t: "First line of code", d: "Started learning the web by taking apart themes and putting them back together." },
];

const stack = [
  "Shopify · Liquid",
  "WordPress · ACF Pro",
  "PHP · Laravel",
  "React · TypeScript",
  "Figma · After Effects",
  "GSAP · Framer Motion",
];

function About() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nebula />
      <Nav />

      <section className="pt-36 sm:pt-44 pb-20 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-primary mb-4">About</p>
            <h1 className="font-display text-5xl sm:text-7xl tracking-[-0.03em] leading-[0.95]">
              I design websites that <span className="text-aurora italic">breathe</span>.
            </h1>
            <div className="mt-8 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                I'm Ossai Precious — an independent web designer and developer working at the
                intersection of craft, code and care. For almost a decade I've been building
                websites that feel a little quieter, a little more considered, and a lot more alive.
              </p>
              <p>
                My work spans <span className="text-foreground">Shopify storefronts</span>,{" "}
                <span className="text-foreground">WordPress builds</span> and bespoke{" "}
                <span className="text-foreground">PHP script customization</span>. I care about
                typography, motion, performance, and the small moments that make a website feel
                like it was made by a human.
              </p>
              <p>
                I work with a small number of clients each year so I can stay close to the
                details — from the first sketch to the final commit.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/25 to-coral/25 blur-3xl" />
              <div className="relative glass rounded-[2rem] p-2 shadow-elegant">
                <img
                  src={portrait}
                  alt="Ossai Precious"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-auto rounded-[1.7rem] object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-12">
            A short timeline.
          </h2>
          <ol className="relative border-l border-border/60 ml-3">
            {timeline.map((row, i) => (
              <motion.li
                key={row.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="pl-8 pb-12 last:pb-0 relative"
              >
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary shadow-glow-teal" />
                <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{row.year}</p>
                <h3 className="font-display text-xl mt-1">{row.t}</h3>
                <p className="text-muted-foreground mt-1.5 max-w-xl">{row.d}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stack */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl glass rounded-3xl p-8 sm:p-12">
          <p className="text-[11px] uppercase tracking-[0.25em] text-primary mb-4">Toolkit</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-8">
            Tools I reach for, daily.
          </h2>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-glass-border px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
