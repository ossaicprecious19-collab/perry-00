import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Nebula } from "@/components/Nebula";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ossai Precious" },
      {
        name: "description",
        content:
          "Start a project with Ossai Precious — Shopify, WordPress and PHP web design and development.",
      },
      { property: "og:title", content: "Contact Ossai Precious" },
      {
        property: "og:description",
        content: "Tell me about the project — I respond within 24 hours.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nebula />
      <Nav />

      <section className="pt-36 sm:pt-44 pb-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-primary mb-4">Contact</p>
            <h1 className="font-display text-5xl sm:text-6xl tracking-[-0.03em] leading-[0.95]">
              Let's build something{" "}
              <span className="text-aurora italic">memorable</span>.
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Tell me about the project — what you're building, who it's for, and where you'd like
              it to go. I respond within 24 hours.
            </p>

            <dl className="mt-10 space-y-5">
              {[
              { k: "Email", v: "ossaicprecious18@gmail.com" },
                { k: "WhatsApp", v: "+234 902 036 6951" },
                { k: "Based in", v: "Nigeria · working worldwide" },
                { k: "Response time", v: "Within 24 hours, weekdays" },
              ].map((row) => (
                <div key={row.k}>
                  <dt className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {row.k}
                  </dt>
                  <dd className="font-display text-lg mt-1">{row.v}</dd>
                </div>
              ))}
            </dl>

            <a
              href="https://wa.me/messages/VF4V2T5DTSCLJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full border border-glass-border bg-background/40 px-5 py-3 text-sm font-medium hover:border-primary/50 hover:-translate-y-0.5 transition-all shadow-elegant"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-7 glass rounded-3xl p-6 sm:p-10 shadow-elegant"
          >
            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-primary/15 flex items-center justify-center mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="font-display text-2xl tracking-tight">Message received.</h2>
                <p className="mt-2 text-muted-foreground max-w-sm mx-auto">
                  Thanks for reaching out — I'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Company / project" name="company" />
                <div>
                  <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Project type
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Shopify", "WordPress", "PHP customization", "Other"].map((opt) => (
                      <label
                        key={opt}
                        className="cursor-pointer rounded-full border border-glass-border px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors has-[:checked]:bg-primary has-[:checked]:text-primary-foreground has-[:checked]:border-primary"
                      >
                        <input type="radio" name="type" value={opt} className="sr-only" />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Tell me about it
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-2xl bg-background/40 border border-glass-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5 shadow-glow-teal"
                >
                  Send message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-full bg-background/40 border border-glass-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
      />
    </div>
  );
}
