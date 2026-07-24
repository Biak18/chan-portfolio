import { SquareArrowOutUpRight } from "lucide-react";
import type { Project } from "../../types/project";
import { GithubIcon } from "../ui/icons";
import { Chip } from "../ui/chip";
import { buttonVariants } from "../ui/button";

function PanelSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
        {title}
      </h3>
      <div className="mt-2 text-sm leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export function ProjectPanel({ project }: { project: Project }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-foreground">
        {project.title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-muted">
        {project.overview}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants("secondary")}
          >
            <GithubIcon width={16} height={16} /> Repository
          </a>
        )}
        {/* <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants("secondary")}
        >
          <GithubIcon width={16} height={16} /> Repository
        </a> */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants("primary")}
          >
            <SquareArrowOutUpRight size={16} /> Live demo
          </a>
        )}
      </div>

      {project.screenshots && project.screenshots.length > 0 && (
        <div className="mt-8 space-y-4">
          {project.screenshots.map((src) => (
            <img
              key={src}
              src={src}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="w-full rounded-xl border border-border"
            />
          ))}
        </div>
      )}

      <PanelSection title="Tech Stack">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
      </PanelSection>

      <PanelSection title="Architecture">{project.architecture}</PanelSection>
      <PanelSection title="Challenges">{project.challenges}</PanelSection>
      <PanelSection title="Lessons Learned">
        {project.lessonsLearned}
      </PanelSection>
    </div>
  );
}
