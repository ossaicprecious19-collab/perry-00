import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center"
    >
      <motion.nav
        animate={{
          marginTop: scrolled ? 16 : 0,
          width: scrolled ? "min(92%, 640px)" : "100%",
          borderRadius: scrolled ? 999 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`flex items-center justify-between px-6 sm:px-8 py-3 ${
          scrolled ? "glass shadow-float" : "bg-transparent"
        }`}
      >
        <Link to="/" className="group flex items-center gap-2">
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-coral opacity-80 blur-sm group-hover:opacity-100 transition-opacity" />
            <span className="relative h-3 w-3 rounded-full bg-foreground" />
          </span>
          <span className="font-display font-semibold tracking-tight text-sm">
            Ossai<span className="text-primary">.</span>
          </span>
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="relative px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.header>
  );
}
