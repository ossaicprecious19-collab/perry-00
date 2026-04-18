import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Nebula } from "@/components/Nebula";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Ossai Precious" },
      {
        name: "description",
        content:
          "Selected web design and development projects: Shopify, WordPress and custom PHP work spanning fashion, SaaS, agencies and editorial.",
      },
      { property: "og:title", content: "Portfolio — Ossai Precious" },
      {
        property: "og:description",
        content: "Cinematic websites built across Shopify, WordPress and bespoke PHP.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nebula />
      <Nav />

      <section className="pt-36 sm:pt-44 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-primary mb-4">
              The Archive · 2020—2024
            </p>
            <h1 className="font-display text-5xl sm:text-7xl tracking-[-0.03em] leading-[0.95] max-w-4xl">
              A selection of websites built with{" "}
              <span className="text-aurora italic">care</span>, code and conviction.
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
              Each engagement begins with a conversation and ends with something that loads fast,
              feels considered and serves the people on the other side of the screen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid gap-5 md:grid-cols-2 md:auto-rows-[minmax(280px,auto)]">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl glass rounded-3xl p-8 sm:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { k: "Shopify", v: "Custom Liquid themes, headless storefronts, conversion-tuned PDPs." },
              { k: "WordPress", v: "Block themes, ACF Pro, headless setups and editor-first workflows." },
              { k: "PHP Scripts", v: "Plugin development, legacy script customization and integrations." },
            ].map((c) => (
              <div key={c.k}>
                <p className="font-display text-2xl tracking-tight mb-2">{c.k}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
