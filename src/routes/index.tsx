import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Nebula } from "@/components/Nebula";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import portrait from "@/assets/ossai-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ossai Precious — Designing Digital Experiences That Feel Alive" },
      {
        name: "description",
        content:
          "Independent web designer and developer crafting Shopify, WordPress, and bespoke PHP experiences with cinematic detail.",
      },
      { property: "og:title", content: "Ossai Precious — Web Designer & Developer" },
      {
        property: "og:description",
        content:
          "Cinematic, performant websites for fashion, SaaS and creative brands. Shopify · WordPress · PHP.",
      },
      { property: "og:image", content: portrait },
      { name: "twitter:image", content: portrait },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nebula />
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-[11px] tracking-[0.18em] uppercase text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Available for projects
            </motion.span>

            <h1 className="mt-6 font-display font-semibold tracking-[-0.04em] leading-[0.92] text-[clamp(3rem,9vw,7.5rem)]">
              <span className="block text-gradient">Ossai</span>
              <span className="block">
                Precious<span className="text-coral">.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Designing digital experiences that feel alive. Independent designer crafting
              cinematic websites with{" "}
              <span className="text-foreground">Shopify</span>,{" "}
              <span className="text-foreground">WordPress</span> and bespoke{" "}
              <span className="text-foreground">PHP customization</span>.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/portfolio"
                className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-foreground text-background transition-transform hover:-translate-y-0.5 shadow-glow-teal"
              >
                View the work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:border-primary/40 transition-colors"
              >
                Start a project
              </Link>
            </div>

            {/* Stats */}
            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: "60+", l: "Shipped sites" },
                { v: "97", l: "Avg. Lighthouse" },
                { v: "8 yrs", l: "Crafting on the web" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl sm:text-3xl tracking-tight">{s.v}</dt>
                  <dd className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 via-transparent to-coral/30 blur-3xl opacity-60" />
              <div className="relative glass rounded-[2rem] p-2 shadow-elegant">
                <img
                  src={portrait}
                  alt="Ossai Precious — web designer"
                  width={1024}
                  height={1024}
                  className="w-full h-auto rounded-[1.7rem] object-cover aspect-[4/5]"
                />
              </div>

              {/* Floating UI atoms */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 sm:-left-12 top-12 glass rounded-2xl px-4 py-3 shadow-float"
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Lighthouse</p>
                <p className="font-display text-xl mt-0.5">98 · 100 · 100</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 sm:-right-10 bottom-16 glass rounded-2xl px-4 py-3 shadow-float"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-coral" />
                  <p className="text-xs font-medium">Now building · Atelier 04</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 h-20 w-20 rounded-full border border-primary/30 flex items-center justify-center"
              >
                <span className="text-[9px] tracking-[0.3em] text-primary uppercase">design · build · ship ·</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-primary mb-3">
                Selected Work · 2023—2024
              </p>
              <h2 className="font-display text-4xl sm:text-5xl tracking-tight max-w-2xl">
                Featured projects, crafted with intent.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              All projects
              <span className="h-px w-8 bg-current transition-all group-hover:w-12" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:auto-rows-[minmax(280px,auto)]">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-coral/10 blur-3xl" />
          <p className="relative text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Let's make something quietly remarkable
          </p>
          <h2 className="relative font-display text-5xl sm:text-7xl tracking-[-0.03em] leading-[0.95]">
            Have a project <span className="text-aurora italic">in mind?</span>
          </h2>
          <Link
            to="/contact"
            className="relative inline-flex mt-10 items-center gap-2 rounded-full px-8 py-4 text-sm font-medium bg-foreground text-background hover:-translate-y-0.5 transition-transform shadow-glow-coral"
          >
            Start the conversation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
