import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3 items-end">
        <div>
          <p className="font-display text-2xl tracking-tight">
            Ossai<span className="text-primary">.</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Designing digital experiences that feel alive.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground md:justify-center">
          <Link to="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </nav>
        <p className="text-xs text-muted-foreground md:text-right">
          © {new Date().getFullYear()} Ossai Precious. Crafted with intent.
        </p>
      </div>
    </footer>
  );
}
