import { useState } from "react";
import { projects } from "../../data/projects";
import { Dialog } from "../ui/dialog";
import { ProjectCard } from "./project-card";
import { ProjectPanel } from "./project-panel";

export function Projects() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selected = projects.find((p) => p.slug === selectedSlug) ?? null;

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-6 py-10 sm:px-6 sm:py-10"
    >
      <p className="mb-4 font-mono text-sm text-accent">Projects</p>
      <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
        Things I've built
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onSelect={() => setSelectedSlug(project.slug)}
          />
        ))}
      </div>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => !open && setSelectedSlug(null)}
        layoutId={selected ? `project-${selected.slug}` : undefined}
      >
        {selected && <ProjectPanel project={selected} />}
      </Dialog>
    </section>
  );
}
