import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const tall = project.span === "tall";
  const wide = project.span === "wide";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
      style={{ transformPerspective: 1200 }}
      className={`group relative overflow-hidden rounded-3xl glass shadow-elegant ${
        tall ? "md:row-span-2" : ""
      } ${wide ? "md:col-span-2" : ""}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-glass-border">
        <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <div className="ml-3 flex-1 h-5 rounded-md bg-background/40 border border-glass-border flex items-center px-2">
          <span className="text-[10px] text-muted-foreground tracking-wide truncate">
            ossaiprecious.design/{project.slug}
          </span>
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={`${project.title} — ${project.category}`}
          loading="lazy"
          width={1280}
          height={896}
          className="w-full h-full object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-105"
          style={{ aspectRatio: tall ? "4/5" : wide ? "16/8" : "16/10" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />

        {/* Floating cursor */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute top-1/2 left-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div className="relative">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
              <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="currentColor" className="text-foreground" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Meta */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary/90 mb-1.5">
              {project.category}
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1 truncate">{project.stack}</p>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-1">
            <span className="inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1 text-[10px] font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {project.lighthouse}
            </span>
            <span className="text-[10px] text-muted-foreground">{project.year}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
